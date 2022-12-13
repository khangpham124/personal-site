import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import { useTranslation } from "react-i18next";
import CommentsAPI from "src/services/identity/comments";
import InputField from "../../components/ModalCreate/InputField";
import * as Yup from "yup";

interface Props {
  customerName: string;
}
const CommentTab: React.FC<Props> = ({ customerName }) => {
  const { t: translator } = useTranslation();
  const router = useRouter();
  const { customerDetail: customerId } = router.query;
  const [commentList, setCommentList] = useState<any[]>([]);

  const validateComment = Yup.object({
    comment: Yup.string()
      .max(500, "Maximum 500 characters")
      .required("Required"),
  });

  const handleGetCommentList = useCallback(() => {
    CommentsAPI.fetchCommentsByCustomerId(String(customerId), 1, 1000000).then(
      (res) => {
        if (res?.items?.length > 0) {
          setCommentList(res.items);
        }
      }
    );
  }, [customerId]);

  const handleComment = (values, actions) => {
    CommentsAPI.createCommentByCustomer(
      String(customerId),
      values.comment
    ).then(() => {
      handleGetCommentList();
      actions.resetForm({
        values: {
          comment: "",
        },
      });
    });
  };

  useEffect(() => {
    if (customerId) {
      handleGetCommentList();
    }
  }, [customerId]);

  return (
    <div className="tab-pane active" id="comment" role="tabpanel">
      <Formik
        initialValues={{
          comment: "",
        }}
        validationSchema={validateComment}
        onSubmit={handleComment}
        enableReinitialize={true}
      >
        {(formik) => (
          <Form>
            <div
              className="d-flex align-items-center my-4"
              style={{ justifyContent: "space-between" }}
            >
              <InputField
                placeholder={translator("customer_page.text_share_an_update")}
                name="comment"
                type="text"
                style={{ width: "300px" }}
              />
              <button
                className="btn btn-success"
                type="submit"
                style={{ whiteSpace: "nowrap", height: "38px", width: "100px" }}
              >
                {translator("customer_page.text_share")}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      {commentList.length > 0 &&
        commentList.map((item, index) => (
          <div>
            <div>{customerName}</div>
            <div style={{ color: "gray" }}>
              {new Date(item.createdAt).toTimeString().substring(0, 8)}{" "}
              {new Date(item.createdAt).toDateString()}
            </div>
            <div className="mb-4">
              {translator("customer_page.text_said")}:{" "}
              <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                {item.content}
              </span>
            </div>
            {index !== commentList.length - 1 && (
              <div
                className="mb-1"
                style={{ borderBottom: "1px solid gray" }}
              ></div>
            )}
          </div>
        ))}
    </div>
  );
};

export default CommentTab;
