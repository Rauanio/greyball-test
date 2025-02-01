export type ButtonSizes = 'tiny' | 'sm' | 'md' | 'lg' | 'xl';

export const mapButtonSizes: Record<ButtonSizes, string> = {
  tiny: 'text-base py-2 px-3.5',
  sm: 'text-base py-2.5 px-[18px]',
  md: 'text-base py-3 px-5',
  lg: 'text-lg py-[14px] px-[22px]',
  xl: 'text-lg py-4 px-6',
};
