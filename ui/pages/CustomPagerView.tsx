import Page from "@/src/components/ui/Page";
import React, { ReactElement, ReactNode, useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, ScrollView } from "react-native";
import PagerView from "react-native-pager-view";
import { XStack, YStack } from "tamagui";
import BackButton from "../navigation/BackButton";
import AnimatedNavbar from "./AnimatedNavbar";

const { width: screenWidth } = Dimensions.get("window");

interface PageProps {
  pageTitle: string;
  children: ReactNode;
}

interface CustomPagerViewProps {
  children: ReactElement<PageProps> | ReactElement<PageProps>[];
  isControlled?: boolean;
  currentPage: number;
  backButton?: boolean;
}

const CustomPagerView = ({
  children,
  isControlled = false,
  currentPage,
  backButton = false
}: CustomPagerViewProps) => {
  const flatListRef = useRef<FlatList>(null);
  const pagerRef = useRef<PagerView>(null);
  const [internalIndex, setInternalIndex] = useState(currentPage);

  const [contentHeight, setContentHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  const currentIndex = isControlled ? currentPage : internalIndex;
  const setCurrentIndex = isControlled ? () => {} : setInternalIndex;

  const data =
    React.Children
      .map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return {
            id: child.key || index.toString(),
            component: child,
            pageTitle: child.props.pageTitle,
          };
        }
        return null;
      })
      .filter(Boolean) || [];

  useEffect(() => {
    if (isControlled && typeof currentPage == "number") {
      goToPage(currentPage);
    }
  }, [currentPage, isControlled]);

  // const renderItem = ({ item }) => {
  //   // Add your desired props here
  //   const extraProps = { showsVerticalScrollIndicator: false };

  //   // Clone the element with additional props
  //   const childWithProps = React.cloneElement(item.component, extraProps);

  //   return <View className="w-[100vw] px-8 py-4">{childWithProps}</View>;
  // };

  // const onScroll = (event) => {
  //   const slideSize = event.nativeEvent.layoutMeasurement.width;
  //   const index = event.nativeEvent.contentOffset.x / slideSize;
  //   const roundedIndex = Math.round(index);

  //   // Only update currentIndex if the scroll has settled on a new page (not during fast swipes)
  //   if (
  //     roundedIndex !== currentIndex &&
  //     roundedIndex >= 0 &&
  //     roundedIndex < data.length
  //   ) {
  //     setCurrentIndex(roundedIndex);
  //   }
  // };

  // const goToSlide = (index) => {
  //   Keyboard.dismiss();
  //   flatListRef.current?.scrollToIndex({ index, animated: true });
  //   setCurrentIndex(index);
  // };

  // const handleScrollToIndexFailed = (info) => {
  //   const wait = new Promise((resolve) => setTimeout(resolve, 500));

  //   wait.then(() => {
  //     if (flatListRef.current && info.index < data.length) {
  //       flatListRef.current.scrollToIndex({
  //         index: info.index,
  //         animated: false,
  //       });
  //     }
  //   });
  // };

  const goToPage = (index: number) => {
    pagerRef.current?.setPage(index);
    setInternalIndex(index);
  };

  const setPage = (index: number) => {
    setInternalIndex(index);
  };

  return (
    <YStack flex={1} bg={"$background"}>
      <ScrollView
        style={{width: "100%", flex: 1}}
        contentContainerStyle={{ flexGrow: 1 }}
        scrollEnabled={contentHeight > containerHeight}
        onContentSizeChange={(w, h) => setContentHeight(h)}
        onLayout={(e) => setContainerHeight(e.nativeEvent.layout.height)}
      >
        <XStack px={"$4"} gap={"$2"}>
   
            {backButton && <BackButton/>}
            <AnimatedNavbar
              pageNames={data.map((page) => page.pageTitle)}
              activePage={currentIndex || 0}
              setActivePage={isControlled ? () => {} : goToPage}
            />
          
        </XStack>

        <PagerView ref={pagerRef} scrollEnabled={!isControlled} style={{flex:1}} onPageSelected={(e) => setPage(e.nativeEvent.position)}>
          {React.Children.map(children, (page, idx) => (
             React.cloneElement(page, {key: idx})
          ))}
        </PagerView>

        {/* <FlatList
          ref={flatListRef}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          onScroll={onScroll}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          snapToInterval={screenWidth}
          snapToAlignment="start"
          contentContainerStyle={{ width: "100vw" }}
          scrollEnabled={!isControlled}
          onScrollToIndexFailed={handleScrollToIndexFailed}
        /> */}
      </ScrollView>
    </YStack>
  );
};

const PagerPage = ({children, pageTitle}: PageProps) => <Page p={0} px={"$4"} pt={"$4"} insets={['bottom']}>{children}</Page>;

CustomPagerView.Page = PagerPage;

export default CustomPagerView;
