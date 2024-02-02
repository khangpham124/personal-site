import { FC, FormEvent } from 'react';

type Props = {
  type?: string;
  name: string;
  placeholder?: string;
  extraClass?: string;
  required?: boolean;
  border?: string;
  id?: string;
  label?: string;
  onChange?: (e: FormEvent<HTMLInputElement>) => void;
  onBlur?: (e: FormEvent<HTMLInputElement>) => void;
  value?: string;
  readOnly?: boolean;
  disabled?: boolean
};

const Input: FC<Props> = ({
  type = 'text',
  name,
  placeholder,
  extraClass,
  required = false,
  border = '',
  label = '',
  onChange,
  onBlur,
  value,
  disabled=false,
  readOnly = false,
}) => (
  <input
    type={type}
    readOnly={readOnly}
    className={`${
      border !== '' ? border : 'border-2 border-gray500'
    } py-[11px] px-4 outline-none ${extraClass}`}
    name={name}
    placeholder={placeholder}
    required={required}
    onChange={onChange}
    onBlur={onBlur}
    value={value}
    disabled={disabled}
    aria-label={label}
  />
);

export default Input;
