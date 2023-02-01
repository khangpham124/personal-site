import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCustomersAction } from "src/state-management/actions/customers";
import { EPaginate } from "utils/types";
import {
  OPTION_GENDER_EN,
  OPTION_GENDER_VN,
  LEAD_SOURCES_EN,
  LEAD_SOURCES_VN,
  RATING_EN,
  RATING_VN,
  LEAD_STATUSES_EN,
  LEAD_STATUSES_VN,
} from "./constants";
import DatePicker from "react-datepicker";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

type Props = {
  activeFilter: boolean;
  setCurrentPage: Function;
};

const FilterContainer: React.FC<Props> = ({ activeFilter, setCurrentPage }) => {
  const dispatch = useDispatch();
  const { t: translator } = useTranslation();
  const langCookies = Cookies.get("lang");

  const fetchCustomers = (
    pageIndex: number,
    pageSize: number,
    optionalParams?: any
  ) => {
    dispatch(fetchCustomersAction.request(pageIndex, pageSize, optionalParams));
  };

  const [searchFilterValue, setSearchFilterValue] = useState("");
  const [filterValues, setFilterValues] = useState({
    phoneNumber: "",
    gender: "",
    email: "",
    firstName: "",
    lastName: "",
    rating: "",
    leadStatus: "",
    leadSource: "",
    productInterest: "",
    note: "",
    dateOfBirth: "",
    street: "",
    ward: "",
    district: "",
    city: "",
    idType: "",
    idNumber: "",
    estimatedIncome: "",
    budget: "",
    industry: "",
    position: "",
  });
  const [filtersChecked, setFiltersChecked] = useState({
    phoneNumber: false,
    gender: false,
    email: false,
    firstName: false,
    lastName: false,
    rating: false,
    leadStatus: false,
    leadSource: false,
    productInterest: false,
    note: false,
    dateOfBirth: false,
    street: false,
    ward: false,
    district: false,
    city: false,
    idType: false,
    idNumber: false,
    estimatedIncome: false,
    budget: false,
    industry: false,
    position: false,
  });
  const [filters, setFilters] = useState({
    phoneNumber: {
      label: `${translator("filter.phone")}`,
      type: "number",
      options: [],
    },
    gender: {
      label: `${translator("filter.gender")}`,
      type: "select",
      options: langCookies === "vi" ? OPTION_GENDER_VN : OPTION_GENDER_EN,
    },
    email: {
      label: "Email",
      type: "text",
      options: [],
    },
    firstName: {
      label: `${translator("filter.first_name")}`,
      type: "text",
      options: [],
    },
    lastName: {
      label: `${translator("filter.last_name")}`,
      type: "text",
      options: [],
    },
    rating: {
      label: `${translator("filter.rating")}`,
      type: "select",
      options: langCookies === "vi" ? RATING_VN : RATING_EN,
    },
    leadStatus: {
      label: `${translator("filter.lead_status")}`,
      type: "select",
      options: (langCookies === "vi"
        ? LEAD_STATUSES_VN
        : LEAD_STATUSES_EN
      ).filter((status) => status.value !== 4),
    },
    leadSource: {
      label: `${translator("filter.lead_source")}`,
      type: "select",
      options: langCookies === "vi" ? LEAD_SOURCES_VN : LEAD_SOURCES_EN,
    },
    productInterest: {
      label: `${translator("filter.products_interest")}`,
      type: "text",
      options: [],
    },
    note: {
      label: `${translator("filter.note")}`,
      type: "text",
      options: [],
    },
    dateOfBirth: {
      label: `${translator("filter.date_of_birth")}`,
      type: "datepicker",
      options: [],
    },
    street: {
      label: `${translator("filter.street")}`,
      type: "text",
      options: [],
    },
    ward: {
      label: `${translator("filter.ward")}`,
      type: "text",
      options: [],
    },
    district: {
      label: `${translator("filter.district")}`,
      type: "text",
      options: [],
    },
    city: {
      label: `${translator("filter.city")}`,
      type: "text",
      options: [],
    },
    idType: {
      label: `${translator("filter.id_type")}`,
      type: "text",
      options: [],
    },
    idNumber: {
      label: `${translator("filter.id_number")}`,
      type: "text",
      options: [],
    },
    estimatedIncome: {
      label: `${translator("filter.estimated_income")}`,
      type: "text",
      options: [],
    },
    budget: {
      label: `${translator("filter.customer_budget")}`,
      type: "text",
      options: [],
    },
    industry: {
      label: `${translator("filter.industry")}`,
      type: "text",
      options: [],
    },
    position: {
      label: `${translator("filter.position")}`,
      type: "text",
      options: [],
    },
  });

  const [filtersAfterSearch, setFiltersAfterSearch] = useState(filters);
  const [dateOfBirthFrom, setDateOfBirthFrom] = useState("");
  const [dateOfBirthTo, setDateOfBirthTo] = useState("");

  return (
    <div className={`filter ${activeFilter ? "open" : ""}`}>
      <h3 className="filter-header">{`${translator(
        "filter.text_filter_customer_by"
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
              {value.type === "select" && (
                <Select
                  placeholder={`${translator("product_page.text_select")}`}
                  value={filterValues[key]}
                  onChange={(val) =>
                    setFilterValues({
                      ...filterValues,
                      [key]: val,
                    })
                  }
                  options={value.options}
                  styles={{
                    control: (base) => ({
                      ...base,
                      border: `1px solid #e9ecef`,
                    }),
                  }}
                  isSearchable
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
              leadSource: (filterValues.leadSource as any)?.value,
              productInterest: filterValues.productInterest || undefined,
              note: filterValues.note || undefined,
              ward: filterValues.ward || undefined,
              district: filterValues.district || undefined,
              city: filterValues.city || undefined,
              street: filterValues.street || undefined,
              phoneNumber: filterValues.phoneNumber || undefined,
              gender: (filterValues.gender as any)?.value || undefined,
              email: filterValues.email || undefined,
              firstName: filterValues.firstName || undefined,
              lastName: filterValues.lastName || undefined,
              idType: filterValues.idType || undefined,
              idNumber: filterValues.idNumber || undefined,
              estimatedIncome: filterValues.estimatedIncome || undefined,
              budget: filterValues.budget || undefined,
              industry: filterValues.industry || undefined,
              position: filterValues.position || undefined,
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
              if (filtersChecked.dateOfBirth === false) {
                delete optionalParams.fromDate;
                delete optionalParams.toDate;
              }
            });
            fetchCustomers(1, EPaginate.COMMON_PAGE_SIZE, optionalParams);
            setCurrentPage(1);
          }}
        >
          {`${translator("product_page.text_apply_filter")}`}
        </button>
      </div>
    </div>
  );
};

export default FilterContainer;
