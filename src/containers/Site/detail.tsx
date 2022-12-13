import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import router, { useRouter } from "next/router";
import Link from "next/link";
import Select from "react-select";
import Paginate from "../../components/Paginate";
import Modal from "../../components/ModalCreate";
import InputField from "../../components/ModalCreate/InputField";
import SelectField from "../../components/ModalCreate/SelectField";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TRootState } from "src/state-management/reducers";
import { uiActions } from "src/state-management/actions";
import $ from "jquery";
import { fetchProjectDesignByDomainAction } from "src/state-management/actions/projects";
import { EProjectsActions } from "src/state-management/actions/projects/constants";

const DetailSiteContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { siteDetail: siteDomain } = router.query;
  const projectDesignByDomain = useSelector(
    (state: TRootState) => state.projects.designByDomain
  );

  useEffect(() => {
    if (siteDomain) {
      dispatch(fetchProjectDesignByDomainAction.request(siteDomain as string));
    }
  }, [siteDomain]);

  useEffect(() => {
    return () => {
      dispatch(
        uiActions.resetActionStatus(
          EProjectsActions.FETCH_PROJECT_DESIGN_BY_DOMAIN
        )
      );
    };
  }, [dispatch]);

  return (
    <div id="main-wrapper">
      <div className="page-wrapper">
        <div
          id="designHtml"
          className="mt-5 previewBlock"
          dangerouslySetInnerHTML={{ __html: projectDesignByDomain?.design }}
        ></div>
      </div>
    </div>
  );
};

export default DetailSiteContainer;
