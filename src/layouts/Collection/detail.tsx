import Card from '@/components/Card/Card';
import Filters from '@/components/Filters';
import Sort from '@/components/Filters/Sort';
import useWindowSize from '@/hooks/useWindowSize';
import { IProductStore, IProduct } from "@/interfaces/customerProduct-service";
import { Option } from '@/interfaces/filters';
import FilterIcon from '@/public/assets/icons/FilterIcon';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import React, { Fragment, useEffect, useState } from 'react';
import { collectionAPI } from '@/services/collectionsServices';
import { getCookie } from 'cookies-next';

const SortOptions: Option[] = [
  {
    label: 'mới nhất',
    value: 'createdAt.desc',
  },
  {
    label: 'cũ nhất',
    value: 'createdAt.asc',
  },
  {
    label: 'Giá tăng dần',
    value: 'prices.desc',
  },
  {
    label: 'Giá giảm dần',
    value: 'prices.asc',
  },
];

// IProductStore

function DetailCollectionLayout() {
  const t = useTranslations('Filters');
  const size = useWindowSize();
  const uuid = getCookie('uuid') || null;
  const sevicescollectionAPI = new collectionAPI();
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const [listItems, setListItems] = useState<IProduct[]>();
  const [queries, setQueries] = useState({
    prices: [0, 4000000],
    sort: SortOptions[0],
  });

  // const filterByPrice = (queries: any) => {
  //   const fromPrice = queries.prices[0];
  //   const toPrice = queries.prices[1];
  //   const categoryUuids = queries.categoryUuids?.toString() || '' ;
  //   const colors = queries.colors?.toString() || '' ;
  //   sevicesitemAPI.getProductInFilter(fromPrice, toPrice, categoryUuids, colors).then((res: any) => {
  //     setListItems(res.data.data)
  //   })
  // };

  useEffect(() => { 
    // filterByPrice(queries);
  }, [queries]);

  useEffect(() => {
    // sevicesitemAPI.getProductInStore().then((res: any) => {
    //   setListItems(res.data.data)
    // });
    sevicescollectionAPI.getDetailCollection(String(uuid)).then((res: any) => {
      setListItems(res.data.products)
    });    

    if (size.width > 1024) {
      setIsFilter(true);
    } else {
      setIsFilter(false);
    }

    
  }, [size.width]);


  return (
    <Fragment>
      <div className="w-full flex flex-col justify-center items-center lg:mb-[60px] mb-[20px]">
        <div
          className={classNames('w-full block gap-x-4 lg:gap-x-8 md:px-[40px] px-[20px] mt-[0px]', {
            'md:flex': isFilter,
            'md:block': !isFilter,
          })}
        >
          <div
            className={classNames({
              'md:w-1/4 relative': isFilter,
              'h-fit absolute': !isFilter,
              'mt-24px': !isFilter && size.width < 768,
            })}
          >
            <div
              className={classNames('flex mb-16px items-center cursor-pointer')}
              onClick={() => setIsFilter(!isFilter)}
            >
              <FilterIcon />
              <h4 className="text-[16px] text-[#333] font-PlusJakartaSansSemiBold uppercase ml-8px">
                {t('title')}
              </h4>
            </div>
            {isFilter && <Filters queries={queries} setQueries={setQueries} />}
          </div>
          <div
            className={classNames('w-full md:mt-0 mt-[24px]', {
              'md:w-3/4': isFilter,
            })}
          >
            <div className="w-full flex justify-end mb-16px">
              <Sort
                id="sort_by"
                className="flex-1"
                label="Sắp xếp theo:"
                checkmark={true}
                options={SortOptions}
                selected={queries.sort as Option}
                onChange={(selectedOption) => {
                  setQueries((prev) => ({ ...prev, sort: selectedOption }));
                }}
              />
            </div>
            <div
              className={classNames(
                'w-full grid md:grid-cols-2 grid-cols-1 gap-x-4 lg:gap-x-8 gap-y-6 mb-10',
                {
                  'lg:grid-cols-3': isFilter,
                },
                {
                  'lg:grid-cols-4': !isFilter,
                }
              )}
            >
              {listItems?.map((item: IProduct, index: number) => {
                const products = {
                  product: item
                }
                return (
                  <Card key={`card-item-` + index} item={products} />
                )
                }  
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default DetailCollectionLayout;
