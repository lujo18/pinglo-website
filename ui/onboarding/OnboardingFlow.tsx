import React, {
  Children,
  createContext,
  memo,
  ReactElement,
  useContext,
  useMemo,
  useRef,
  useState,
  useCallback,
  useEffect,
} from "react";
import PagerView from "react-native-pager-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { XStack, YStack } from "tamagui";
import Page from "../Page";
import OnboardingProgressHeader from "./OnboardingProgressHeader";
import ButtonA from "../buttons/ButtonA";

interface OnboardingContextType {
  page: number;
  goNext: (index: number) => void;
  goBack: (index: number) => void;
}

const OnboardingContext = createContext<OnboardingContextType | null>(null);

export const useOnboarding = () => {
  const ctx = useContext(OnboardingContext);
  if (!ctx)
    throw new Error("useOnboarding must be used inside <OnboardingFlow>");
  return ctx;
};

export interface OnboardingChildren {
  next?: () => void;
  back?: () => void;
  active?: boolean;
  nextButton?: string;
  children?: ReactElement[];
}

interface OnboardingFlowProps {
  children: ReactElement<OnboardingChildren>[];
  progressBar?: boolean;
}

type PageDescriptor = {
  element: ReactElement<OnboardingChildren>;
  index: number;
  groupName?: string;
  subIndex?: number;
};

export type ProgressGroupMeta = {
  name: string;
  start: number;
  end: number;
  length: number;
};

const PRELOAD_RANGE = 1;

const PAD_4 = "$4" as any;
const PAD_6 = "$6" as any;

const OnboardingFlowRoot = ({
  children,
  progressBar = true,
}: OnboardingFlowProps) => {
  const pagerRef = useRef<PagerView>(null);
  const [page, setPage] = useState(0);
  const [renderedPages, setRenderedPages] = useState(
    () => new Set<number>([0])
  );
  const { bottom: bottomInset } = useSafeAreaInsets();

  const { pageDescriptors, groupMeta } = useMemo(() => {
    const descriptors: PageDescriptor[] = [];
    const groups = new Map<string, { name: string; start: number; end: number }>();

    Children.forEach(children, (child) => {
      if (!React.isValidElement(child)) {
        return;
      }

      if (child.type === Group) {
        const { children: groupChildren, groupName } = child.props as GroupType;
        const normalizedChildren = Children.toArray(groupChildren) as ReactElement<OnboardingChildren>[];

        normalizedChildren.forEach((groupChild, subIndex) => {
          if (!React.isValidElement(groupChild)) {
            return;
          }

          const index = descriptors.length;
          descriptors.push({
            element: groupChild,
            index,
            groupName,
            subIndex,
          });

          const existing = groups.get(groupName);
          if (!existing) {
            groups.set(groupName, { name: groupName, start: index, end: index });
          } else {
            existing.end = index;
          }
        });

        return;
      }

      const index = descriptors.length;
      descriptors.push({
        element: child as ReactElement<OnboardingChildren>,
        index,
      });
    });

    const groupMetaList: ProgressGroupMeta[] = Array.from(groups.values()).map(
      (group) => ({
        ...group,
        length: group.end - group.start + 1,
      })
    );

    return { pageDescriptors: descriptors, groupMeta: groupMetaList };
  }, [children]);

  const totalPages = pageDescriptors.length;

  useEffect(() => {
    setRenderedPages((prev) => {
      const retentionThreshold = Math.max(0, page - 2);
      const next = new Set<number>();

      prev.forEach((idx) => {
        if (idx >= retentionThreshold && idx < totalPages) {
          next.add(idx);
        }
      });

      for (let offset = -PRELOAD_RANGE; offset <= PRELOAD_RANGE; offset += 1) {
        const target = page + offset;
        if (target >= 0 && target < totalPages) {
          next.add(target);
        }
      }

      const unchanged = next.size === prev.size && [...next].every((value) => prev.has(value));
      return unchanged ? prev : next;
    });
  }, [page, totalPages]);

  // Memoize navigation functions to prevent unnecessary re-renders
  const goNext = useCallback((index: number) => {
    setPage((prev) => {
      const target = Math.min(index + 1, totalPages - 1);
      if (target === prev) {
        return prev;
      }
      pagerRef.current?.setPage(target);
      return target;
    });
  }, [totalPages]);

  const goBack = useCallback((index: number) => {
    setPage((prev) => {
      const target = Math.max(index - 1, 0);
      if (target === prev) {
        return prev;
      }
      pagerRef.current?.setPage(target);
      return target;
    });
  }, []);

  // Memoize context value to prevent unnecessary re-renders of consumers
  const contextValue = useMemo(
    () => ({ page, goNext, goBack }),
    [page, goNext, goBack]
  );

  const activeDescriptor = pageDescriptors[page];
  const activeGroupName = activeDescriptor?.groupName ?? null;
  const shouldShowProgress = progressBar && !!activeGroupName;

  return (
    <OnboardingContext.Provider value={contextValue}>
  <Page p={0} gap={0} insets={[]}>
        <XStack
          style={{ opacity: shouldShowProgress ? 1 : 0 }}
          display={shouldShowProgress ? "block" : "none"}
          pointerEvents={shouldShowProgress ? "auto" : "none"}
        >
          <OnboardingProgressHeader
            page={page}
            groups={groupMeta}
            activeGroupName={activeGroupName}
          />
        </XStack>

        <PagerView
          offscreenPageLimit={1}
          style={{ flex: 1 }}
          initialPage={0}
          scrollEnabled={false}
          ref={pagerRef}
          
        >
          {pageDescriptors.map((descriptor, idx) => {
            const isRendered = renderedPages.has(idx);
            if (!isRendered) {
              return (
                <YStack
                  key={idx}
                  flex={1}
                  {...(descriptor.groupName ? { p: PAD_4, pt: PAD_6 } : {})}
                />
              );
            }

            const { element } = descriptor;
            const isValidStep = React.isValidElement(element);
            const nextButton = isValidStep && element.props.nextButton
              ? element.props.nextButton
              : null;
            const isGroupedPage = !!descriptor.groupName;

            return (
              <YStack
                key={idx}
                flex={1}
                {...(isGroupedPage ? { p: PAD_4, pt: PAD_6 } : {})}
              >
                <YStack
                  flex={1}
                  style={{ paddingBottom: isGroupedPage ? bottomInset : 0 }}
                >
                  <StepRenderer
                    descriptor={descriptor}
                    idx={idx}
                    page={page}
                    goNext={goNext}
                    goBack={goBack}
                  />
                </YStack>

                {nextButton && idx < totalPages - 1 && (
                  <XStack p={PAD_4} pb={PAD_6}>
                    <NextButton idx={idx} goNext={goNext}>
                      {nextButton}
                    </NextButton>
                  </XStack>
                )}
              </YStack>
            );
          })}
        </PagerView>
      </Page>
    </OnboardingContext.Provider>
  );
};

export type GroupType = {
  children: ReactElement<GroupChildProps>[];
  groupName: string;
};

export type GroupChildProps = {
  group?: string;
  groupStartIndex?: number;
  subIndex?: number;
  [key: string]: any;
};

const Group = ({ children }: GroupType) => {
  return <>{children}</>;
};

// Memoized component to render individual steps without forcing re-renders
const StepRenderer = memo(({ 
  descriptor,
  idx, 
  page, 
  goNext, 
  goBack 
}: { 
  descriptor: PageDescriptor;
  idx: number; 
  page: number; 
  goNext: (idx: number) => void; 
  goBack: (idx: number) => void; 
}) => {

  const nextHandler = useCallback(() => goNext(idx), [goNext, idx]);
  const backHandler = useCallback(() => goBack(idx), [goBack, idx]);

  const { element, groupName, subIndex } = descriptor;

  if (!React.isValidElement(element)) {
    return element;
  }

  const elementProps = element.props as OnboardingChildren & GroupChildProps;
  const injectedProps: Partial<OnboardingChildren & GroupChildProps> = {
    ...elementProps,
    next: elementProps?.next ?? nextHandler,
    back: backHandler,
    active: idx === page,
  };

  if (groupName) {
    injectedProps.group = groupName;
    injectedProps.subIndex = subIndex;
  }

  return React.cloneElement(element, injectedProps);
}, (prevProps, nextProps) => {
  // Only re-render if:
  // 1. This page becomes active/inactive (idx === page changes)
  // 2. The step content itself changes (shouldn't happen)
  // 3. Navigation functions change (shouldn't happen due to useCallback)
  const wasActive = prevProps.idx === prevProps.page;
  const isActive = nextProps.idx === nextProps.page;
  
  if (wasActive === isActive && !isActive) {
    return prevProps.descriptor === nextProps.descriptor &&
           prevProps.goNext === nextProps.goNext &&
           prevProps.goBack === nextProps.goBack;
  }

  return wasActive === isActive &&
         prevProps.descriptor === nextProps.descriptor &&
         prevProps.goNext === nextProps.goNext &&
         prevProps.goBack === nextProps.goBack;
});

// Memoized Next Button component
export const NextButton = memo(({ 
  idx, 
  onPress,
  goNext, 
  children 
}: { 
  idx?: number; 
  onPress?: () => void;
  goNext?: (idx: number) => void; 
  children: string; 
}) => {
  const handlePress = useCallback(() => {
    if (onPress) {
      onPress();
      return;
    }
    if (goNext) {
      goNext(idx ?? 0);
    }
  }, [goNext, onPress, idx]);
  
  return (
    <ButtonA  flex={1} onPress={handlePress}>
      {children}
    </ButtonA>
  );
});

OnboardingFlowRoot.Group = Group;

export const OnboardingFlow = OnboardingFlowRoot;
