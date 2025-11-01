import React, { ReactNode, useEffect, useRef } from "react";
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from "react-native";
import { XStack, YStack } from "tamagui";

import * as Haptics from "expo-haptics";

interface SwipeSelectorProps<T> {
  items: T[];
  valueIndex?: number; // currently selected index
  onChange?: (index: number) => void;
  renderItem: (item: T, selected: boolean, index: number) => React.ReactNode;
  itemWidth?: number;
  gap?: number;
}

/**
 * SwipeSelector
 * - horizontal scrollable selector with snapping to items
 * - centers items and reports the selected index on momentum end
 * - syncs when `valueIndex` prop changes
 */
export default function SwipeSelector<T>({
  items,
  valueIndex = 0,
  onChange,
  renderItem,
  itemWidth = 96,
  gap = 12,
}: SwipeSelectorProps<T>) {
  const scrollRef = useRef<ScrollView | null>(null);
  const lastIndexRef = useRef<number>(valueIndex);
  const isDraggingRef = useRef<boolean>(false);
  const windowWidth = Dimensions.get("window").width;
  const snapInterval = itemWidth + gap;
  const sidePadding = Math.max(0, (windowWidth - itemWidth) / 2);

  useEffect(() => {
    // Programmatically scroll to the valueIndex when it changes
    if (!scrollRef.current || items.length === 0) return;
    const x =
      Math.max(0, Math.min(items.length - 1, valueIndex)) * snapInterval;
    scrollRef.current.scrollTo({ x, animated: true });
    // keep lastIndexRef in sync with controlled valueIndex to avoid false positives
    lastIndexRef.current = Math.max(0, Math.min(items.length - 1, valueIndex));
  }, [valueIndex, items.length, snapInterval]);

  const handleMomentumEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const x = e.nativeEvent.contentOffset.x;
    const idx = Math.round(x / snapInterval);

 
      Haptics.selectionAsync();
     
    
   
    if (onChange) onChange(Math.max(0, Math.min(items.length - 1, idx)));
  };

  // Track scroll position while dragging but DO NOT emit selection changes until
  // the scroll finishes (we only lock once user releases / momentum ends).
  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const x = e.nativeEvent.contentOffset.x;
    const frac = x / snapInterval; // fractional index
    const candidate = Math.round(frac);
    const clamped = Math.max(0, Math.min(items.length - 1, candidate));

    // Update internal pointer so momentum end can determine final selection.
    lastIndexRef.current = clamped;
  };

  const handleScrollBegin = () => {
    isDraggingRef.current = true;
  };

  const handleScrollEnd = () => {
    // user lifted finger — momentum may still run; we only lock on momentum end
    isDraggingRef.current = false;
  };

  if (!items || items.length === 0) return null;

  return (
    <YStack>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        snapToInterval={snapInterval}
        snapToAlignment="start"
        contentContainerStyle={{
          paddingHorizontal: sidePadding,
          alignItems: "center",
        }}
        onMomentumScrollEnd={(e) => {
          // momentum end — lock selection now
          handleMomentumEnd(e);
        }}
        onScroll={handleScroll}
        onScrollBeginDrag={handleScrollBegin}
        onScrollEndDrag={handleScrollEnd}
        scrollEventThrottle={16}
      >
        <XStack gap={gap} items="center">
          {items.map((it, i) => {
            const selected = i === valueIndex;
            return (
              <YStack onPress={() => onChange && onChange(i)} key={i} width={itemWidth} items="center" justify="center">
                {renderItem(it, selected, i) as ReactNode}
              </YStack>
            );
          })}
        </XStack>
      </ScrollView>
    </YStack>
  );
}
