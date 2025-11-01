import React, { useMemo } from 'react';
import { StyleSheet, StyleProp, ViewStyle,  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme, YStack, YStackProps } from 'tamagui';
import { SafeAreaView } from 'react-native-safe-area-context';

type Point = { x: number; y: number };

type PremiumBackgroundProps = YStackProps & {
  children?: React.ReactNode;
  gradientStyle?: StyleProp<ViewStyle>;
  start?: Point;
  end?: Point;
  intensity?: number; // 0..1
  colors?: string[];
  /** When true, content is wrapped in a SafeAreaView */
  safeArea?: boolean;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const parseToRgba = (color?: string, alpha = 1): string => {
  if (!color) {
    return `rgba(0, 0, 0, ${alpha})`;
  }

  const c = color.trim();
  const lower = c.toLowerCase();

  // already an rgba/hsla/rgb/hsl string
  if (lower.startsWith('rgba') || lower.startsWith('hsla') || lower.startsWith('rgb') || lower.startsWith('hsl')) {
    return c;
  }

  // hex values
  if (lower.startsWith('#')) {
    let hex = lower.slice(1);

    // short form #abc => #aabbcc
    if (hex.length === 3) {
      hex = hex.split('').map((ch) => ch + ch).join('');
    }

    // #rrggbbaa
    if (hex.length === 8) {
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      const a = parseInt(hex.slice(6, 8), 16) / 255;
      const combinedAlpha = clamp(a * alpha, 0, 1);
      return `rgba(${r}, ${g}, ${b}, ${combinedAlpha.toFixed(3)})`;
    }

    // #rrggbb
    if (hex.length === 6) {
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
  }

  // fallback to original value if we don't know how to parse it
  return color;
};

const PremiumBackground: React.FC<PremiumBackgroundProps> = ({
  children,
  gradientStyle,
  start = { x: 0, y: 1 },
  end = { x: 1, y: 0 },
  intensity = 0.85,
  colors,
  safeArea = false,
  ...ystackProps
}) => {
  const theme = useTheme();
  const themeRef = (theme as any) || {};

  const accentColor = themeRef?.color?.accent?.val ?? '#007aff';
  const premiumColor = themeRef?.color?.premium?.val ?? '#9d49d6';

  const safeIntensity = clamp(Number.isFinite(intensity) ? intensity : 0.85, 0.1, 1);

  const gradientColors = useMemo(() => {
    if (colors && colors.length >= 2) return colors;

    const accent = parseToRgba(accentColor, safeIntensity);
    const premium = parseToRgba(premiumColor, clamp(safeIntensity + 0.08, 0.1, 1));

    return [accent, premium];
  }, [accentColor, premiumColor, colors, safeIntensity]);

  return (
    <YStack {...ystackProps} style={[styles.container, (ystackProps.style as any) ?? undefined]}>
      <LinearGradient
        start={start}
        end={end}
        colors={gradientColors}
        style={[StyleSheet.absoluteFill, styles.gradient, gradientStyle as any]}
      />
      

      {safeArea ? (
        <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
      ) : (
        children
      )}
    </YStack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  gradient: {
    opacity: 0.7,

  },
});

export default PremiumBackground;
