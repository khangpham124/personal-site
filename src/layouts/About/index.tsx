/* eslint-disable jsx-a11y/alt-text */
import Input from "@/components/Input/Input";
import Button from "@/components/Buttons/Button";
import { useTranslations } from "next-intl";
import React, { useState, useEffect, Fragment } from "react";
import { profileAPI, ItemOrder, ItemMember } from "@/services/customerProfile";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import Moment from "react-moment";
import { IProductStore } from "@/interfaces/customerProduct-service";
import Card from "@/components/Card/Card";

const ProfileLayout = () => {
  // const router = useRouter();
  const serviceprofileAPI = new profileAPI();
  const t = useTranslations("Shopping_Cart");
  const [profileCustomer, setProfileCustomer] = useState<ItemMember>();
  const [ordesCustomer, setOrdesCustomer] = useState<ItemOrder[]>();
  const [wishListCustomer, setWishListCustomer] = useState<IProductStore[]>();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

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
      <div className="lg:px-[40px] px-[20px]">About</div>
    </>
  );
};

export default ProfileLayout;
