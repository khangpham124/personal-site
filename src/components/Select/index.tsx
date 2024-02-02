import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { Option } from '@/interfaces/filters';
import ArrowDownIcon from '@/public/assets/icons/ArrowDownIcon';

interface IProps {
  id: string;
  className?: string;
  label?: string;
  checkmark?: boolean;
  selected?: any;
  onChange: (selected: Option) => void;
  options: Option[];
}

export default function Select({ id, className, selected, options, onChange }: IProps) {
  return (
    <div className="z-10 flex items-center w-full">
      <Listbox as="div" value={selected} onChange={onChange} className={className}>
        <div className="relative px-12px w-full bg-[#fff] h-[48px] border-[1px] mt-[9px] border-[#66666659]">
          <Listbox.Button className="relative w-full h-full rounded-lg capitalize bg-white pr-10 ml-[8px] text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate text-[16px] text-[#333] cursor-pointer w-full">
              {selected?.label}{' '}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ArrowDownIcon />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="w-full left-0 absolute mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 shadow focus:outline-none sm:text-sm capitalize z-500">
              {options.map((option, i) => (
                <Listbox.Option
                  key={`sort-${id}-option-${i}`}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 px-16px text-[16px] text-[#333]  ${
                      active && 'bg-gray200'
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`flex truncate  ${selected ? 'text-[#333]' : 'font-normal'}`}
                      >
                        {option.label}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
