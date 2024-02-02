import { formatPriceVND } from '@/Util/helper';
// @ts-ignore
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

type RangeSliderProps = {
  value: Array<number>;
  onChange: (value: Array<number>) => void;
};

const DEFAULT_VALUE = [0, 4000000];
const PRICES = {
  MIN: 0,
  MAX: 1,
};

const RangeInput = ({ value, onChange }: RangeSliderProps) => {
  const valueDisplay = value || DEFAULT_VALUE;

  return (
    <>
      <div className="w-full flex justify-between items-center mb-[8px]">
        <span className="text-[14px] text-[#333333]">
          {formatPriceVND(valueDisplay[PRICES.MIN] as number)}
        </span>
        <span className="text-[14px] text-[#333333]">
          {formatPriceVND(valueDisplay[PRICES.MAX] as number)}
        </span>
      </div>
      <RangeSlider
        min={0}
        max={4000000}
        step={10000}
        defaultValue={DEFAULT_VALUE}
        value={value}
        onInput={onChange}
      />
    </>
  );
};

export default RangeInput;
