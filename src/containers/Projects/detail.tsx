import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { uiActions } from "src/state-management/actions";
import {
  fetchProjectDetailAction,
  fetchProjectDesignDetailAction,
} from "src/state-management/actions/projects";
import { EProjectsActions } from "src/state-management/actions/projects/constants";
import GeneralContainer from "./general";
import DesignContainer from "./design";
import HoistingContainer from "./hoisting";

const DetailProjectContainer: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { projectDetail: projectId } = router.query;

  const fetchProjectDetail = (id: string) => {
    dispatch(fetchProjectDetailAction.request(id));
  };

  useEffect(() => {
    projectId && fetchProjectDetail(projectId as string);
  }, [projectId]);

  useEffect(() => {
    return () => {
      dispatch(
        uiActions.resetActionStatus(EProjectsActions.FETCH_PROJECT_DETAIL)
      );
      dispatch(uiActions.resetActionStatus(EProjectsActions.UPDATE_PROJECT));
    };
  }, [dispatch]);

  useEffect(() => {
    // console.log(hasDeisgn);
    if (projectId) {
      dispatch(fetchProjectDesignDetailAction.request(projectId as string));
    }
  }, [projectId]);

  useEffect(() => {
    return () => {
      dispatch(
        uiActions.resetActionStatus(EProjectsActions.FETCH_PROJECT_DESIGN)
      );
    };
  }, [dispatch]);

  return (
    <div id="main-wrapper">
      <div className="page-wrapper">
        <div className="container-fluid card tab-content">
          <div className="d-flex align-items-center items-center py-3">
            <div className="w-50 card-body">
              <h2 className="text-themecolor">The projects</h2>
            </div>
          </div>
          <GeneralContainer />
          <DesignContainer />
          <HoistingContainer />
        </div>
      </div>

      <footer className="footer">© 2022 CRM Dreamland</footer>
    </div>
  );
};

export default DetailProjectContainer;
