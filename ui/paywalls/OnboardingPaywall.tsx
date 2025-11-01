import React from "react";
import { View } from "react-native";
import RevenueCatUI from "react-native-purchases-ui";

export type OnboardingPaywallType = {
  next?: () => void
}

const OnboardingPaywall = ({ next }: OnboardingPaywallType) => {
  // Display current offering

  return (
    <View style={{position: "absolute", left:0, right:0, top:0, bottom:0 }}>
      <RevenueCatUI.Paywall
        
        onDismiss={() => {
          if (next) {
            next();
          }
          
          // Dismiss the paywall, i.e. remove the view, navigate to another screen, etc.
          // Will be called when the close button is pressed (if enabled) or when a purchase succeeds.
        }}
      />
    </View>
  );
};

export default OnboardingPaywall;

// // If you need to display a specific offering:
// return (
//     <View style={{ flex: 1 }}>
//         <RevenueCatUI.Paywall
//           options={{
//             offering: offering // Optional Offering object obtained through getOfferings
//           }}
//           onRestoreCompleted={({customerInfo}: { customerInfo: CustomerInfo }) => {
//             // Optional listener. Called when a restore has been completed.
//             // This may be called even if no entitlements have been granted.
//           }
//           onDismiss={() => {
//             // Dismiss the paywall, i.e. remove the view, navigate to another screen, etc.
//             // Will be called when the close button is pressed (if enabled) or when a purchase succeeds.
//           }}
//         />
//     </View>
// );
