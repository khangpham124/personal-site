import { FC } from 'react';

type Props = {
  type?: 'button' | 'submit' | 'reset';
  extraClass?: string;
  size?: 'sm' | 'lg' | 'xl';
  value: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: FC<Props> = ({
  size = 'sm',
  value,
  extraClass,
  onClick,
  children,
  type = 'button',
  disabled = false,
}) => {
  let btnSize = '';
  if (size === 'sm') {
    btnSize = 'py-2 px-5';
  } else if (size === 'lg') {
    btnSize = 'py-3 px-6';
  } else {
    btnSize = 'py-4 px-7 text-xl';
  }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${btnSize} border ${disabled && 'cursor-not-allowed'} ${extraClass}`}
    >
      <span>{children}</span> {value}
    </button>
  );
};

export default Button;
