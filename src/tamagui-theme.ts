// Re-export from root tamagui.config.ts to avoid creating duplicate Tamagui contexts
// This file exists for backwards compatibility but delegates to the root config
export { config as tamaguiConfig } from '../tamagui.config'

export type TamaguiConfig = any
