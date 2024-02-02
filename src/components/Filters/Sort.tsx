import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { Option } from '@/interfaces/filters';
import ArrowDownIcon from '@/public/assets/icons/ArrowDownIcon';

interface IProps {
  id: string;
  className?: string;
  label?: string;
  checkmark?: boolean;
  selected: Option;
  onChange: (selected: Option) => void;
  options: Option[];
}

export default function Sort({ id, className, label, selected, options, onChange }: IProps) {
  return (
    <div className="z-10 flex items-center">
      <div className="text-[16px] text-[#6B7280]">{label}</div>
      <Listbox as="div" value={selected} onChange={onChange} className={className}>
        <div className="relative w-fit">
          <Listbox.Button className="relative w-fit rounded-lg capitalize bg-white pr-10 ml-[8px] text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate text-[16px] text-[#1F2937] cursor-pointer font-PlusJakartaSansSemiBold">
              {selected.label}{' '}
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
            <Listbox.Options className="w-[150px] right-0 absolute mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 shadow focus:outline-none sm:text-sm capitalize">
              {options.map((option, i) => (
                <Listbox.Option
                  key={`sort-${id}-option-${i}`}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 px-16px text-[16px] text-[#212121]  ${
                      active && 'bg-gray200'
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`flex truncate  ${
                          selected ? 'font-PlusJakartaSansMedium text-[#1F2937]' : 'font-normal'
                        }`}
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
