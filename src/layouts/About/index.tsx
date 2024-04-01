/* eslint-disable jsx-a11y/alt-text */
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { infoAPI } from "@/services/aboutServices";

const ProfileLayout = () => {
  // const router = useRouter();
  const sevicesInfoAPI = new infoAPI();
  const t = useTranslations("Shopping_Cart");
  const [info, setInfo] = useState<any[]>([]);
  useEffect(() => {
    sevicesInfoAPI.getPageAboutResults().then((res: any) => {
      setInfo(res.data.content.rendered);
    });
  }, []);

  return (
    <>
      <div className="mainContent maxW">
        <div className="textAbout">
          <div dangerouslySetInnerHTML={{ __html: String(info) }}></div>
          <h1 className="heading--sub">About</h1>
        </div>
        <video width="400" autoPlay muted loop>
          <source
            src="https://api.teddycoder.com/assets/walk.MP4"
            type="video/mp4"
          ></source>
        </video>
      </div>
    </>
  );
};

export default ProfileLayout;
