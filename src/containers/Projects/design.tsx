import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import LayoutCreator from "../../components/LayoutCreator/";
import { TRootState } from "src/state-management/reducers";
import $ from "jquery";
import { createProjectDesignAction } from "src/state-management/actions/projects";
import toastr from "toastr";
import ReactDragListView from "react-drag-listview";

const DesignContainer: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { projectDetail: projectId } = router.query;
  const projectDetail = useSelector(
    (state: TRootState) => state.projects.detail
  );

  const projectDesignDetail = useSelector(
    (state: TRootState) => state.projects.designDetail
  );

  // const hasDeisgn = projectDetail.design;

  const [templateSite, settemplateSite] = useState("classic");

  return (
    <div className="card-body tab-pane" id="design">
      <Formik
        initialValues={{
          design: "",
          designType: projectDetail?.designType,
        }}
        onSubmit={(values) => {
          const body = {
            design: $("#designHtml").html(),
            thumbnail: $("#thumbnailImg").attr("data-img"),
          };
          dispatch(
            createProjectDesignAction.request(projectId as string, body, () => {
              toastr.success("Save successfully");
            })
          );
        }}
      >
        {(props) => {
          const { handleBlur, handleChange } = props;
          settemplateSite(projectDetail?.designType);
          return (
            <Form>
              <div className="d-flex align-items-center">
                <h4 className="text-themecolor">Design</h4>
                <button
                  type="submit"
                  className="btn btn-info d-none d-lg-block m-l-15"
                >
                  <i className="ti-palette mr-3"></i> Update Design
                </button>

                <button
                  type="button"
                  className={`btn btn-info d-none d-lg-block m-l-15
                        ${templateSite === "classic"
                      ? `js-preview`
                      : `js-preview-modern`
                    }
                        `}
                  data-toggle="modal"
                  data-target="#responsive-modal"
                >
                  <i className="fa fa-eye mr-3" aria-hidden="true"></i> Preview
                  site
                </button>

                <button
                  type="button"
                  className="btn btn-info d-none d-lg-block m-l-15 js-expand"
                >
                  <i className="fa fa-expand mr-3"></i>
                  Expand All
                </button>
                <button
                  type="button"
                  className="btn btn-info d-none d-lg-block m-l-15 js-collapse"
                >
                  <i className="fa fa-compress mr-3"></i>
                  Collapse All
                </button>
              </div>
              {templateSite === "classic" ? (
                <div>
                  {projectDesignDetail?.design ? (
                    <div
                      id="designHtml"
                      className="mt-5"
                      dangerouslySetInnerHTML={{
                        __html: projectDesignDetail?.design,
                      }}
                    ></div>
                  ) : (
                    <div id="designHtml" className="mt-5">
                      <span className="js-close-preview">
                        <i className="fa fa-times" aria-hidden="true"></i>
                      </span>

                      <LayoutCreator
                        idBlock="mainBlock"
                        type="main-block"
                        label="Main photo"
                        sublabel="3840x1920"
                      />
                      <div className="d-flex justify-content-between grid-container mt-5">
                        <div className="w-48">
                          <LayoutCreator
                            idBlock="header1"
                            type="text"
                            label="Header 1"
                            enableRemove
                            headingText
                            headingH1={true}
                          />
                        </div>

                        <div className="w-48">
                          <LayoutCreator
                            idBlock="mess1"
                            type="textarea"
                            label="Message 1"
                            enableRemove
                            shadowBox
                          />
                        </div>
                      </div>
                      <div className="mt-5 grid-container">
                        <LayoutCreator
                          idBlock="photo2"
                          type="only-background"
                          label="Photo 2"
                          enableRemove
                          rectangleBlock={false}
                        />
                      </div>
                      <div className="mt-5 grid-container">
                        <LayoutCreator
                          idBlock="mess2"
                          type="textarea"
                          label="Message 2"
                          enableRemove
                          shadowBox={false}
                        />
                      </div>
                      <div className="mt-5">
                        <LayoutCreator
                          idBlock="photo3"
                          type="only-background"
                          label="Photo 3"
                          enableRemove
                          rectangleBlock={false}
                        />
                      </div>
                      <div className="mt-5 grid-container">
                        <LayoutCreator
                          idBlock="header3"
                          type="textarea"
                          label="Header 3"
                          enableRemove
                        />
                      </div>

                      <div className="mt-5 grid-container">
                        <LayoutCreator
                          idBlock="photo4"
                          type="only-background"
                          label="Photo 4"
                          enableRemove
                          rectangleBlock={false}
                        />
                      </div>

                      <div className="mt-5 grid-container">
                        <LayoutCreator
                          idBlock="mess3"
                          type="textarea"
                          label="Message 3"
                          enableRemove
                        />
                      </div>

                      <div className="mt-5">
                        <LayoutCreator
                          idBlock="photo5"
                          type="only-background"
                          label="Photo 5"
                          enableRemove
                          rectangleBlock={false}
                        />
                      </div>

                      <div className="d-flex justify-content-between grid-container mt-5">
                        <div className="w-35">
                          <LayoutCreator
                            idBlock="ultility1"
                            type="only-background"
                            label="Square1"
                            enableRemove
                            squareBlock
                          />
                        </div>
                        <div className="w-625">
                          <LayoutCreator
                            idBlock="ultility2"
                            type="only-background"
                            label="Rec2"
                            enableRemove
                            rectangleBlock
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between grid-container mt-4">
                        <div className="w-625">
                          <LayoutCreator
                            idBlock="ultility3"
                            type="only-background"
                            label="Rec3"
                            enableRemove
                            rectangleBlock
                          />
                        </div>
                        <div className="w-35">
                          <LayoutCreator
                            idBlock="ultility4"
                            type="only-background"
                            label="Square4"
                            enableRemove
                            squareBlock
                          />
                        </div>
                      </div>

                      <div className="d-flex justify-content-between grid-container mt-4">
                        <div className="w-30">
                          <LayoutCreator
                            idBlock="logo"
                            type="only-background"
                            label="logo"
                            enableRemove
                            logoBlock
                          />
                        </div>
                        <div className="w-67">
                          <LayoutCreator
                            idBlock="mess4"
                            type="textarea"
                            label="Message 4"
                            enableRemove
                          />
                        </div>
                      </div>

                      <div className="mt-5 grid-container">
                        <LayoutCreator
                          type="video"
                          idBlock="photo5"
                          label="YouTube video player"
                          enableRemove
                        />
                      </div>

                      <div className="mt-5">
                        <LayoutCreator
                          type="form"
                          idBlock="form"
                          label="Form"
                          sublabel="3840x1920"
                          enableRemove
                        />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="wrapper-scroll">
                  {projectDesignDetail?.design ? (
                    <div
                      id="designHtml"
                      className="mt-5 main-scroll onepage-wrapper"
                      dangerouslySetInnerHTML={{
                        __html: projectDesignDetail?.design,
                      }}
                    ></div>
                  ) : (
                    <div
                      id="designHtml"
                      className="mt-5 main-scroll onepage-wrapper"
                    >
                      <section className="page1 js-component">
                        <span className="js-close-preview">
                          <i className="fa fa-times" aria-hidden="true"></i>
                        </span>
                        <span className="js-drag-component drag-area">
                          <i className="fa fa-bars  " aria-hidden="true"></i>
                        </span>
                        <div className="mt-5 only-edit-view d-flex js-toggle-bar toggle-bar">
                          <LayoutCreator
                            idBlock="title-block-1"
                            type="title-block"
                            label="Main block"
                            headingText
                            placeholderText="Title for main block"
                            thumbnail={projectDetail?.thumbnail}
                          />
                        </div>
                        <div className="page_container hide-toggle">
                          <LayoutCreator
                            idBlock="mainBlock"
                            type="main-block"
                            label="Main photo"
                            sublabel="3840x1920"
                            centerText
                            projectId={String(router.query.projectDetail)}
                          />
                        </div>
                      </section>

                      <section className="page2 js-component">
                        <span className="js-close-preview">
                          <i className="fa fa-times" aria-hidden="true"></i>
                        </span>
                        <span className="js-remove-component">
                          <i className="fa fa-trash " aria-hidden="true"></i>
                        </span>
                        <span className="js-drag-component drag-area">
                          <i className="fa fa-bars  " aria-hidden="true"></i>
                        </span>
                        <div className="mt-5 only-edit-view d-flex js-toggle-bar toggle-bar">
                          <LayoutCreator
                            idBlock="title-block-2"
                            type="title-block"
                            label="Youtube block"
                            headingText
                            placeholderText="Title for youtube block"
                          />
                        </div>
                        <div className="page_container hide-toggle">
                          <LayoutCreator
                            type="video"
                            idBlock="photo5"
                            label="YouTube video player"
                          // enableRemove
                          />
                        </div>
                      </section>

                      <section className="page3 center-content-section js-component">
                        <span className="js-close-preview">
                          <i className="fa fa-times" aria-hidden="true"></i>
                        </span>
                        <span className="js-remove-component">
                          <i className="fa fa-trash " aria-hidden="true"></i>
                        </span>
                        <span className="js-drag-component drag-area">
                          <i className="fa fa-bars  " aria-hidden="true"></i>
                        </span>
                        <div className="mt-5 only-edit-view d-flex js-toggle-bar toggle-bar">
                          <LayoutCreator
                            idBlock="title-block-3"
                            type="title-block"
                            label="Location block"
                            headingText
                            placeholderText="Title for location block"
                          />
                        </div>
                        <div className="page_container grid-container hide-toggle">
                          <div className="d-flex mt-5 justify-content-between">
                            <div className="w-30 pr-3">
                              <LayoutCreator
                                idBlock="sub-title-location"
                                type="text"
                                label="Sub Title Location"
                                enableRemove
                                headingText
                              />
                              <div className="mt-3">
                                <LayoutCreator
                                  idBlock="desc-block-location"
                                  type="textarea"
                                  label="Location Description"
                                  enableRemove
                                  headingText
                                />
                              </div>
                            </div>
                            <div className="w-70">
                              <LayoutCreator
                                idBlock="image-location"
                                type="only-background"
                                label="Image Location"
                                enableRemove
                                rectangleBlock={false}
                              />
                            </div>
                          </div>
                        </div>
                      </section>

                      <section className="page4 js-component">
                        <span className="js-close-preview">
                          <i className="fa fa-times" aria-hidden="true"></i>
                        </span>
                        <span className="js-remove-component">
                          <i className="fa fa-trash " aria-hidden="true"></i>
                        </span>
                        <span className="js-drag-component drag-area">
                          <i className="fa fa-bars  " aria-hidden="true"></i>
                        </span>
                        <div className="page_container">
                          <div className="mt-5 only-edit-view  d-flex js-toggle-bar-multi toggle-bar">
                            <LayoutCreator
                              idBlock="title-block-4"
                              type="title-block"
                              label="Title Block Utility"
                              headingText
                              placeholderText="Title for ultility block"
                            />
                          </div>
                          <div className="popup js-popup">
                            <a
                              href="javascript:void(0)"
                              className="js-close-popup"
                            >
                              <i className="ti-close"></i>
                            </a>
                            <div
                              id="ultility-content"
                              className="popup-content"
                            ></div>
                          </div>
                          <div className="hide-toggle">
                            <div className="d-flex mt-5 justify-content-end view-no-margin">
                              <div className="ultility-block">
                                <div className="d-flex justify-content-between">
                                  <div className="w-50 pr-3">
                                    <LayoutCreator
                                      idBlock="sub-title-ultility"
                                      type="text"
                                      label="Sub Title Utility"
                                      enableRemove
                                      headingText
                                    />
                                    <div className="mt-3 text-overflow">
                                      <LayoutCreator
                                        idBlock="desc-ultility"
                                        type="textarea"
                                        label="Utility"
                                        enableRemove
                                      />
                                      <a
                                        href="javascript:void(0)"
                                        className="js-read-more"
                                      >
                                        Read more
                                      </a>
                                    </div>
                                  </div>
                                  <div className="w-50 half-screen-height">
                                    <LayoutCreator
                                      idBlock="ultility-photo-1"
                                      type="only-background"
                                      label="Utility Photo 1"
                                      enableRemove
                                      rectangleBlock={false}
                                    />
                                  </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                  <div className="w-50 half-screen-height">
                                    <LayoutCreator
                                      idBlock="ultility-photo-3"
                                      type="only-background"
                                      label="Utility Photo 2"
                                      enableRemove
                                      rectangleBlock={false}
                                    />
                                  </div>
                                  <div className="w-50 half-screen-height">
                                    <LayoutCreator
                                      idBlock="ultility-photo-2"
                                      type="only-background"
                                      label="Utility Photo 3"
                                      enableRemove
                                      rectangleBlock={false}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section className="page5 js-component">
                        <span className="js-close-preview">
                          <i className="fa fa-times" aria-hidden="true"></i>
                        </span>
                        <span className="js-remove-component">
                          <i className="fa fa-trash " aria-hidden="true"></i>
                        </span>
                        <span className="js-drag-component drag-area">
                          <i className="fa fa-bars  " aria-hidden="true"></i>
                        </span>
                        <div className="page_container">
                          <div className="mt-5 only-edit-view d-flex js-toggle-bar toggle-bar">
                            <LayoutCreator
                              idBlock="title-block-5"
                              type="title-block"
                              label="Map block"
                              headingText
                              placeholderText="Title for map block"
                            />
                          </div>

                          <div className="wrap-slider hide-toggle">
                            <ul className="slider-room">
                              <li className="mt-4 slider-room-item js-slider-rmvable">
                                <LayoutCreator
                                  idBlock="general-photo-1"
                                  type="only-background"
                                  label="Photo 1"
                                  enableRemoveItemSide
                                  rectangleBlock={false}
                                />
                              </li>
                              <li className="mt-4 slider-room-item js-slider-rmvable">
                                <LayoutCreator
                                  idBlock="general-photo-2"
                                  type="only-background"
                                  label="Photo 2"
                                  enableRemoveItemSide
                                  rectangleBlock={false}
                                />
                              </li>
                              <li className="mt-4 slider-room-item js-slider-rmvable">
                                <LayoutCreator
                                  idBlock="general-photo-3"
                                  type="only-background"
                                  label="Photo 3"
                                  enableRemoveItemSide
                                  rectangleBlock={false}
                                />
                              </li>
                              <li className="mt-4 slider-room-item js-slider-rmvable">
                                <LayoutCreator
                                  idBlock="general-photo-4"
                                  type="only-background"
                                  label="Photo 4"
                                  enableRemoveItemSide
                                  rectangleBlock={false}
                                />
                              </li>
                              <li className="mt-4 slider-room-item js-slider-rmvable">
                                <LayoutCreator
                                  idBlock="general-photo-5"
                                  type="only-background"
                                  label="Photo 5"
                                  enableRemoveItemSide
                                  rectangleBlock={false}
                                />
                              </li>
                              <li className="mt-4 slider-room-item js-slider-rmvable">
                                <LayoutCreator
                                  idBlock="general-photo-6"
                                  type="only-background"
                                  label="Photo 6"
                                  enableRemoveItemSide
                                  rectangleBlock={false}
                                />
                              </li>
                            </ul>

                            <div className="d-flex justify-content-between grid-container mt-4">
                              <div className="w-30">
                                <LayoutCreator
                                  idBlock="title-large-general"
                                  type="text"
                                  label="Title General Utility"
                                  enableRemove
                                  headingText
                                />
                              </div>
                              <div className="w-65">
                                <LayoutCreator
                                  idBlock="desc-general"
                                  type="textarea"
                                  label="Utility"
                                  enableRemove
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section className="page6 js-component">
                        <span className="js-close-preview">
                          <i className="fa fa-times" aria-hidden="true"></i>
                        </span>
                        <span className="js-remove-component">
                          <i className="fa fa-trash " aria-hidden="true"></i>
                        </span>
                        <span className="js-drag-component drag-area">
                          <i className="fa fa-bars  " aria-hidden="true"></i>
                        </span>
                        <div className="page_container">
                          <div className="mt-5 only-edit-view d-flex js-toggle-bar-multi toggle-bar">
                            <LayoutCreator
                              idBlock="title-block-6"
                              type="title-block"
                              label="Gallery block"
                              headingText
                              placeholderText="Title for gallery block"
                            />
                          </div>
                          <div id="block-privew">
                            <a
                              href=""
                              className="image-popup-vertical-fit"
                              id="image-popup-vertical-fit"
                            >
                              <img src="" id="block-privew-frame" />
                            </a>
                          </div>
                          <div className="wrap-slider hide-toggle">
                            <ul className="slide-image">
                              <li className="mt-4 slide-image-item js-slider-rmvable">
                                <LayoutCreator
                                  idBlock="caption_gallery_1"
                                  type="text"
                                  label="Caption image 1"
                                  enableRemoveItemSide
                                  headingText
                                />
                                <LayoutCreator
                                  idBlock="photo_gallery_1"
                                  type="only-background"
                                  label="Photo 1"
                                  enableRemoveItemSide
                                  rectangleBlock={false}
                                  cloneImg
                                />
                              </li>
                              <li className="mt-4 slide-image-item js-slider-rmvable">
                                <LayoutCreator
                                  idBlock="caption_gallery_2"
                                  type="text"
                                  label="Caption image 2"
                                  enableRemoveItemSide
                                  headingText
                                />
                                <LayoutCreator
                                  idBlock="photo_gallery_2"
                                  type="only-background"
                                  label="Photo 2"
                                  enableRemoveItemSide
                                  rectangleBlock={false}
                                  cloneImg
                                />
                              </li>
                              <li className="mt-4 slide-image-item js-slider-rmvable">
                                <LayoutCreator
                                  idBlock="caption_gallery_3"
                                  type="text"
                                  label="Caption image 3"
                                  enableRemoveItemSide
                                  headingText
                                />
                                <LayoutCreator
                                  idBlock="photo_gallery_3"
                                  type="only-background"
                                  label="Photo 3"
                                  enableRemoveItemSide
                                  rectangleBlock={false}
                                  cloneImg
                                />
                              </li>
                              <li className="mt-4 slide-image-item js-slider-rmvable">
                                <LayoutCreator
                                  idBlock="caption_gallery_4"
                                  type="text"
                                  label="Caption image 4"
                                  enableRemoveItemSide
                                  headingText
                                />
                                <LayoutCreator
                                  idBlock="photo_gallery_4"
                                  type="only-background"
                                  label="Photo 4"
                                  enableRemoveItemSide
                                  rectangleBlock={false}
                                  cloneImg
                                />
                              </li>
                              <li className="mt-4 slide-image-item js-slider-rmvable">
                                <LayoutCreator
                                  idBlock="caption_gallery_5"
                                  type="text"
                                  label="Caption image 5"
                                  enableRemoveItemSide
                                  headingText
                                />
                                <LayoutCreator
                                  idBlock="photo_gallery_5"
                                  type="only-background"
                                  label="Photo 5"
                                  enableRemoveItemSide
                                  rectangleBlock={false}
                                  cloneImg
                                />
                              </li>
                              <li className="mt-4 slide-image-item js-slider-rmvable">
                                <LayoutCreator
                                  idBlock="caption_gallery_6"
                                  type="text"
                                  label="Caption image 6"
                                  enableRemoveItemSide
                                  headingText
                                />
                                <LayoutCreator
                                  idBlock="photo_gallery_6"
                                  type="only-background"
                                  label="Photo 6"
                                  enableRemoveItemSide
                                  rectangleBlock={false}
                                  cloneImg
                                />
                              </li>
                            </ul>

                            <ul className="slider-nav"></ul>
                          </div>
                        </div>
                      </section>

                      <section className="page7 section-news js-component">
                        <span className="js-close-preview">
                          <i className="fa fa-times" aria-hidden="true"></i>
                        </span>
                        <span className="js-remove-component">
                          <i className="fa fa-trash " aria-hidden="true"></i>
                        </span>
                        <span className="js-drag-component drag-area">
                          <i className="fa fa-bars  " aria-hidden="true"></i>
                        </span>
                        <div className="page_container">
                          <div className="mt-5 only-edit-view d-flex js-toggle-bar toggle-bar">
                            <LayoutCreator
                              idBlock="title-block-7"
                              type="title-block"
                              label="News block"
                              headingText
                              placeholderText="Title for news block"
                            />
                          </div>
                          <div className="hide-toggle">
                            <div className="d-flex mt-5 justify-content-between align-items-center grid-container">
                              <div className="w-48">
                                <LayoutCreator
                                  idBlock="photo_news_1"
                                  type="only-background"
                                  label="Photo 1"
                                  enableRemove
                                  rectangleBlock={false}
                                />
                                <LayoutCreator
                                  idBlock="title_news_1"
                                  type="link-post"
                                  label="title news 1"
                                  enableRemove
                                  headingText
                                />
                              </div>
                              <div className="w-48">
                                <div>
                                  <LayoutCreator
                                    idBlock="photo_news_2"
                                    type="only-background"
                                    label="Photo 4"
                                    enableRemove
                                    rectangleBlock={false}
                                  />
                                  <LayoutCreator
                                    idBlock="title_news_2"
                                    type="link-post"
                                    label="title news 2"
                                    enableRemove
                                    headingText
                                  />
                                </div>

                                <div>
                                  <LayoutCreator
                                    idBlock="photo_news_3"
                                    type="only-background"
                                    label="Photo 4"
                                    enableRemove
                                    rectangleBlock={false}
                                  />
                                  <LayoutCreator
                                    idBlock="title_news_3"
                                    type="link-post"
                                    label="title news 3"
                                    enableRemove
                                    headingText
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section className="page8 js-component">
                        <span className="js-close-preview">
                          <i className="fa fa-times" aria-hidden="true"></i>
                        </span>
                        <span className="js-remove-component">
                          <i className="fa fa-trash " aria-hidden="true"></i>
                        </span>
                        <span className="js-drag-component drag-area">
                          <i className="fa fa-bars  " aria-hidden="true"></i>
                        </span>
                        <div className="page_container">
                          <div className="mt-5 only-edit-view d-flex js-toggle-bar toggle-bar">
                            <LayoutCreator
                              idBlock="title-block-8"
                              type="title-block"
                              label="Form contact block"
                              headingText
                              placeholderText="Title for contact block"
                            />
                          </div>
                          <div className="mt-5 hide-toggle">
                            <LayoutCreator
                              type="form"
                              idBlock="form"
                              label="Form"
                              sublabel="3840x1920"
                              enableRemove
                            />
                          </div>
                        </div>
                      </section>
                    </div>
                  )
                  }
                </div >
              )}
            </Form >
          );
        }}
      </Formik >
    </div >
  );
};

export default DesignContainer;
