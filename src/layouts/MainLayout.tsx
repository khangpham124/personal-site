import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const MainLayout = (props: IMainProps) => (
  <>
    {/* ===== Header Section ===== */}
    <Header />
    {props.meta}
    <main id="main-content">{props.children}</main>
    {/* ===== Footer Section ===== */}
    <Footer />
  </>
);

export { MainLayout };
