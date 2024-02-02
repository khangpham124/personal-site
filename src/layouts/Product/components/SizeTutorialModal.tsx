import RangeInputSize from '@/components/RangeInputSize';
import { Dialog, Tab, Transition } from '@headlessui/react';
import classNames from 'classnames';
import React, { Fragment, useEffect, useState } from 'react';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  product: any;
};

const SizeTutorialModal = ({ isOpen, closeModal, product }: Props) => {
  const [high, setHigh] = useState<number[]>([0, 200000]);
  const [weight, setWeight] = useState<number[]>([32, 100]);

  useEffect(() => {}, [high]);
  useEffect(() => {}, [weight]);

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        style={{ zIndex: 99999 }}
        static
        open={isOpen}
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray500 opacity-50" />
          </Transition.Child>

          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="relative inline-block w-full max-w-3xl overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl">
              <div className="flex justify-between border-b-[1px] border-[#F0F0F0] mb-24px">
                <Dialog.Title
                  as="h5"
                  className="py-16px capitalize whitespace-nowrap pl-24px text-center font-PlusJakartaSansMedium"
                >
                  kích thước sản phẩm
                </Dialog.Title>
                <button
                  type="button"
                  className="outline-none focus:outline-none text-[#666666] text-[16px] pr-24px"
                  onClick={closeModal}
                >
                  &#10005;
                </button>
              </div>
              <div className="px-24px">
                <Tab.Group>
                  <Tab.List className={'flex flex-wrap border-b-[1px] border-gray100'}>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={classNames(
                            'md:w-1/2 w-full text-base flex items-center justify-center h-[46px] py-16px px-[32px]',
                            {
                              'border-b-[2px] text-[#333] border-[#000]': selected,
                              'text-[#626262]': !selected,
                            }
                          )}
                        >
                          Thông tin số sản phẩm
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={classNames(
                            'md:w-1/2 w-full text-base flex items-center justify-center h-[46px] py-16px px-[32px]',
                            {
                              'border-b-[2px] text-[#333] border-[#000]': selected,
                              'text-[#626262]': !selected,
                            }
                          )}
                        >
                          Hướng dẫn chọn size
                        </button>
                      )}
                    </Tab>
                  </Tab.List>
                  <Tab.Panels className={'pb-24px'}>
                    <Tab.Panel>
                      <div className="flex flex-col mt-10px border-[#e0e0e0] border-[1px]">
                        <div className="overflow-x-auto">
                          <div className="w-full inline-block align-middle">
                            <div className="overflow-auto md:block">
                              <table className="table-auto min-w-full divide-y divide-[#e0e0e0]">
                                <thead className="bg-[#EFEFEF]">
                                  <tr>
                                    <th
                                      scope="col"
                                      className="px-6 py-3 text-center font-PlusJakartaSansMedium capitalize text-[#333] text-base"
                                    >
                                      Size
                                    </th>
                                    <th
                                      scope="col"
                                      className="px-6 py-3 text-center font-PlusJakartaSansMedium capitalize text-[#333] text-base"
                                    >
                                      Vai
                                    </th>
                                    <th
                                      scope="col"
                                      className="px-6 py-3 text-center font-PlusJakartaSansMedium capitalize text-[#333] text-base"
                                    >
                                      Ngực
                                    </th>
                                    <th
                                      scope="col"
                                      className="px-6 py-3 text-center font-PlusJakartaSansMedium capitalize text-[#333] text-base"
                                    >
                                      Tay Áo
                                    </th>
                                    <th
                                      scope="col"
                                      className="px-6 py-3 text-center font-PlusJakartaSansMedium capitalize text-[#333] text-base"
                                    >
                                      dài áo
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-[#e0e0e0]">
                                  {product?.product_specifications?.map((item: any, i: number) => (
                                    <tr key={`product_specifications_${i}`}>
                                      <td className="px-6 py-4 text-[#333] text-center text-base whitespace-nowrap">
                                        {item?.size}
                                      </td>
                                      <td className="px-6 py-4 text-[#333] text-center text-base whitespace-nowrap">
                                        {item?.shoulder}
                                      </td>
                                      <td className="px-6 py-4 text-[#333] text-center text-base whitespace-nowrap">
                                        {item?.chest}
                                      </td>
                                      <td className="px-6 text-[14px] py-4 text-center whitespace-nowrap">
                                        {item?.sleeve}
                                      </td>
                                      <td className="px-6 text-[14px] py-4 text-center whitespace-nowrap">
                                        {item?.long_shirt}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-[#333] text-base mt-10px">
                        * Dữ liệu này có được bằng cách đo thủ công sản phẩm, các phép đo có thể bị
                        thay đổi 1-2cm.
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="mt-24px">
                        <RangeInputSize
                          min={100}
                          max={2000}
                          step={10}
                          label="Chiều cao"
                          value={high}
                          unit="cm"
                          onChange={(value) => {
                            setHigh(value);
                          }}
                        />
                      </div>
                      <div className="my-[32px]">
                        <RangeInputSize
                          min={32}
                          max={100}
                          step={1}
                          label="Cân nặng"
                          value={weight}
                          unit="kg"
                          onChange={(value) => {
                            setWeight(value);
                          }}
                        />
                      </div>
                      <div className="flex justify-between items-center mt-16px mb-24px">
                        <div className="flex flex-col items-center justify-center w-full">
                          <input
                            type="radio"
                            name="deli"
                            value="STORE_PICKUP"
                            id="thin"
                            className="cursor-pointer"
                          />
                          <label
                            htmlFor="thin"
                            className="cursor-pointer whitespace-nowrap mt-8px text-[14px] ml-8px text-[#333]"
                          >
                            Gầy
                          </label>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full">
                          <input
                            type="radio"
                            name="deli"
                            value="YANGON"
                            id="normal"
                            className="cursor-pointer"
                          />
                          <label
                            htmlFor="normal"
                            className="cursor-pointer whitespace-nowrap mt-8px text-[14px] ml-8px text-[#333]"
                          >
                            Bình thường
                          </label>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full">
                          <input
                            type="radio"
                            name="deli"
                            value="YANGON"
                            id="fast"
                            className="cursor-pointer"
                          />
                          <label
                            htmlFor="fast"
                            className="cursor-pointer whitespace-nowrap mt-8px text-[14px] ml-8px text-[#333]"
                          >
                            Đầy đặn
                          </label>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-[16px] text-[#333] mb-[9px]">
                          Juclothing gợi ý cho bạn
                        </h3>
                        <div className="flex items-center">
                          <div className="bg-[#626262] text-[16px] text-[#fbfbfb] p-8px w-fit">
                            S - Đầm
                          </div>
                          <div className="ml-8px bg-[#626262] text-[16px] text-[#fbfbfb] p-8px w-fit">
                            S - Đầm
                          </div>
                        </div>
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SizeTutorialModal;
