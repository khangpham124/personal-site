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
  const [hasResult, setHasResult] = useState(false);
  const [showSpin, setShowSpin] = useState(false);
  const [contentPost, setContentPost] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSpin(true);
    sevicessearchAPI.getResults(searchValue).then((res: any) => {
      setShowSpin(false);
      setPosts(res.data);
    });
  };

  const getContentPost = (id: string) => {
    setShowSpin(true);
    sevicessearchAPI.getContentResults(id).then((res: any) => {
      setHasResult(true);
      setShowSpin(false);
      setContentPost(res.data.content.rendered);
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
      <div className="mainContent flex justify-between">
        <div className="relative w-2/6">
          <form
            className="mt-2 flex justify-between relative"
            onSubmit={handleSubmit}
          >
            <input
              type="search"
              placeholder={"Search document"}
              className="px-4 py-2 w-full focus:outline-none input-page"
              onChange={handleChange}
            />
            <button type="submit" className="absolute icon-search">
              <i className="fa fa-search" aria-hidden="true"></i>
              {showSpin ? <i className="fa fa-spinner fa-spin mr-2"></i> : null}
            </button>
          </form>
        </div>
        <div className="w-3/5">
          {hasResult ? (
            <div dangerouslySetInnerHTML={{ __html: contentPost }}></div>
          ) : (
            posts?.map((item: any, index: number) => (
              <div
                key={`doc_${index}`}
                className={index > 0 ? `mt-4 cursor-pointer` : `cursor-pointer`}
                onClick={() => {
                  getContentPost(item.id);
                }}
              >
                {item.title.rendered ? item.title.rendered : item.title}
              </div>
            ))
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default DocumentLayout;
