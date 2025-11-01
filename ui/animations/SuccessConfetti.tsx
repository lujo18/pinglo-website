import { memo } from 'react';
import { Dimensions } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

type SuccessConfettiProps = {
  isVisible?: boolean;
  trigger?: number | string;
  count?: number;
  colors?: string[];
  duration?: number;
  explosionSpeed?: number;
  fallSpeed?: number;
  power?: number;
  origin?: {
    x: number;
    y: number;
  };
  onAnimationEnd?: () => void;
};

const windowWidth = Dimensions.get('window').width;
const defaultOrigin = { x: windowWidth / 2, y: -10 };
const defaultColors = ['#34D399', '#22D3EE', '#FBBF24', '#F97316', '#60A5FA', '#C084FC'];

const SuccessConfetti = ({
  isVisible = true,
  trigger = 0,
  count = 160,
  colors = defaultColors,
  duration = 4000,
  explosionSpeed = 350,
  fallSpeed = 2600,
  power = 0.5,
  origin,
  onAnimationEnd,
}: SuccessConfettiProps) => {
  if (!isVisible) {
    return null;
  }

  return (
    <ConfettiCannon
      key={trigger}
      autoStart
      fadeOut
      count={count}
      colors={colors}
      duration={duration}
      explosionSpeed={explosionSpeed}
      fallSpeed={fallSpeed}
      power={power}
      origin={origin ?? defaultOrigin}
      onAnimationEnd={onAnimationEnd}
    />
  );
};

export default memo(SuccessConfetti);
