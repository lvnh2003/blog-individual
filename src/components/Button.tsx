interface Props {
    as?: React.ElementType;
    isDisabled?: boolean;
    onClick?: () => void;
    [x: string]: unknown; 
}
export default function Button({  
    as: Component = 'button',
    isDisabled = false,
    onClick,
    ...restProps}:Props) {
    return (
        <>
        <Component
          onClick={onClick}
          className={`flex h-[30px] w-[30px] items-center justify-center rounded-full bg-brand-white text-sm${
            isDisabled ? 'pointer-events-none opacity-40' : ''
          }`}
          aria-disabled={isDisabled ? 'true' : undefined}
          {...restProps}
        >
        </Component>
      </>
    );
  }