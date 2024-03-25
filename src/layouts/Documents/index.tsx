import Breadcrumb from "@/components/Breadcrumb";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import collection_img from "@/public/assets/products/collection-menu.png";
import { HOME } from "@/constants/routes";
// import { useArticlesByPost } from "@/hooks/useArticle";
// import { ItemPost } from '@/services/articleServices';
import CardBlog from "@/components/Card/CardBlog";

import { documentAPI } from "@/services/documentService";
import { IArticle } from "@/interfaces/customerArticles-service";

function DocumentLayout() {
  const t = useTranslations("Category");
  const sevicesdocumentAPI = new documentAPI();
  const [posts, setPosts] = useState<IArticle[]>([]);

  useEffect(() => {
    sevicesdocumentAPI.getDocuments().then((res: any) => {
      console.log(res);
    });
  }, []);

  return (
    <Fragment>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="relative w-full flex justify-center items-center">
          ABC
        </div>
        <div className="w-full container flex-box">
          {/* {posts?.map((item: IArticle, index: number) => (
            <CardBlog key={`card-item-` + index} item={item} />
          ))} */}
        </div>
      </div>
    </Fragment>
  );
}

export default DocumentLayout;
