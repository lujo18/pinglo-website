import { styled, Text } from "tamagui";

// Styled component approach allows consumers to override any preset prop simply by passing it.
// Example: <Title fontSize="$10" color="$red10" /> will override the defaults.

export const Title = styled(Text, {
  name: 'Title',
  fontSize: '$9',
  fontWeight: '700',
  lineHeight: '$9',
  mb: '$2',
  color: '$color12',
});

export const Subtitle = styled(Text, {
  name: 'Subtitle',
  fontSize: '$8',
  fontWeight: '500',
  lineHeight: '$7',
  mb: '$2',
  color: '$color11',
});

export const Body = styled(Text, {
  name: 'Body',
  fontSize: '$5',
  lineHeight: '$5',
  color: '$color12',
});

export const Caption = styled(Text, {
  name: 'Caption',
  fontSize: '$3',
  lineHeight: '$3',
  color: '$color8',
});

export const ButtonText = styled(Text, {
  name: 'ButtonText',
  fontSize: '$5',
  fontWeight: '600',
  color: '$color12',
});
