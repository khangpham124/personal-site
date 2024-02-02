import Card from '@/components/Card/Card';
import Filters from '@/components/Filters';
import Sort from '@/components/Filters/Sort';
import useWindowSize from '@/hooks/useWindowSize';
import { IProductStore } from "@/interfaces/customerProduct-service";
import { Option } from '@/interfaces/filters';
import FilterIcon from '@/public/assets/icons/FilterIcon';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import React, { Fragment, useEffect, useState } from 'react';
import { itemAPI } from '@/services/customerItems';

const SortOptions: Option[] = [
  {
    label: 'mới nhất',
    value: '&orderByCreatedAt=DESC',
  },
  {
    label: 'cũ nhất',
    value: '&orderByCreatedAt=ASC',
  },
  {
    label: 'Giá tăng dần',
    value: '&orderByPrice=DESC',
  },
  {
    label: 'Giá giảm dần',
    value: '&orderByPrice=DESC',
  },
];

// IProductStore

function FiltersLayout() {
  const t = useTranslations('Filters');
  const size = useWindowSize();
  const sevicesitemAPI = new itemAPI();
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const [listItems, setListItems] = useState<any>();
  const [queries, setQueries] = useState({
    prices: [0, 4000000],
    sort: SortOptions[0],
  });

  const [page, setPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const filterByPrice = (queries: any) => {
    const fromPrice = queries.prices[0];
    const toPrice = queries.prices[1];
    const categoryUuids = queries.categoryUuids?.toString() || '' ;
    const colors = queries.colors?.toString() || '' ;
    const sort = queries.sort.value;
    sevicesitemAPI.getProductInFilter(fromPrice, toPrice, categoryUuids, colors, sort).then((res: any) => {
      setListItems(res.data.data)
    })
  };

  const getList = (pageCurrent: number) => {
    sevicesitemAPI.getProductInStore(pageCurrent).then((res: any) => {
      const allItem = res.data.data;
      setListItems(allItem)
      // setTotalPages(res.data.totalPages)
    });
  };

  const fetchList = (pageCurrent: number) => {
    setIsLoading(true);
    // setError(null);
    try {
      sevicesitemAPI.getProductInStore(pageCurrent).then((res: any) => {
        const allItem = res.data.data;
        const cloneItems = listItems !== undefined ? [...listItems] : [];
        const newItems =  cloneItems.concat(allItem);
        console.log(newItems)
        setListItems(newItems)
        setPage(pageCurrent + 1);
      });
  
    } catch (error) {
      // setError(error);
    } finally {
      setIsLoading(false);
    }

  };


  const handleScroll = () => {
    const offsetHeight =  document.documentElement.offsetHeight;
    const scrollTop = document.documentElement.scrollTop;
    if (
      window.innerHeight + scrollTop  >= offsetHeight + 150 ||
      window.innerHeight + scrollTop  <= offsetHeight - 150 ||
      isLoading) {
      return;
    }
    fetchList(page + 1)
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  useEffect(() => { 
    filterByPrice(queries);
  }, [queries]);

  useEffect(() => {
    getList(page);
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
            {listItems?.map((item: IProductStore, index: number) => (
              <Card key={`card-item-` + index} item={item} />
            ))}
            </div>
            {isLoading ? `loading` : ``}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default FiltersLayout;
