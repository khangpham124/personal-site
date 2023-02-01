import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import toastr from "toastr";
import InputField from "../../components/ModalCreate/InputField";
import styles from "./CreateAccount.module.css";

import { usersAPI } from "../../services/identity/users";
import { authenticateAPI } from "../../services/authorized-api";
import { useRouter } from "next/router";

const servicesUsersAPI = new usersAPI();
const servicesAuthenticateAPI = new authenticateAPI();
const CreateAccountForm: React.FC = () => {
  const validate = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const validateExisted = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
  });

  const { query } = useRouter();
  const [existedEmail, setExistedEmail] = useState(false);
  useEffect(() => {
    servicesAuthenticateAPI
      .checkExistedEmail(String(query.email))
      .then((res) => {
        if (res.data === true) {
          setExistedEmail(res.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  const handleCreateRole = (values: any) => {
    const token = query.token;
    let body;
    if (existedEmail === false) {
      body = values;
    } else {
      body = {
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
      };
    }

    servicesAuthenticateAPI
      .confirmInviteNewUser(body, String(token))
      .then((res) => {
        toastr.success("Create successfully");
        setTimeout(() => {
          window.location.href = `/`;
        }, 3000);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className={styles["create-account"]}>
      <h2 className={styles["create-account-title"]}>Create Your Account</h2>
      <Formik
        initialValues={{
          email: query.email,
          firstName: "",
          lastName: "",
          password: "",
        }}
        validationSchema={existedEmail === false ? validate : validateExisted}
        enableReinitialize={true}
        onSubmit={handleCreateRole}
      >
        {() => (
          <div>
            <Form>
              <div className="row mt-4">
                <div className="col-12">
                  <InputField
                    label="Email"
                    id="email"
                    name="email"
                    type="text"
                    disabled
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-6">
                  <InputField label="First name" name="firstName" type="text" />
                </div>
                <div className="col-6">
                  <InputField label="Last name" name="lastName" type="text" />
                </div>
              </div>
              {existedEmail === false ? (
                <div className="row mt-4">
                  <div className="col-12">
                    <InputField
                      label="Password"
                      name="password"
                      type="password"
                    />
                  </div>
                </div>
              ) : null}
              <div className="text-center mt-3">
                <button className="btn btn-dark" type="reset">
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
    </div>
  );
};

export default CreateAccountForm;
