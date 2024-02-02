// @ts-ignore
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

type RangeSliderProps = {
  value: any;
  onChange: (value: Array<number>) => void;
  min: number;
  max: number;
  step: number;
  label: string;
  unit: string;
};

const SIZE = {
  MIN: 0,
  MAX: 1,
};
const DEFAULT_VALUE = [0, 4000000];

const RangeInputSize = ({ min, max, step, value, label, unit, onChange }: RangeSliderProps) => {
  const valueDisplay = value || DEFAULT_VALUE;

  return (
    <div className={'rangeInputSize'}>
      <div className="w-full flex justify-between items-center mb-[8px]">
        <span className="text-[14px] text-[#333333]">{label}</span>
        <span className="text-[14px] text-[#333333]">
          {valueDisplay[SIZE.MIN] as number}
          {unit}
        </span>
      </div>
      <RangeSlider
        min={min}
        max={max}
        step={step}
        defaultValue={DEFAULT_VALUE}
        value={value}
        onInput={onChange}
        thumbsDisabled={[false, true]}
      />
    </div>
  );
};

export default RangeInputSize;
