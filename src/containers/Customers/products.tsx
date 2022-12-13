import { useCallback, useEffect, useState } from "react";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import { EPaginate } from "utils/types";
import ServiceCustomersAPI from "src/services/identity/customers";
import ServiceProductAPI from "src/services/identity/products";
import ServiceProjectAPI from "src/services/identity/projects";
import Modal from "../../components/ModalCreate";
import SelectField from "../../components/ModalCreate/SelectField";
import CreateProductForm from "../Products/createProductForm";
import Cookies from "js-cookie";
import toastr from "toastr";

type Props = {};

const ProductsTab: React.FC<Props> = ({}) => {
  const companyID = Cookies.get("companyID");
  const { t: translator } = useTranslation();
  const router = useRouter();
  const { customerDetail: customerId } = router.query;
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [productList, setProductList] = useState<any>([]);
  const [productInterestingList, setProductInterestingList] = useState<any>([]);
  const [productSelected, setProductSelected] = useState<any>("");
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState<any>(null);

  const getInterestingProductList = useCallback(() => {
    if (customerId) {
      ServiceCustomersAPI.fetchInterestingProductsByCustomerId(
        String(customerId)
      ).then((res) => {
        setData(res);
        if (res?.items?.length > 0) {
          setProductInterestingList(res.items);
        }
      });
    }
  }, [customerId]);

  const handleRemoveInterestingProductsByCustomerId = useCallback(
    (productId: string) => {
      if (customerId) {
        ServiceCustomersAPI.deleteInterestingProductsByCustomerId(
          String(customerId),
          productId
        ).then(() => {
          // getInterestingProductList();
          toastr.success("Setup successfully");
          ServiceCustomersAPI.fetchInterestingProductsByCustomerId(
            String(customerId)
          ).then((res) => {
            setProductInterestingList(res.items);
          });
        });
      }
    },
    [customerId]
  );

  const handleAddProduct = useCallback(
    (values) => {
      if (customerId) {
        ServiceCustomersAPI.addInterestingProductsByCustomerId(
          String(customerId),
          values?.product?.value
        ).then(() => {
          setShowAddProduct(false);
          getInterestingProductList();
        });
      }
    },
    [customerId]
  );

  const validate = Yup.object({
    product: Yup.mixed()
      .required(translator("customer_page.text_required"))
      .nullable(),
  });

  useEffect(() => {
    if (customerId) {
      getInterestingProductList();
    }
  }, [customerId]);

  const handleGetProductList = () => {
    ServiceProductAPI.fetchProducts(
      EPaginate.DEFAULT_PAGE_INDEX,
      1000000,
      null,
      companyID
    ).then((res) => {
      if (res?.items?.length > 0) {
        ServiceProjectAPI.fetchProjects(
          EPaginate.DEFAULT_PAGE_INDEX,
          1000000
        ).then((projectData) => {
          const projectArr = projectData.items;

          const arrProductChose = productInterestingList.map(
            (product: any) => product.productId
          );
          const arrProducts = res.items
            .filter((item: any) => !arrProductChose.includes(item.id))
            .map((item: any) => ({
              label: `${item.productName} -
                ${projectArr.find((i) => item.projectId === i.id)?.name}`,
              value: item.id,
            }));

          arrProducts.push({
            label: `+ ${translator("customer_page.text_new_product")}`,
            value: "addNewProduct",
          });
          setProductList(arrProducts);
        });
      }
    });
  };

  useEffect(() => {
    handleGetProductList();
  }, []);

  useEffect(() => {
    if (productSelected.value === "addNewProduct") {
      setShowModal(true);
      setShowAddProduct(false);
    }
  }, [productSelected]);

  return (
    <>
      <div className="tab-pane" id="products" role="tabpanel">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h4>{translator("customer_page.text_products")}</h4>
              <div>
                {productInterestingList.length}{" "}
                {translator("customer_page.text_item")}
                {data?.productInterestedUpdatedAt ? (
                  <div>
                    - {translator("customer_page.text_update")}{" "}
                    {Math.floor(
                      (new Date().getTime() -
                        new Date(data?.productInterestedUpdatedAt).getTime()) /
                        60000
                    )}{" "}
                    {translator("customer_page.text_minutes_ago")}
                  </div>
                ) : null}
              </div>
            </div>
            <button
              className="btn btn-danger"
              onClick={() => {
                setShowAddProduct(true);
                handleGetProductList();
              }}
            >
              {translator("customer_page.text_add_product")}
            </button>
          </div>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th className="wd-100">
                    {translator("customer_page.text_product_name")}
                  </th>
                  <th className="wd-100">
                    {translator("customer_page.text_project")}
                  </th>
                  <th className="wd-100">
                    {translator("customer_page.text_status")}
                  </th>
                  <th className="wd-100">
                    {translator("customer_page.text_time_of_completion")}
                  </th>
                  <th className="wd-100"></th>
                </tr>
              </thead>
              <tbody>
                {productInterestingList.map((item: any, index: number) => (
                  <tr key={index}>
                    <td>{item.product?.productName}</td>
                    <td>{item.project?.name}</td>
                    <td>{item.product?.productStatus}</td>
                    <td>{item.timeOfCompletion}</td>
                    <td className="text-center">
                      <button
                        className="btn btn-dark"
                        onClick={() => {
                          handleRemoveInterestingProductsByCustomerId(
                            item.productId
                          );
                        }}
                      >
                        {translator("customer_page.text_remove")}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal
        isOpen={showAddProduct}
        onRequestClose={() => setShowAddProduct(false)}
        modal_name={translator("customer_page.text_choose_a_product")}
        label="Name"
      >
        <Formik
          initialValues={{
            product: "",
          }}
          validationSchema={validate}
          onSubmit={handleAddProduct}
          enableReinitialize={true}
        >
          {(formik) => (
            <div>
              <Form>
                <h4 className="font-weight-normal">
                  {translator("customer_page.text_product")}
                </h4>

                <SelectField
                  name="product"
                  options={productList}
                  setValueProp={setProductSelected}
                />

                <div className="text-center mt-5">
                  <button
                    className="btn btn-dark"
                    type="reset"
                    onClick={() => {
                      setShowAddProduct(false);
                    }}
                  >
                    {translator("customer_page.text_cancel")}
                  </button>
                  <button className="btn btn-danger ml-3">
                    {translator("customer_page.text_add")}
                  </button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </Modal>
      <CreateProductForm
        showModal={showModal}
        setShowModal={setShowModal}
        functionHandle={handleGetProductList}
      />
    </>
  );
};

export default ProductsTab;
