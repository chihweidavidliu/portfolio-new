export type HeroImagePosition = 'left' | 'center' | 'right';

const BASE_Y_ROTATION = 20;

export const getHeroImagePosition = (position: HeroImagePosition, intersectionRatio: number) => {
  const weighting = 1 - intersectionRatio;

  switch (position) {
    case 'left':
      return {
        transform: `
            translateX(-${weighting * 100}%) 
            rotateY(-${weighting * 40 + BASE_Y_ROTATION}deg) 
            rotateX(${weighting * 40}deg)
            scale(${intersectionRatio})`,
        opacity: intersectionRatio,
      };
    case 'right':
      return {
        transform: `
            translateX(${weighting * 100}%) 
            rotateY(${weighting * 40 + BASE_Y_ROTATION}deg) 
            rotateX(${weighting * 40}deg) 
            scale(${intersectionRatio})`,
        opacity: intersectionRatio,
      };
    case 'center':
      return {
        zIndex: 100,
        perspective: 400,
        transform: `
            rotateX(${weighting * 120}deg)
            translateY(-${weighting * 100}vh) 
            scale(${intersectionRatio * 1.25})`, // 1.2 multiplier to make center image bigger
        opacity: intersectionRatio,
      };
    default:
      return {};
  }
};
