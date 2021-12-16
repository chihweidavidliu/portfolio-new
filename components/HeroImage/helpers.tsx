export type HeroImagePosition = 'left' | 'center' | 'right';

export const getHeroImagePosition = (position: HeroImagePosition, intersectionRatio: number) => {
  const weighting = 1 - intersectionRatio;

  switch (position) {
    case 'left':
      return {
        perspective: 800 * intersectionRatio,
        transform: `translateX(-${weighting * 100}%) rotate(${weighting * 40}deg) scale(${intersectionRatio})`,
        opacity: intersectionRatio,
      };
    case 'right':
      return {
        transform: `translateX(${weighting * 100}%) rotate(-${weighting * 40}deg) scale(${intersectionRatio})`,
        opacity: intersectionRatio,
      };
    case 'center':
      return {
        zIndex: 100,
        perspective: 400,
        transform: `translateY(-${weighting * 100}%) scale(${intersectionRatio * 1.2})`, // 1.2 multiplier to make center image bigger
        opacity: intersectionRatio,
      };
    default:
      return {};
  }
};
