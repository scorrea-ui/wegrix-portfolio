import React, { useState } from "react";
import { Modal, Button } from "antd";

export const Book = ({
  title,
  authors,
  publisher,
  description,
  rating,
  previewLink,
  imageLinks,
  pageCount,
}) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  const navigate = (link) => {
    hideModal();
    window.location.assign(link);
  };

  return (
    <>
      <div className="o-grid__col u-2/12@md u-4/12">
        <div className="c-card">
          <div className="c-card__img">
            <a href={previewLink} className="c-card__title" target="_blank">
              <img src={imageLinks ? imageLinks.thumbnail : ""} alt={title} />
            </a>
          </div>
          <div className="c-card__content">
            <p className="c-card__title">{title}</p>
            <p>
              <Button type="primary" onClick={showModal}>
                See More
              </Button>
            </p>
          </div>
        </div>
      </div>
      <Modal
        title={title}
        visible={visible}
        onOk={hideModal}
        onCancel={hideModal}
        footer={[
          <Button
            key="okay"
            type="primary"
            onClick={() => navigate(previewLink)}
          >
            Preview Book
          </Button>,
        ]}
      >
        <p>{authors ? `Book author: ${authors}` : "Book author: No information found"}</p>
        <p>
          {publisher ? `Book publisher: ${publisher}` : "Book publisher: No information found"}
        </p>
        <p>
          {description
            ? `Book description: ${description}`
            : "Book description: No information found"}
        </p>
        <p>{rating ? `Book rating: ${rating}` : "Book rating: This book has no ratings"}</p>
        <p>{pageCount ? `Pages: ${pageCount}` : "Pages: No information found"}</p>
      </Modal>
    </>
  );
};
