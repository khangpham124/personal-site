/* eslint-disable jsx-a11y/alt-text */
import Input from '@/components/Input/Input';
// import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import Button from '@/components/Buttons/Button';
import CheckSuccessIcon from '@/public/assets/icons/CheckSuccessIcon';
import Link from 'next/link';
// import { useRouter } from 'next/router';

const ConfirmmLayout = () => {
  // const router = useRouter();
  // const t = useTranslations('Shopping_Cart');
  

  useEffect(() => {
    // const cartLocal = localStorage.getItem('cartCustomer') ? JSON.parse(localStorage.getItem('cartCustomer') || '{}') : null
    // setCartCustomer(cartLocal);
  }, []);

  return (
    <>
        <div className="lg:px-[40px] px-[20px]">
          <div className="flex items-center flex-col justify-center">
            <CheckSuccessIcon />
            <h2 className="text-center lg:text-[40px] text-[24px] text-[#030303] lg:leading-[54.48px] leading-[30px] font-PlusJakartaSansSemiBold mt-24px mb-16px">
              ĐƠN HÀNG ĐÃ ĐƯỢC ĐẶT THÀNH CÔNG!
            </h2>
            <p className="text-[#333333] lg:text-[20px] text-[16px] leading-[30px] text-center">
              Mã đơn hàng của bạn là <span className="font-PlusJakartaSansMedium">1234567</span>
            </p>
            <p className="text-[#333333] lg:text-[20px] text-[16px] leading-[30px] text-center">
              Ju Clothing đã gửi mail xác nhận đơn hàng đến bạn qua email{' '}
              <span className="font-PlusJakartaSansMedium">info@gmail.com</span>
            </p>
          </div>
          <div className="lg:p-[80px] p-[30px] bg-[#F9FAFB] w-fit mx-auto lg:my-48px mt-[35px] lg:mb-[60px] mb-[30px]">
            <h2 className="lg:text-[32px] text-[24px] text-center text-[#000] font-PlusJakartaSansMedium mb-16px">
              TẠO TÀI KHOẢN ĐỂ TÍCH ĐIỂM
            </h2>
            <p className="lg:text-[20px] text-[16px] text-center text-[#333]">
              Bạn đã mua hàng với SDT <span className="font-PlusJakartaSansMedium">1234567</span> và
              Email
              <span className="font-PlusJakartaSansMedium"> info@gmail.com</span>
            </p>
            <p className="lg:text-[20px] text-[16px] text-center text-[#333]">
              Hãy nhập mật khẩu để tạo tài khoản và nhận thêm nhiều ưu đãi độc quyền.
            </p>
            <form className="lg:mt-32px mt-[25px]">
              <div className="block">
                <label htmlFor="password" className="text-[16px] text-[#333]">
                  <span className="text-[#EE1D52] text-[16px]">*</span> Tạo mật khẩu
                </label>
                <Input
                  type="password"
                  name="password"
                  required
                  extraClass="w-full"
                  border="border-[1px] mt-[9px] border-[#66666659]"
                />
              </div>
              <div className="block my-16px">
                <label htmlFor="re-password" className="text-[16px] text-[#333]">
                  <span className="text-[#EE1D52] text-[16px]">*</span> Xác nhận lại mật khẩu
                </label>
                <Input
                  type="re-password"
                  name="re-password"
                  required
                  extraClass="w-full"
                  border="border-[1px] mt-[9px] border-[#66666659]"
                />
              </div>
              <div className="flex items-center mb-4">
                <div className="checkbox_policy flex items-start checkbox-card">
                  <input type="checkbox" className="checkbox__input" />
                  <span className="checkbox__inner"></span>
                  <p className="ml-8px text-[14px] text-[#333] leading-[19.07px]">
                    Tôi đồng ý với{' '}
                    <Link href="#">
                      <a className="underline">các điều khoản</a>
                    </Link>{' '}
                    và{' '}
                    <Link href="#">
                      <a className="underline">chính sách bảo mật</a>
                    </Link>{' '}
                    của Ju Clothing
                  </p>
                </div>
              </div>
              <Button
                type="submit"
                // onClick={() => setIsPayment(false)}
                value={'Tạo tài khoản'}
                extraClass="w-full mt-16px text-[14px] bg-[#000] lg:py-[14px] py-[10px] text-center text-[16px] capitalize flex items-center justify-center text-[#fff]"
              />
            </form>
          </div>
        </div>
    </>
  );
};

export default ConfirmmLayout;
