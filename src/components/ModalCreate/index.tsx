import React from "react";
import { ReactNode } from "react";

import Modal from "react-modal";
import styles from "./ModalCreate.module.css";

type Props = {
  children?: ReactNode;
  isOpen: boolean;
  onRequestClose: any;
  modal_name: string;
  label: string;
};

const ModalCreate = (props: Props) => {
  const { children, isOpen, onRequestClose, modal_name, label } = props;

  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal"
      className={{
        base: styles["modal-base"],
        afterOpen: styles["modal-base_after-open"],
        beforeClose: styles["modal-base_before-close"],
      }}
      overlayClassName={{
        base: styles["overlay-base"],
        afterOpen: styles["overlay-base_after-open"],
        beforeClose: styles["overlay-base_before-close"],
      }}
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={500}
    >
      <div className={styles["modal-dialog"]}>
        <div className="modal-content">
          <div className="modal-header">
            <h4 className={styles["modal-title"]}>{modal_name}</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-hidden="true"
              onClick={onRequestClose}
            >
              ×
            </button>
          </div>
          <div className={styles["modal-body"]}>{children}</div>
          {/* <div className="modal-footer">
            <button
              type="button"
              className="btn btn-default waves-effect"
              data-dismiss="modal"
              onClick={onRequestClose}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-danger waves-effect waves-light"
            >
              Save changes
            </button>
          </div> */}
        </div>
      </div>
    </Modal>
  );
};

export default ModalCreate;
