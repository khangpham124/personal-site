import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import Select from "react-select";
import { fetchProductsAction } from "src/state-management/actions/products";
import { TRootState } from "src/state-management/reducers";
import { EPaginate } from "utils/types";
import DatePicker from "react-datepicker";
import { useTranslation } from "react-i18next";
import "react-datepicker/dist/react-datepicker.css";
import { PRODUCT_STATUS_EN, PRODUCT_STATUS_VI } from "./constants";

type FilterType = {
  productName: string;
  price: number;
  status: string;
  project: string;
  createdDate: string;
};

type Props = {
  activeFilter: boolean;
  setCurrentPage: Function;
};

const FilterProduct: React.FC<Props> = ({ activeFilter, setCurrentPage }) => {
  const dispatch = useDispatch();
  const { t: translator } = useTranslation();
  const lang = Cookies.get("lang");

  const projects = useSelector(
    (state: TRootState) => state.projects.all?.items
  );
  const [listProject, setListProject] = useState<any[]>([]);

  const fetchProducts = (
    pageIndex: number,
    pageSize: number,
    optionalParams?: any
  ) => {
    dispatch(fetchProductsAction.request(pageIndex, pageSize, optionalParams));
  };

  //** Filter */
  const [searchFilterValue, setSearchFilterValue] = useState("");
  const [filters, setFilters] = useState({
    productName: {
      label: `${translator("filter.product_name")}`,
      type: "text",
      options: [],
    },
    price: {
      label: `${translator("filter.price")}`,
      type: "number",
      options: [],
    },
    status: {
      label: `${translator("filter.status")}`,
      type: "select",
      options: [],
    },
    project: {
      label: `${translator("filter.project")}`,
      type: "select",
      options: [],
    },
    createdDate: {
      label: `${translator("filter.created_date")}`,
      type: "datepicker",
      options: [],
    },
  });

  const [filtersAfterSearch, setFiltersAfterSearch] = useState(filters);

  const [filtersChecked, setFiltersChecked] = useState({
    productName: false,
    price: false,
    status: false,
    project: false,
    createdDate: false,
  });
  const [filterValues, setFilterValues] = useState<FilterType>({
    productName: "",
    price: 0,
    status: "",
    project: "",
    createdDate: "",
  });
  //** End of Filter */

  const [dateOfBirthFrom, setDateOfBirthFrom] = useState("");
  const [dateOfBirthTo, setDateOfBirthTo] = useState("");

  useEffect(() => {
    const arr = projects?.map((item) => {
      return { value: item?.id, label: item?.name };
    }, []);
    setListProject(arr);
  }, [projects]);

  return (
    <div className={`filter ${activeFilter ? "open" : ""}`}>
      <h3 className="filter-header">{`${translator(
        "product_page.text_filter_product_by"
      )}`}</h3>
      <input
        className="form-control shadow-none filter-search"
        value={searchFilterValue}
        onChange={(e) => {
          const searchValue = e.target.value;
          if (!searchValue) {
            setFiltersAfterSearch(filters);
          } else {
            const filterKeys = Object.keys(filters);
            const filterKeysChecked = Object.keys(filtersChecked).filter(
              (key) => filtersChecked[key]
            );
            const filterKeysMatchSearchValue = filterKeys.filter((key) =>
              key.includes(searchValue.toLowerCase())
            );
            const filterKeysValid = new Set([
              ...filterKeysChecked,
              ...filterKeysMatchSearchValue,
            ]);
            const filtersValid = Array.from(filterKeysValid).reduce(
              (formattedFilters, key) => ({
                ...formattedFilters,
                [key]: filters[key],
              }),
              {}
            );
            setFiltersAfterSearch(filtersValid as any);
          }

          setSearchFilterValue(searchValue);
        }}
        placeholder={`${translator("product_page.text_search_filter")}`}
      />
      <h3 className="filter-header">{`${translator(
        "product_page.text_filter_by_fields"
      )}`}</h3>
      <div className="filter-list">
        {Object.entries(filtersAfterSearch).map(([key, value]) => (
          <div key={key} className="filter-row">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id={key}
                checked={filtersChecked[key]}
                onChange={(e) =>
                  setFiltersChecked({
                    ...filtersChecked,
                    [key]: e.target.checked,
                  })
                }
              />
              <label className="custom-control-label" htmlFor={key}>
                <span>{value.label}</span>
              </label>
            </div>
            <div className={`filter-comp ${filtersChecked[key] ? "show" : ""}`}>
              {(value.type === "number" || value.type === "text") && (
                <input
                  type={value.type}
                  className="form-control shadow-none"
                  value={filterValues[key]}
                  onChange={(e) =>
                    setFilterValues({
                      ...filterValues,
                      [key]: e.target.value,
                    })
                  }
                />
              )}
              {value.type === "datepicker" && (
                <div>
                  <DatePicker
                    wrapperClassName={`filter-list-datepicker ${key}`}
                    placeholderText={`${translator(
                      "product_page.text_from_date"
                    )}`}
                    dateFormat="dd/MM/yyyy"
                    selected={dateOfBirthFrom}
                    onChange={(date) => setDateOfBirthFrom(date)}
                  />

                  <DatePicker
                    wrapperClassName="filter-list-datepicker"
                    placeholderText={`${translator(
                      "product_page.text_to_date"
                    )}`}
                    dateFormat="dd/MM/yyyy"
                    selected={dateOfBirthTo}
                    onChange={(date) => setDateOfBirthTo(date)}
                  />
                </div>
              )}
              {value.type === "select" && (
                <div>
                  <Select
                    placeholder={`${translator("product_page.text_select")}`}
                    name={value.label}
                    onChange={(e) =>
                      setFilterValues({
                        ...filterValues,
                        [key]: e.value,
                      })
                    }
                    options={
                      key === "status"
                        ? lang === "vi"
                          ? PRODUCT_STATUS_VI
                          : PRODUCT_STATUS_EN
                        : listProject
                    }
                    styles={{
                      control: (base) => ({
                        ...base,
                        border: `1px solid #e9ecef`,
                        marginTop: "0.5rem",
                      }),
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="filter-footer">
        <button
          className="btn btn-dark"
          onClick={() => {
            setSearchFilterValue("");
            setFilterValues(
              Object.keys(filterValues).reduce(
                (emptyValues, val) => ({
                  ...emptyValues,
                  [val]: "",
                }),
                {}
              ) as any
            );
            setFiltersChecked(
              Object.keys(filtersChecked).reduce(
                (uncheckedFilters, val) => ({
                  ...uncheckedFilters,
                  [val]: false,
                }),
                {}
              ) as any
            );
          }}
        >
          {`${translator("product_page.text_clear")}`}
        </button>
        <button
          className="btn btn-danger ml-3"
          onClick={() => {
            const optionalParams = {
              productName: (filterValues.productName as any) || undefined,
              price: (filterValues.price as any) || undefined,
              productStatus: (filterValues.status as any) || undefined,
              projectId: filterValues.project || undefined,
              fromDate: dateOfBirthFrom
                ? new Date(dateOfBirthFrom).toISOString()
                : undefined,
              toDate: dateOfBirthTo
                ? new Date(dateOfBirthTo).toISOString()
                : undefined,
              sort: { createdAt: "DESC" },
            };
            Object.keys(optionalParams).map(function (key, index) {
              if (
                optionalParams[key] === undefined ||
                filtersChecked[key] === false
              ) {
                delete optionalParams[key];
              }
              if (filtersChecked.createdDate === false) {
                delete optionalParams.fromDate;
                delete optionalParams.toDate;
              }
            });
            fetchProducts(1, EPaginate.COMMON_PAGE_SIZE, optionalParams);
            setCurrentPage(1);
          }}
        >
          {`${translator("product_page.text_apply_filter")}`}
        </button>
      </div>
    </div>
  );
};

export default FilterProduct;
