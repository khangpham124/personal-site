import React from "react";
import Item from "./Item";
import { Droppable } from "react-beautiful-dnd";
import { styled } from "@stitches/react";
import Cookies from "js-cookie";

interface ColumnProps {
  col: {
    id: string;
    list: string[];
  };
}

const StyledColumn = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginTop: 8,
  h2: {
    margin: 0,
    padding: "0 16px",
  },
  marginBottom: "20px",
});

const StyledList = styled("div", {
  backgroundColor: "#ddd",
  borderRadius: 8,
  padding: 16,
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  marginTop: 8,
  minHeight: "50vh",
});

const defaultLang = Cookies.get("lang");

const Column: React.FC<ColumnProps> = ({ col: { list, id } }) => {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <StyledColumn>
          <h4 className="text-center text-capitalize">{id}</h4>
          <StyledList {...provided.droppableProps} ref={provided.innerRef}>
            {list.map((text, index) =>
              defaultLang === "en" ? (
                <Item key={text} text={text} index={index} />
              ) : (
                <Item
                  key={text}
                  text={
                    text === "Phone"
                      ? "Số điện thoại"
                      : text === "Lead Status"
                      ? "Trạng thái lead"
                      : text === "Rating"
                      ? "Đánh giá"
                      : text === "Products Interest"
                      ? "Sản phẩm mong muốn"
                      : text === "Lead Source"
                      ? "Nguồn lead"
                      : text === "Created by"
                      ? "Tạo bởi"
                      : text === "Street"
                      ? "Đường"
                      : text === "City"
                      ? "Thành phố"
                      : text === "Social Media"
                      ? "Mạng xã hội"
                      : text === "Gender"
                      ? "Giới tính"
                      : text === "Last modified by"
                      ? "Cập nhật lần cuối"
                      : text === "Estimated income"
                      ? "Thu nhập dự đoán (năm)"
                      : text === "Customer's budget"
                      ? "Vốn của khách hàng"
                      : text === "Social media"
                      ? "Mạng xã hội"
                      : text === "Created date"
                      ? "Ngày tạo"
                      : text
                  }
                  index={index}
                />
              )
            )}
            {provided.placeholder}
          </StyledList>
        </StyledColumn>
      )}
    </Droppable>
  );
};

export default Column;
