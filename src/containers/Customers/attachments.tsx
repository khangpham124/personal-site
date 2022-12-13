import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { FileUploader } from "react-drag-drop-files";
import { useTranslation } from "react-i18next";
import { postLeadAttachmentByIDAction } from "src/state-management/actions/leads";
import toastr from "toastr";
import { LeadAPI } from "../../services/identity/lead-api";
import Cookies from "js-cookie";
import { baseUrl } from "src/services/identity";

const servicesLeadAPI = new LeadAPI();

type TLeadsContainerProps = {};

const AttachmentsContainer: React.FC<TLeadsContainerProps> = ({}) => {
  const { t: translator } = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();
  const { leadDetail: leadId } = router.query;

  // const fileTypes = ["JPG", "PNG", "GIF"];
  const [file, setFile] = useState<any[]>([]);
  const [listAttachments, setlistAttachments] = useState<any[]>([]);

  const postLeadAttachment = (id: string, file: any) => {
    dispatch(postLeadAttachmentByIDAction.request(id, { file }));
  };

  useEffect(() => {
    servicesLeadAPI.getDetailLead(leadId).then((items) => {
      setlistAttachments(items?.attachments ? items?.attachments : []);
    });
  }, [leadId]);

  function formatDate(date: string) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join("-");
  }
  const handleChange = (file: any) => {
    // const attachments = file.target;
    // let fileName = file.name;
    // let fileSize = file.size;
    // let fileDate = formatDate(file.lastModifiedDate);
    // let fileNameArr = fileName.split(".");
    // let fileType = fileNameArr[fileNameArr.length - 1];
    // let item = {
    //   name: fileName,
    //   fileSize: fileSize,
    //   fileDate: fileDate,
    //   fileType: fileType,
    // };
    // listAttachments.push(item);
    // setFile(file);
    // setlistAttachments(listAttachments);
    // setErrUpload("");
    // const bodyForm = new FormData();
    // bodyForm.append("file", file);

    // axios
    //   .post(
    //     `http://103.153.74.248:31240/api/listing/leads/attachment/${leadId}`,
    //     bodyForm,
    //     {
    //       headers: {
    //         Authorization: `Bearer `,
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     servicesLeadAPI.getDetailLead(leadId);
    //   })
    //   .catch(function (error) {
    //     toastr.error("System has failed");
    //   });
    // postLeadAttachment(String(leadId), bodyForm);
    const attachments = file.target;

    let fileName = file.name;
    let fileSize = file.size;
    if (fileSize < 20480000) {
      let fileDate = formatDate(file.lastModifiedDate);
      let fileNameArr = fileName.split(".");
      let fileType = fileNameArr[fileNameArr.length - 1];
      let item = {
        name: fileName,
        fileSize: fileSize,
        fileDate: fileDate,
        fileType: fileType,
      };
      listAttachments.push(item);
      setFile(file);
      setlistAttachments(listAttachments);
      setErrUpload("");
      const bodyForm = new FormData();
      bodyForm.append("file", file);
      // for (var pair of bodyForm.entries()) {
      //   console.log("bodyForm", pair[0] + ", " + pair[1]);
      // }
      axios
        .post(`${baseUrl}/crm/customer/attachment/${leadId}`, bodyForm, {
          headers: {
            Authorization: `Bearer ${Cookies.get("crm_token")}`,
          },
        })
        .then((response) => {
          servicesLeadAPI.getDetailLead(leadId).then((items) => {
            setlistAttachments(items?.attachments);
          });
        })
        .catch(function (error) {
          toastr.error("System has failed");
        });
    } else {
      setErrUpload("Uploaded files must be smaller than 20mb");
    }
  };

  const [errUpload, setErrUpload] = useState("");

  const onSizeError = (file: any) => {
    setErrUpload("Uploaded files must be smaller than 20mb");
  };

  const removeAttachment = (index: number) => {
    let list = [...listAttachments];
    list.splice(Number(index), 1);
    setlistAttachments(list);
    setFile(listAttachments);
  };

  return (
    <div className="tab-pane" id="attachments" role="tabpanel">
      <div className="card-body">
        <div className="dropify-wrapper">
          <FileUploader
            handleChange={handleChange}
            name="file"
            maxSize={20}
            children={
              <p className="d-flex align-items-center">
                <i className="ti-cloud-up fz-20"></i>
                {`${translator("lead_page.text_upload")}`}
              </p>
            }
            onSizeError={onSizeError}
          />
        </div>
        <p className="text-err mt-3">{errUpload}</p>
        <div className="d-flex flex-wrap justify-content-between">
          {listAttachments.length > 0
            ? listAttachments.map((file, index) => (
                <div
                  key={index}
                  className="w-48 border p-3 mt-4 d-flex align-items-center justify-content-between"
                >
                  <div className="w-80 d-flex align-items-center">
                    <i className="ti-zip fz-30"></i>
                    <div className="pd-left-15">
                      <div className="">{file.name}</div>
                      <div className="text-note mt-1 fz-12">
                        {file.fileType} {file.fileSize}kb {file.fileDate}
                      </div>
                    </div>
                  </div>

                  <div className="w-15 d-flex align-items-center">
                    <i
                      className="ti-trash icon-cursor"
                      onClick={() => removeAttachment(index)}
                    ></i>
                    <i className="ti-download ml-3 mr-3"></i>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default AttachmentsContainer;
