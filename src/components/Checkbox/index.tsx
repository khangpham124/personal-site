/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames';
import React from 'react';

type Props = {
  id: string;
  label: string;
  value: string | number;
  color?: string;
  name: string;
  image?: any;
  checked: boolean;
  onChange: (value: string | number, checked: boolean) => void;
};

const Checkbox = (props: Props) => {
  const { id, name, label, checked, value, onChange } = props;
  const ImageSVG = props.image ? props.image : null;

  return (
    <div className="flex items-center justify-between my-[12px]">
      <div>
        <input
          type="checkbox"
          className="focus:outline-0 accent-[#1890FF] cursor-pointer indeterminate:bg-gray-300 w-[16px] h-[16px] mr-8px"
          name={name}
          id={id}
          value={value}
          checked={checked}
          onChange={(e) => {
            const { target } = e;
            onChange(target.value, target.checked);
          }}
        />
        <label htmlFor={id} className="cursor-pointer text-[16px] text-[#333] capitalize">
          {label}
        </label>
      </div>
      {props?.color && (
        <div
          className={classNames('w-[16px] h-[16px] border-[0.3px] border-[#949494] rounded-[50%]', {
            [`bg-[#${props.color}]`]: props.color,
          })}
          style={{ background: `#${props.color}` }}
        ></div>
      )}
      {props?.image && (
        <div className={classNames('w-[16px] h-[16px] rounded-[50%]')}>
          <ImageSVG />
        </div>
      )}
    </div>
  );
};

export default Checkbox;
