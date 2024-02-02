import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { IProduct } from '../interfaces/cart-types';
import { IProductStore } from "@/interfaces/customerProduct-service";

type Props = {
  items: IProductStore[];
  searchWord: string;
};

const Search: React.FC<Props> = ({ items, searchWord }) => {
  const t = useTranslations('Search');

  return (
    <div>
      {/* ===== Head Section ===== */}
      <Header />

      <main id="main-content">
        {/* ===== Breadcrumb Section ===== */}
        <div className="bg-[#ffa096] h-16 w-full flex items-center">
          <div className="px-4 sm:px-8 md:px-12 max-w-7xl mx-auto w-full">
            <div className="breadcrumb">
              <Link href="/">
                <a className="text-gray400">{t('home')}</a>
              </Link>{' '}
              / <span>{t('search_results')}</span>
            </div>
          </div>
        </div>

        {/* ===== Heading & Filter Section ===== */}
        <div className="px-4 sm:px-8 md:px-12 max-w-7xl mx-auto w-full mt-8">
          <h1 className="text-3xl mb-2">
            {t('search_results')}: &quot;{searchWord}&quot;
          </h1>
          {items.length > 0 && (
            <div className="flex justify-between mt-6">
              <span>
                {t('showing_results', {
                  products: items.length,
                })}
              </span>
            </div>
          )}
        </div>

        {/* ===== Main Content Section ===== */}
        <div className="px-4 sm:px-8 md:px-12 max-w-7xl mx-auto mt-3 mb-14">
          {items.length < 1 ? (
            <div className="flex justify-center items-center h-72">{t('no_result')}</div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-10 sm:gap-y-6 mb-10">
              {items.map((item, idx) => (
                <Card key={idx} item={item} />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* ===== Footer Section ===== */}
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale, query: { q = '' } }) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_PROD_BACKEND_URL}/api/v1/products/search?q=${q}`
  );
  const fetchedProducts: IProduct[] = res.data.data.map((product: IProduct) => ({
    ...product,
    img1: product.image1,
    img2: product.image2,
  }));

  let items: IProduct[] = [];
  fetchedProducts.forEach((product: IProduct) => {
    items.push(product);
  });

  return {
    props: {
      messages: (await import(`../messages/common/${locale}.json`)).default,
      items,
      searchWord: q,
    },
  };
};

export default Search;
