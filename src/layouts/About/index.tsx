/* eslint-disable jsx-a11y/alt-text */
import { useTranslations } from "next-intl";
import React, { useState, useEffect, Fragment } from "react";

const ProfileLayout = () => {
  // const router = useRouter();

  const t = useTranslations("Shopping_Cart");

  useEffect(() => {
    // serviceprofileAPI.getCustomerProfile().then((res: any) => {
    //   setProfileCustomer(res.data.membershipInfo);
    //   setFullName(res.data?.fullName)
    //   setFirstName(res.data?.firstName)
    //   setLastName(res.data?.lastName)
    //   setEmail(res.data?.email)
    //   setPhone(res.data?.phone)
    // });
  }, []);

  return (
    <>
      <div className="mainContent maxW">
        <div className="textAbout">
          <p>
            I work as a freelance web developer in Ho Chi Minh City, Vietnam,
            I've also worked remotely with clients in Italy, Thailand,
            Australia, Japan, and other countries with a variety of projects
            including EC, corporate websites, high-load services, and portals...
            I’ve had over 8 years of experience creating high-quality web design
            and development. My engineering skills-set is dynamic and constantly
            evolves to match the most recent trends so I can refine my process
            to make the process of making a website easier for you. More than
            that, I can help you unlock the value of your idea and solve your
            development challenges by delivering best-in-class creative
            strategy, user experience, and visual design on a website that
            results in a solution that meets the needs of your business within
            budget and on time.
          </p>
          <h1 className="heading--sub">Documents</h1>
        </div>
        <video width="400" autoPlay muted loop>
          <source
            src="https://teddycoder.com/assets/walk.MP4"
            type="video/mp4"
          ></source>
        </video>
      </div>
    </>
  );
};

export default ProfileLayout;
