import React, { useState, useEffect, Fragment } from "react";
import styles from "./LayoutCreator.module.css";
import $ from "jquery";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { TRootState } from "src/state-management/reducers";
import {
  createProjectDesignAction,
  updateProjectAction,
} from "src/state-management/actions/projects";
import { TUpdateProjectBody } from "services/identity/projects/types";
import toastr from "toastr";
import { crmPlatform, baseUrl } from "src/services/identity";

type Props = {
  type?:
    | "only-background"
    | "main-block"
    | "text"
    | "textarea"
    | "video"
    | "form"
    | "link-post"
    | "title-block";
  label: string;
  sublabel?: string;
  enableRemove?: boolean;
  enableRemoveItemSide?: boolean;
  enableRemoveSection?: boolean;
  idBlock: string;
  squareBlock?: boolean;
  logoBlock?: boolean;
  rectangleBlock?: boolean;
  headingText?: boolean;
  shadowBox?: boolean;
  cloneImg?: boolean;
  centerText?: boolean;
  projectId?: string;
  thumbnail?: string;
  placeholderText?: string;
  headingH1?: boolean;
};

const LayoutCreator = (props: Props) => {
  const {
    type,
    label,
    enableRemove,
    idBlock,
    sublabel,
    squareBlock,
    rectangleBlock,
    headingText,
    shadowBox,
    cloneImg,
    centerText,
    enableRemoveItemSide,
    enableRemoveSection,
    logoBlock,
    projectId,
    thumbnail,
    placeholderText,
    headingH1,
  } = props;
  let mainBlockWrap;

  if (type !== "main-block") {
    mainBlockWrap = "";
  } else {
    mainBlockWrap = "main-block";
  }
  const dispatch = useDispatch();
  const projectDetail = useSelector(
    (state: TRootState) => state.projects.detail
  );

  const createProjectDetail = (id: string, body: string) => {
    dispatch(createProjectDesignAction.request(id, { design: body }));
  };

  const createProjectThumbnail = (id: string, body: TUpdateProjectBody) => {
    dispatch(updateProjectAction.request(id, body));
  };
  const [imageBackground, setimageBackground] = useState(null);
  const FILE_SERVER_API = `${crmPlatform}/file-uploader`;
  const FILE_SERVER = "http://";
  const uploadToClient = (event) => {
    const i = event.target.files[0];
    let sizeFileUpload = i?.size;
    let typeFileUpload = i?.type;
    let src = URL.createObjectURL(i);
    const imgTpye = ["image/jpeg", "image/png"];
    if (imgTpye.includes(typeFileUpload)) {
      const body = new FormData();
      body.append("file", i);

      axios
        .post(FILE_SERVER_API, body, {
          headers: {
            // Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        })
        .then((response) => {
          // document.getElementById("file_name").innerHTML = i.name;
          setimageBackground(response.data.file);
          const body = {
            name: projectDetail.name,
            address: projectDetail.address,
            email: projectDetail.email,
            hotline: projectDetail.hotline,
            workingHours: projectDetail.workingHours,
            domainName: projectDetail.domainName,
            projectDescription: projectDetail.projectDescription,
            projectOwnerIntroduction: projectDetail.projectOwnerIntroduction,
            designType: projectDetail.designType,
            design: projectDetail.design,
            thumbnail: response.data.file,
          };
          // createProjectThumbnail(projectId, body);
        })
        .catch(function (error) {});
    } else {
      console.log("test");
    }
  };

  return (
    <div>
      <Fragment>
        <div
          className={`${mainBlockWrap} layout-creator`}
          style={{ position: "relative", width: "100%" }}
        >
          {enableRemove ? (
            <p
              className={`js-rmove`}
              style={{
                color: "red",
                position: "absolute",
                top: "10px",
                right: "10px",
                cursor: "pointer",
                textAlign: "center",
                fontSize: "16px",
                opacity: "0",
              }}
            >
              <i className="fa fa-minus-circle" aria-hidden="true"></i>
            </p>
          ) : null}

          {enableRemoveItemSide ? (
            <p
              className={`js-rmove-silde`}
              style={{
                color: "red",
                position: "absolute",
                top: "10px",
                right: "10px",
                cursor: "pointer",
                textAlign: "center",
                fontSize: "16px",
              }}
            >
              <i className="fa fa-minus-circle" aria-hidden="true"></i>
            </p>
          ) : null}

          {type === "title-block" ? (
            <div>
              <p className="design-view">{label}</p>
              <div className="mt-3">
                <input
                  type="text"
                  placeholder={`${placeholderText ? placeholderText : ``}`}
                  id={idBlock}
                  className={
                    headingText ? `${styles["input-form"]} js-heading-text` : ``
                  }
                  style={{
                    width: "100%",
                    height: "calc(1.5em + 0.75rem + 2px)",
                    padding: "0.375rem 0.75rem",
                    fontSize: "0.875rem",
                    lineHeight: "1.5",
                    color: "#4f5467",
                    backgroundColor: "#fff",
                    backgroundClip: "padding-box",
                    border: "1px solid #e9ecef",
                    borderRadius: "0.25rem",
                  }}
                />
              </div>
            </div>
          ) : null}

          {type === "text" ? (
            <div>
              <p className="design-view">{label}</p>
              <div className="mt-3">
                <input
                  type="text"
                  className={
                    headingText ? `${styles["input-form"]} js-heading-text` : ``
                  }
                  style={{
                    width: "100%",
                    height: "calc(1.5em + 0.75rem + 2px)",
                    padding: "0.375rem 0.75rem",
                    fontSize: "0.875rem",
                    lineHeight: "1.5",
                    color: "#4f5467",
                    backgroundColor: "#fff",
                    backgroundClip: "padding-box",
                    border: "1px solid #e9ecef",
                    borderRadius: "0.25rem",
                  }}
                />
                {headingH1 === true ? (
                  <h1
                    className="d-none js-heading-text-value heading-text"
                    style={{
                      width: "100%",
                      height: "calc(1.5em + 0.75rem + 2px)",
                      padding: "0.375rem 0.75rem",
                      fontSize: "0.875rem",
                      lineHeight: "1.5",
                      color: "#4f5467",
                    }}
                  ></h1>
                ) : (
                  <p
                    className="d-none js-heading-text-value heading-text"
                    style={{
                      width: "100%",
                      height: "calc(1.5em + 0.75rem + 2px)",
                      padding: "0.375rem 0.75rem",
                      fontSize: "0.875rem",
                      lineHeight: "1.5",
                      color: "#4f5467",
                    }}
                  ></p>
                )}
              </div>
            </div>
          ) : null}
          {type === "textarea" ? (
            <div>
              <p className="design-view">{label}</p>
              <div className="mt-3">
                <textarea
                  id={idBlock}
                  className={
                    shadowBox ? `shadow-box js-heading-text` : `js-heading-text`
                  }
                  style={{
                    width: "100%",
                    padding: "0.375rem 0.75rem",
                    fontSize: "0.875rem",
                    lineHeight: "1.5",
                    color: "#4f5467",
                    backgroundColor: "#fff",
                    backgroundClip: "padding-box",
                    border: "1px solid #e9ecef",
                    borderRadius: "0.25rem",
                    height: "150px",
                  }}
                />
                <p
                  className={
                    shadowBox
                      ? `shadow-box d-none js-heading-text-value heading-text-area`
                      : `d-none js-heading-text-value heading-text-area`
                  }
                  style={{
                    width: "100%",
                    padding: "0.375rem 0.75rem",
                    fontSize: "0.875rem",
                    lineHeight: "1.5",
                    color: "#4f5467",
                    whiteSpace: "pre-line",
                  }}
                ></p>
              </div>
            </div>
          ) : null}
          {type === "link-post" ? (
            <div>
              <p className="design-view">{label}</p>
              <div className="mt-3">
                <input
                  type="text"
                  placeholder="Title news"
                  className={
                    headingText ? `${styles["input-form"]} js-heading-link` : ``
                  }
                  style={{
                    width: "100%",
                    height: "calc(1.5em + 0.75rem + 2px)",
                    padding: "0.375rem 0.75rem",
                    fontSize: "0.875rem",
                    lineHeight: "1.5",
                    color: "#4f5467",
                    backgroundColor: "#fff",
                    backgroundClip: "padding-box",
                    border: "1px solid #e9ecef",
                    borderRadius: "0.25rem",
                  }}
                />
                <p
                  className="d-none js-heading-link-value heading-text"
                  style={{
                    width: "100%",
                    height: "calc(1.5em + 0.75rem + 2px)",
                    padding: "0.375rem 0.75rem",
                    fontSize: "0.875rem",
                    lineHeight: "1.5",
                    color: "#4f5467",
                  }}
                >
                  <a
                    href=""
                    className="js-heading-link-href"
                    target="_blank"
                  ></a>
                </p>
                <input
                  type="text"
                  placeholder="Insert URL"
                  className={
                    headingText
                      ? `${styles["input-form"]} js-heading-link mt-2`
                      : ``
                  }
                  style={{
                    width: "100%",
                    height: "calc(1.5em + 0.75rem + 2px)",
                    padding: "0.375rem 0.75rem",
                    fontSize: "0.875rem",
                    lineHeight: "1.5",
                    color: "#4f5467",
                    backgroundColor: "#fff",
                    backgroundClip: "padding-box",
                    border: "1px solid #e9ecef",
                    borderRadius: "0.25rem",
                  }}
                />
              </div>
            </div>
          ) : null}
          {type === "main-block" ? (
            <div
              className={`view-bg`}
              style={{
                backgroundImage: "url(" + imageBackground + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "0",
                backgroundColor: "#f1f1f1",
                border: "1px solid #afafb4",
                paddingTop: "56.25%",
              }}
            >
              <div
                className={`design-view`}
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  position: "absolute",
                  top: "35px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <p className="design-view">{label}</p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "normal",
                    fontStyle: "italic",
                  }}
                >
                  {sublabel}
                </p>
              </div>
              <label
                htmlFor={idBlock}
                className="design-view js-loading-icon"
                style={{
                  position: "absolute",
                  top: "120px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 90,
                  cursor: "pointer",
                  color: "#333",
                  fontSize: "20px",
                  padding: "10px 15px",
                  background: "rgba(255, 255, 255, 0.6)",
                  borderRadius: "5px",
                }}
              >
                <i className="fa fa-camera" aria-hidden="true"></i>
              </label>
              <span className={idBlock}>
                <input
                  type="file"
                  name={idBlock}
                  id={idBlock}
                  className="upload-image-set-bg"
                  aria-invalid="false"
                  onChange={uploadToClient}
                  style={{ display: "none" }}
                />
              </span>
              <div className={centerText ? "modern-typo" : "classic-typo"}>
                <input
                  type="text"
                  className={`js-input-type large-main-text js-heading-text`}
                  style={{
                    width: "100%",
                    height: "calc(1.5em + 0.75rem + 2px)",
                    padding: "0.375rem 0.75rem",
                    fontSize: "0.875rem",
                    lineHeight: "1.5",
                    color: "#4f5467",
                    backgroundColor: "#fff",
                    backgroundClip: "padding-box",
                    border: "1px solid #e9ecef",
                    borderRadius: "0.25rem",
                  }}
                />
                <h1
                  className="d-none js-heading-text-value heading-text large-main-text"
                  style={{
                    background: "transparent",
                    color: "#fff",
                    fontSize: "50px",
                    border: "none",
                    pointerEvents: "none",
                  }}
                ></h1>
                <input
                  type="text"
                  className={`js-input-type mt-3 js-heading-text`}
                  style={{
                    width: "100%",
                    height: "calc(1.5em + 0.75rem + 2px)",
                    padding: "0.375rem 0.75rem",
                    fontSize: "0.875rem",
                    lineHeight: "1.5",
                    color: "#4f5467",
                    backgroundColor: "#fff",
                    backgroundClip: "padding-box",
                    border: "1px solid #e9ecef",
                    borderRadius: "0.25rem",
                  }}
                />
                <h2
                  className="d-none js-heading-text-value heading-text"
                  style={{
                    background: "transparent",
                    color: "#fff",
                    fontSize: "25px",
                    border: "none",
                    pointerEvents: "none",
                  }}
                ></h2>
                <p
                  className="d-none"
                  id="thumbnailImg"
                  data-img={`${imageBackground}`}
                ></p>
              </div>
            </div>
          ) : null}

          {type === "only-background" ? (
            <div
              className={
                squareBlock
                  ? `view-bg image-fame`
                  : logoBlock
                  ? `view-bg image-fame only-logo`
                  : rectangleBlock
                  ? `view-bg image-fame`
                  : `image-fame`
              }
              style={
                squareBlock
                  ? {
                      aspectRatio: "1 / 1",
                      background: "#f1f1f1",
                      border: "1px solid #afafb4",
                      textAlign: "center",
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                    }
                  : rectangleBlock
                  ? {
                      aspectRatio: "16 / 9",
                      background: "#f1f1f1",
                      border: "1px solid #afafb4",
                      textAlign: "center",
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      overflow: "hidden",
                    }
                  : logoBlock
                  ? {
                      aspectRatio: "1 / 1",
                      background: "#fff",
                      border: "1px solid #afafb4",
                      textAlign: "center",
                      backgroundSize: "100% auto",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      overflow: "hidden",
                    }
                  : {
                      background: "#f1f1f1",
                      minHeight: "300px",
                      border: "1px solid #afafb4",
                      textAlign: "center",
                    }
              }
            >
              <p
                className={`${styles["label-text"]} design-view`}
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  position: "absolute",
                  top: "35px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                {label}
              </p>
              <label
                htmlFor={idBlock}
                className="design-view js-loading-icon"
                style={{
                  position: "absolute",
                  top: "120px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 90,
                  cursor: "pointer",
                  color: "#333",
                  fontSize: "20px",
                  padding: "10px 15px",
                  background: "rgba(255, 255, 255, 0.6)",
                  borderRadius: "5px",
                }}
              >
                <span>
                  <i className="fa fa-camera" aria-hidden="true"></i>
                </span>
              </label>
              <span
                className="nextImg"
                data-clone={cloneImg ? `${idBlock}_clone` : ""}
              >
                <input
                  type="file"
                  name={idBlock}
                  id={idBlock}
                  className={
                    squareBlock || rectangleBlock || logoBlock
                      ? "upload-image-set-bg"
                      : "upload-image"
                  }
                  aria-invalid="false"
                  onChange={uploadToClient}
                  style={{ display: "none" }}
                />
              </span>
              {squareBlock === false ||
              rectangleBlock === false ||
              logoBlock === false ? (
                <img
                  src={imageBackground}
                  className="source-img"
                  style={{
                    maxWidth: "100%",
                    width: "100%",
                  }}
                />
              ) : (
                <a
                  className="image-popup-vertical-fit d-none js-zoom-image"
                  href={imageBackground}
                ></a>
              )}
            </div>
          ) : null}

          {type === "video" ? (
            <div
              className={`${styles["form-file-upload-inner"]}`}
              style={{
                width: "100%",
                height: "0",
                background: "#f1f1f1",
                border: "1px solid #afafb4",
                paddingTop: "56.25%",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <p
                className={`${styles["label-text"]} design-view`}
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  position: "absolute",
                  top: "35px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                {label}
              </p>
              <a href="javascript:void(0)" className="play-video">
                <i className="ti-control-play"></i>
              </a>
              <iframe
                id="youtube-player"
                width="560"
                height="315"
                src=""
                title="YouTube video player"
                // frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  border: "none",
                  pointerEvents: "none",
                }}
              ></iframe>
              <div className={`${styles["text-center-inner"]}`}>
                <input
                  type="text"
                  placeholder="Ex:https://youtu.be/xxxxxxxxxxxx"
                  className={`js-input-video design-view`}
                  style={{
                    width: "100%",
                    height: "calc(1.5em + 0.75rem + 2px)",
                    padding: "0.375rem 0.75rem",
                    fontSize: "0.875rem",
                    lineHeight: "1.5",
                    color: "#4f5467",
                    backgroundColor: "#fff",
                    backgroundClip: "padding-box",
                    border: "1px solid #e9ecef",
                    borderRadius: "0.25rem",
                  }}
                />
              </div>
            </div>
          ) : null}

          {type === "form" ? (
            <div
              className={`${styles["form-file-upload-inner"]}  view-bg form-contact-bg`}
              style={{
                width: "100%",
                height: "0",
                background: "#f1f1f1",
                border: "1px solid #afafb4",
                paddingTop: "75%",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div
                className={`${styles["label-text"]} design-view`}
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  position: "absolute",
                  top: "35px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <p>{label}</p>
                <p
                  className={`${styles["label-text-small"]}`}
                  style={{
                    fontSize: "14px",
                    fontWeight: "normal",
                    fontStyle: "italic",
                  }}
                >
                  {sublabel}
                </p>
              </div>
              <label
                htmlFor={idBlock}
                className="design-view"
                style={{
                  position: "absolute",
                  top: "120px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 90,
                  cursor: "pointer",
                  color: "#333",
                  fontSize: "20px",
                  padding: "10px 15px",
                  background: "rgba(255, 255, 255, 0.6)",
                  borderRadius: "5px",
                }}
              >
                <i className="fa fa-camera" aria-hidden="true"></i>
              </label>
              <span className={idBlock}>
                <input
                  type="file"
                  name={idBlock}
                  id={idBlock}
                  className="upload-image-set-bg"
                  aria-invalid="false"
                  onChange={uploadToClient}
                  style={{ display: "none" }}
                />
              </span>
              <div
                className={`${styles["form-container"]} form-site-sale`}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "80%",
                  transform: "translateX(-50%) translateY(-50%)",
                }}
              >
                <h4 className="text-center head-title-form">
                  Đăng ký nhận thông tin
                </h4>
                <form id="lead-create-form">
                  <div className="d-flex justify-content-between grid-container mt-3">
                    <div className="w-48 d-flex justify-content-between">
                      <input
                        type="text"
                        placeholder="firstName"
                        name="firstName"
                        id="firstName"
                        className="js-text-length"
                        style={{
                          width: "100%",
                          height: "calc(1.5em + 0.75rem + 2px)",
                          padding: "0.375rem 0.75rem",
                          fontSize: "0.875rem",
                          lineHeight: "1.5",
                          color: "#4f5467",
                          backgroundColor: "#fff",
                          backgroundClip: "padding-box",
                          border: "1px solid #e9ecef",
                          borderRadius: "0.25rem",
                        }}
                      />
                    </div>
                    <div className="w-48">
                      <input
                        type="text"
                        placeholder="lastName"
                        name="lastName"
                        id="lastName"
                        className="js-text-length"
                        style={{
                          width: "100%",
                          height: "calc(1.5em + 0.75rem + 2px)",
                          padding: "0.375rem 0.75rem",
                          fontSize: "0.875rem",
                          lineHeight: "1.5",
                          color: "#4f5467",
                          backgroundColor: "#fff",
                          backgroundClip: "padding-box",
                          border: "1px solid #e9ecef",
                          borderRadius: "0.25rem",
                        }}
                      />
                      <p className="invalid-feedback"></p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between grid-container mt-3">
                    <div className="w-30">
                      <input
                        type="text"
                        placeholder="Phone"
                        name="phoneNumber"
                        id="phoneNumber"
                        className="js-text-number"
                        style={{
                          width: "100%",
                          height: "calc(1.5em + 0.75rem + 2px)",
                          padding: "0.375rem 0.75rem",
                          fontSize: "0.875rem",
                          lineHeight: "1.5",
                          color: "#4f5467",
                          backgroundColor: "#fff",
                          backgroundClip: "padding-box",
                          border: "1px solid #e9ecef",
                          borderRadius: "0.25rem",
                        }}
                      />
                      <p className="invalid-feedback"></p>
                    </div>
                    <div className="w-30">
                      <input
                        type="text"
                        placeholder="Address"
                        style={{
                          width: "100%",
                          height: "calc(1.5em + 0.75rem + 2px)",
                          padding: "0.375rem 0.75rem",
                          fontSize: "0.875rem",
                          lineHeight: "1.5",
                          color: "#4f5467",
                          backgroundColor: "#fff",
                          backgroundClip: "padding-box",
                          border: "1px solid #e9ecef",
                          borderRadius: "0.25rem",
                        }}
                      />
                    </div>
                    <div className="w-30">
                      <input
                        type="text"
                        className="js-text-email"
                        placeholder="Email"
                        id="email"
                        name="email"
                        style={{
                          width: "100%",
                          height: "calc(1.5em + 0.75rem + 2px)",
                          padding: "0.375rem 0.75rem",
                          fontSize: "0.875rem",
                          lineHeight: "1.5",
                          color: "#4f5467",
                          backgroundColor: "#fff",
                          backgroundClip: "padding-box",
                          border: "1px solid #e9ecef",
                          borderRadius: "0.25rem",
                        }}
                      />
                      <p className="invalid-feedback"></p>
                    </div>
                  </div>
                  <div className="grid-container mt-3">
                    <textarea
                      className="js-area-length"
                      name="note"
                      id="note"
                      style={{
                        width: "100%",
                        height: "250px",
                        padding: "0.375rem 0.75rem",
                        fontSize: "0.875rem",
                        lineHeight: "1.5",
                        color: "#4f5467",
                        backgroundColor: "#fff",
                        backgroundClip: "padding-box",
                        border: "1px solid #e9ecef",
                        borderRadius: "0.25rem",
                      }}
                    ></textarea>
                    <p className="invalid-feedback"></p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center grid-container mt-3">
                    <button
                      type="button"
                      className="btn btn-info d-none d-block w-48 js-create-lead"
                      id="create-lead-button"
                    >
                      Send
                    </button>
                    <button
                      type="button"
                      className="btn btn-info d-none d-block w-48"
                      data-action={`${process.env.REACT_APP_API_SERVER}/crm/leads/create-by-token`}
                    >
                      Start over
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : null}
        </div>
      </Fragment>
    </div>
  );
};

export default LayoutCreator;
