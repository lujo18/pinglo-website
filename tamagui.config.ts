import { defaultConfig } from "@tamagui/config/v4";
import { createTamagui, createTokens, createFont } from "tamagui";
import { createThemes } from "@tamagui/theme-builder";

// Define your custom font - DIN Round Pro with all weights
const bodyFont = createFont({
  family: 'DinRound',
  size: defaultConfig.fonts.body.size,
  lineHeight: defaultConfig.fonts.body.lineHeight,
  weight: defaultConfig.fonts.body.weight,
  letterSpacing: defaultConfig.fonts.body.letterSpacing,
  face: {
    300: { normal: 'DinRoundLight' },
    400: { normal: 'DinRound' },
    500: { normal: 'DinRoundMedium' },
    700: { normal: 'DinRoundBold' },
    900: { normal: 'DinRoundBlack' },
  },
});

const headingFont = createFont({
  family: 'DinRound',
  size: defaultConfig.fonts.heading.size,
  lineHeight: defaultConfig.fonts.heading.lineHeight,
  weight: defaultConfig.fonts.heading.weight,
  letterSpacing: defaultConfig.fonts.heading.letterSpacing,
  face: {
    300: { normal: 'DinRoundLight' },
    400: { normal: 'DinRound' },
    500: { normal: 'DinRoundMedium' },
    700: { normal: 'DinRoundBold' },
    900: { normal: 'DinRoundBlack' },
  },
});

const baseTokens = defaultConfig.tokens as any;

export const config = createTamagui({
  ...defaultConfig,
  fonts: {
    body: bodyFont,
    heading: headingFont,
  },
  media: {
    ...defaultConfig.media,
  },
  tokens: createTokens({
    ...baseTokens,
    color: {
      ...baseTokens.color,
      // Custom colors
      accent: "#007aff",
      premium: "#9d49d6",
      success: "#04b34f",
      warning: "#ff9900",
      error: "#a6192e",
      streak: "#ff6a00ff",
      shadowColor: "#00000026",
      shadowColorStrong: "#00000033",
    },
  }),
  themes: {
    ...defaultConfig.themes,
    ...createThemes({
      base: {
        palette: {
          light: ['#e5e0e8ff', '#0f0b12ff'],
          dark: ['#0e0c12ff', '#ebe9ecff'],
        }
      },
    }),
  },
});


type OurConfig = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends OurConfig {}
}
