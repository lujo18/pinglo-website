import React, { memo } from "react";
import { Progress, XStack } from "tamagui";
import type { ProgressGroupMeta } from "./OnboardingFlow";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type OnboardingProgressHeaderProps = {
  groups: ProgressGroupMeta[];
  page: number;
  activeGroupName: string | null;
};

const GAP_2 = "$2" as any;
const PADDING_X = "$4" as any;

const OnboardingProgressHeader = memo(
  ({ groups, page, activeGroupName }: OnboardingProgressHeaderProps) => {
    if (!groups.length) {
      return null;
    }

    const topPad = useSafeAreaInsets().top

    return (
      <XStack flex={1} pt={topPad} gap={GAP_2} px={PADDING_X}>
        {groups.map(({ name, start, end, length }) => {
          const clampedPage = Math.min(Math.max(page, start), end + 1);
          const safeLength = length || 1;
          const progress = ((clampedPage - start) / safeLength) * 100;
          const isActive = activeGroupName === name;

          return (
            <XStack flex={1} key={`${name}-${start}-${end}`}>
              <Progress value={progress} flex={1} minW={0}>
                <Progress.Indicator
                  animation={isActive ? "medium" : "quick"}
                  opacity={isActive ? 1 : 0.35}
                />
              </Progress>
            </XStack>
          );
        })}
      </XStack>
    );
  },
  (prev, next) =>
    prev.page === next.page &&
    prev.groups === next.groups &&
    prev.activeGroupName === next.activeGroupName
);

export default OnboardingProgressHeader;
