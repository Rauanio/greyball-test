export type ButtonVartiants = 'primary' | 'secondary' | 'outline' | 'ghost';

export const mapButtonVariants: Record<ButtonVartiants, string> = {
  primary:
    'bg-blue-500 text-white disabled:bg-gray-100 disabled:text-gray-300',
  secondary:
    'bg-white text-black hover:bg-gray-100 disabled:bg-primary-white disabled:text-gray-300',
  outline: 'border-[1.5px] border-primary-black hover:bg-gray-100',
  ghost: 'shadow-none !p-0 hover:text-gray-900',
};
