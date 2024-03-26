import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useTranslations } from "next-intl";

import SearchIcon from "@/public/assets/icons/SearchIcon";
import axios from "axios";
import Card from "../Card/Card";
import Loading from "@/public/assets/icons/Loading";
import { searchAPI } from "@/services/searchService";
import { useRouter } from "next/router";
import { IProductStore } from "@/interfaces/customerProduct-service";

export default function SearchForm() {
  const t = useTranslations("Navigation");
  const sevicessearchAPI = new searchAPI();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchItems, setSearchItems] = useState<IProductStore[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [noResult, setNoResult] = useState(false);
  const [moreThanFour, setMoreThanFour] = useState(false);

  function closeModal() {
    setOpen(false);
    setSearchItems([]);
    setNoResult(false);
    setMoreThanFour(false);
  }

  function openModal() {
    setOpen(true);
  }

  useEffect(() => {
    if (!isFetching) return;
    const fetchData = async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_PROD_BACKEND_URL}/api/v1/products/search?q=${searchValue}`
      );
      const fetchedProducts: IProductStore[] = res.data.data.map(
        (product: IProductStore) => ({
          ...product,
        })
      );
      if (fetchedProducts.length < 1) setNoResult(true);
      fetchedProducts.map((product, index) => {
        if (index < 4) {
          setSearchItems((prevProduct) => [...prevProduct, product]);
        } else {
          setMoreThanFour(true);
        }
      });
      setIsFetching(false);
    };
    fetchData();
  }, [isFetching, searchValue]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sevicessearchAPI.getResults(searchValue).then((res: any) => {
      console.log(res.data.data);
      // setPosts(res.data);
    });
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue((e.target as HTMLInputElement).value);
    setSearchItems([]);
    setNoResult(false);
    setMoreThanFour(false);
  };

  return (
    <>
      <div className="line-heigh-1">
        <button type="button" aria-label="Search" onClick={openModal}>
          <SearchIcon />
        </button>
      </div>
      <form className="mt-2 " onSubmit={handleSubmit}>
        {isFetching ? <Loading /> : <SearchIcon />}
        <input
          type="search"
          placeholder={t("search_anything")}
          className="px-4 py-2 w-full focus:outline-none text-2xl"
          onChange={handleChange}
        />
        <button type="submit">Seach</button>
      </form>
    </>
  );
}
