
import { styled, useTheme, View, ViewProps } from 'tamagui';
import { ButtonText } from './Typography';

type BadgeVariant = 'filled' | 'outlined' | 'dual';
type BadgeVariation = 'success' | 'warning' | 'error' | 'neutral';

interface BadgeProps extends ViewProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  variation?: BadgeVariation;
  style?: any;
  theme?: any;
}



const VARIATION_COLORS: Record<BadgeVariation, { bg: string; border: string; text: string }> = {
  success: { bg: '$success', border: '$success', text: '$color' },
  warning: { bg: '$warning', border: '$warning', text: '$color' },
  error: { bg: '$error', border: '$error', text: '$color' },
  neutral: { bg: '$color8', border: '$color8', text: '$color' },
};

const getBadgeStyles = ({
  variant,
  variation,
  theme,
}: {
  variant: BadgeVariant;
  variation: BadgeVariation;
  theme: any;
}) => {
  const { bg, border, text } = VARIATION_COLORS[variation];
  // Helper to resolve a Tamagui token (e.g. $success) to a color value using theme
  const resolveColor = (token: string) => {
    if (token.startsWith('$')) {
      const key = token.replace('$', '');
      const themeVal = theme?.[key];
      // Tamagui theme values may be objects with .val or direct values
      if (typeof themeVal === 'object' && themeVal !== null && 'val' in themeVal) {
        return themeVal.val;
      }
      if (typeof themeVal === 'string') {
        return themeVal;
      }
      return token;
    }
    return token;
  };
  switch (variant) {
    case 'outlined':
      return {
        background: 'transparent',
        borderWidth: 1,
        borderColor: resolveColor(border),
        textColor: resolveColor(border),
        shadowColor: 'transparent',
      };
    case 'dual': {
      let bgColor: string = bg;
      if (bg.startsWith('$')) {
        const key = bg.replace('$', '');
        const themeVal = theme?.[key];
        let base: string | undefined;
        if (typeof themeVal === 'object' && themeVal !== null && 'val' in themeVal) {
          base = themeVal.val;
        } else if (typeof themeVal === 'string') {
          base = themeVal;
        }
        if (base) {
          bgColor = `${base}22`;
        } else {
          const color3 = theme?.color3;
          if (typeof color3 === 'object' && color3 !== null && 'val' in color3) {
            bgColor = color3.val;
          } else if (typeof color3 === 'string') {
            bgColor = color3;
          } else {
            bgColor = '$color3';
          }
        }
      }
      return {
        background: bgColor,
        borderWidth: 1.5,
        borderColor: resolveColor(border),
        textColor: resolveColor(border),
        shadowColor: 'transparent',
      };
    }
    case 'filled':
    default:
      // For 'filled', decrease opacity for the bg color
      let bgColor = resolveColor(bg);
      if (typeof bgColor === 'string' && bgColor.startsWith('#') && bgColor.length === 7) {
        // Add 22 for ~13% opacity if hex
        bgColor = `${bgColor}22`;
      } else if (typeof bgColor === 'string' && bgColor.startsWith('rgb')) {
        // Convert rgb/rgba to rgba with lower alpha
        bgColor = bgColor.replace(/rgba?\(([^)]+)\)/, (match, colorVals) => {
          const vals = colorVals.split(',').map(v => v.trim());
          if (vals.length === 3) {
            return `rgba(${vals.join(', ')}, 0.2)`;
          }
          if (vals.length === 4) {
            return `rgba(${vals.slice(0, 3).join(', ')}, 0.2)`;
          }
          return match;
        });
      }
      return {
        background: bgColor,
        borderWidth: 0,
        borderColor: 'transparent',
        textColor: resolveColor(bg),
        shadowColor: resolveColor('$color2'),
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
      };
  }
};

const StyledBadge = styled(View, {
	name: 'Badge',
	flexDirection: 'row',
	px: '$3',
	py: '$2',
	gap: '$2',
	overflow: 'hidden',
	// Modern look: pill, shadow, tight spacing
});


export const Badge = ({
  children,
  variant = 'filled',
  variation = 'neutral',
  style,
  theme,
  ...rest
}: BadgeProps) => {
  // Always call useTheme to satisfy React Hooks rules
  const fallbackTheme = useTheme();
  const themeObj = theme || fallbackTheme;
  const badgeStyles = getBadgeStyles({ variant, variation, theme: themeObj });
  const {
    background,
    borderColor,
    borderWidth,
    textColor,
    ...otherStyles
  } = badgeStyles;
  return (
    <StyledBadge
      bg={background}
      borderColor={borderColor as any}
      borderWidth={borderWidth}
      style={[{ borderRadius: 15, alignItems: 'center' }, otherStyles, style]}
      {...rest}
    >
      
      <ButtonText
        color={textColor as any}
        fontWeight="700"
        fontSize="$3"
       
        letterSpacing={1}
        selectable={false}
      >
        {children}
      </ButtonText>
    </StyledBadge>
  );
};
