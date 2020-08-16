import React from "react";
import axios from "axios";
import { Input } from "antd";
import { notification } from "antd";

const { Search } = Input;

export const SearchBook = ({ setBooks, setLoading }) => {
  const findBook = async (book) => {
    const apiKey = "AIzaSyCiuSmbGvTKw512Zy2lwgta7P5AENsGs7M";
    const url = `https://www.googleapis.com/books/v1/volumes?maxResults=40&q=${book}&key=${apiKey}`;

    setLoading(true);

    try {
      const res = await axios.get(url);
      if (res.data.items) {
        setBooks(res.data.items);
      } else {
        notification.open({
          message: "No results found",
          description: `${book} not found`,
        });
        setBooks(undefined);
      }
    } catch (error) {
      setBooks(undefined);
      notification.open({
        message: "No results found",
        description: `${
          book === ""
            ? "There are no invisible books to read T_T"
            : book + " not found"
        }`,
      });
    }

    setLoading(false);
  };

  return (
    <div className="o-grid__col u-12/12@md">
      <Search
        bordered={false}
        placeholder="Enter book name"
        onSearch={(value) => findBook(value)}
        style={{ width: "100%" }}
        enterButton
      />
    </div>
  );
};
