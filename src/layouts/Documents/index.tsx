import { useTranslations } from "next-intl";
import React, { Fragment, useEffect, useState } from "react";
import { documentAPI } from "@/services/documentService";
import { searchAPI } from "@/services/searchService";
// import { IArticle } from "@/interfaces/customerArticles-service";

function DocumentLayout() {
  const t = useTranslations("Category");
  const sevicesdocumentAPI = new documentAPI();
  const sevicessearchAPI = new searchAPI();
  const [posts, setPosts] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sevicessearchAPI.getResults(searchValue).then((res: any) => {
      // console.log(res.data);
      setPosts(res.data);
    });
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue((e.target as HTMLInputElement).value);
  };

  useEffect(() => {
    sevicesdocumentAPI.getDocuments().then((res: any) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <Fragment>
      <div className="mainContent flex">
        <div className="relative w-full">
          <form className="mt-2 " onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder={"Search document"}
              className="px-4 py-2 w-full focus:outline-none"
              onChange={handleChange}
            />
            <button type="submit">Seach</button>
          </form>
        </div>
        <div className="w-full container">
          {posts?.map((item: any, index: number) => (
            <div key={`doc_${index}`}>{item.title.rendered}</div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default DocumentLayout;
