import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import toastr from "toastr";
import Router from 'next/router'
import Modal from "../../components/ModalCreate";
import InputField from "../../components/ModalCreate/InputField";
import TextAreaField from "../../components/ModalCreate/TextareaField";

type Props = {
  showModal : boolean;
  setShowModal : Function;
}

const NewRoleForm: React.FC<Props> = ({showModal, setShowModal}) => {
  const validate = Yup.object({
    roleName: Yup.string()
      .max(100, "Role name must be at most 100 characters")
      .required("Required"),
      description: Yup.string()
      .max(500, "Description must be at most 500 characters")
      .required("Required"),
  });

  const handleCreateRole = (values) => {
    toastr.success("Create successfully");
    Router.push(`/role/${values.roleName}`)
  };

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={() => setShowModal(false)}
      modal_name="CREATE A NEW ROLE"
      label="Name"
    >
      <Formik
        initialValues={{
          roleName: "",
          description: ""
        }}
        validationSchema={validate}
        onSubmit={handleCreateRole}
      >
        {() => (
          <div>
            <Form>
              <div className="row mt-2">
                <div className="col-12">
                  <InputField
                    label="Role name"
                    name="roleName"
                    type="text"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12">
                  <TextAreaField
                    label="Description"
                    name="description"
                    type="text"
                  />
                </div>
              </div>
              <div className="text-center mt-3">
                <button className="btn btn-dark" type="reset" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button className="btn btn-danger ml-3" type="submit">
                  Create
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </Modal>
  );
};

export default NewRoleForm;
