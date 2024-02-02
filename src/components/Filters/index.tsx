import { filters } from '@/fixtures/filters';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import React, { Fragment, useEffect, useState } from 'react';
import { Else, If, Then } from 'react-if';
import Checkbox from '../Checkbox';
import RangeInput from '../RangeInput';
import styles from './Filters.module.css';
import { itemAPI } from '@/services/customerItems';

export interface ICategory {
  name: string,
  code: string,
  slug: string
}

const Filters = ({ queries, setQueries }: any) => {
  const t = useTranslations('Filters');
  const sevicesitemAPI = new itemAPI();
  const [listCategory, setListCategory] = useState<ICategory[]>();


  useEffect(() => { 
    sevicesitemAPI.getCategoryItem().then((res: any) => {
      setListCategory(res.data.data)
    });


  }, []);
  const handleCheckbox = (value: string | number, checked: boolean, checkbox: any, type: string) => {
    if(type !== 'category') {
      setQueries((prev: any) => {
        const values = prev[checkbox.name] || [];
        if (checked && !values.includes(value)) {
          values.push(value);
        }
  
        if (!checked && values.includes(value)) {
          const index = values.indexOf(value);
          values.splice(index, 1);
        }
  
        return {
          ...prev,
          [checkbox.name]: values,
        };
      });
    } else {
      setQueries((prev: any) => {
        const values = prev['categoryUuids'] || [];
        if (checked && !values.includes(value)) {
          values.push(value);
        } else {
          const index = values.indexOf(value);
          values.splice(index, 1);
        }
  
        return {
          ...prev,
          ['categoryUuids']: values,
        };
      });
    }
    
  };

  return (
    <>
      <div className="lg:p-[40px] p-[20px] bg-[#F9FAFB]">
        <div>
          {filters.map((filter: any, i: number) => (
            <Fragment key={`Filter-item-${i}`}>
              
              <If condition={filter?.range}>
                <Then>
                    <h4
                    className={classNames(
                      `text-[16px] text-[#333] font-PlusJakartaSansSemiBold uppercase lg:mb-[20px] mb-[20px] ${styles.title}`
                    )}
                  >
                    Giá
                  </h4>
                  <RangeInput
                    value={queries.prices}
                    onChange={(value) => {
                      setQueries((prev: any) => ({ ...prev, prices: value }));
                    }}
                  />
                </Then>
                <Else>
                  <h4
                    className={classNames(
                      `text-[16px] text-[#333] font-PlusJakartaSansSemiBold uppercase lg:mb-[20px] mb-[20px] ${styles.title}`
                    )}
                  >
                    Danh mục sản phẩm
                  </h4>
                  {listCategory?.map((checkbox: any, index: number) => (
                    <Fragment key={`Checkbox-item-${i}-${index}`}>
                      <Checkbox
                        key={checkbox?.categoryUuids}
                        id={checkbox?.uuid}
                        name={checkbox?.categoryUuids}
                        label={checkbox?.name}
                        value={checkbox?.uuid}
                        checked={(queries['categoryUuids'] || []).includes(checkbox?.uuid)}
                        onChange={(value, checked) => handleCheckbox(value, checked, checkbox, 'category')}
                      />
                    </Fragment>
                  ))}

                <h4
                    className={classNames(
                      `text-[16px] text-[#333] font-PlusJakartaSansSemiBold uppercase lg:mb-[20px] mb-[20px] ${styles.title}`
                    )}
                  >
                    Màu sắc
                  </h4>
                  {filter?.checkboxes?.map((checkbox: any, index: number) => (
                    <Fragment key={`Checkbox-item-${i}-${index}`}>
                      <Checkbox
                        key={checkbox?.label_trans}
                        id={checkbox?.label_trans}
                        name={checkbox?.name}
                        label={t(checkbox?.label_trans)}
                        color={checkbox?.icon}
                        image={checkbox?.image}
                        value={checkbox?.value}
                        checked={(queries[checkbox.name] || []).includes(checkbox?.value)}
                        onChange={(value, checked) => handleCheckbox(value, checked, checkbox, 'color')}
                      />
                    </Fragment>
                  ))}
                </Else>
              </If>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Filters;
