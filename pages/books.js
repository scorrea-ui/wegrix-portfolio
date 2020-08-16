import React, { useState } from "react";
import { Book } from "../components/Book";
import { SearchBook } from "../components/Search";
import Sidebar from "../components/global/Sidebar";
import { Spin } from "antd";
import { PaginationBooks } from "../components/Pagination";
import Footer from "../components/global/Footer";

export const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(10);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks =
    books && books.length > 1
      ? books.slice(indexOfFirstBook, indexOfLastBook)
      : [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="c-books">
        <div className="o-grid o-grid--flush">
          <div className="o-grid__col u-3/12@md">
            <Sidebar />
          </div>
          <div className="o-grid__col u-9/12@md">
            <h1 className="c-books__title">WegrixBooks</h1>
            <div className="c-books__wrapper">
              <SearchBook setBooks={setBooks} setLoading={setLoading} />
              <div className="o-grid o-grid--books u-text-center">
                {loading ? (
                  <div className="o-grid__col u-12/12@md">
                    <Spin size="large" />
                  </div>
                ) : currentBooks.length > 1 ? (
                  currentBooks.map((book, index) => {
                    const {
                      title,
                      authors,
                      publisher,
                      description,
                      averageRating,
                      previewLink,
                      imageLinks,
                      pageCount,
                    } = book.volumeInfo;

                    return (
                      <Book
                        key={`${title}${publisher}${index}`}
                        title={title}
                        authors={authors}
                        publisher={publisher}
                        description={description}
                        rating={averageRating}
                        previewLink={previewLink}
                        imageLinks={imageLinks}
                        pageCount={pageCount}
                      />
                    );
                  })
                ) : null}
                <div className="o-grid__col u-12/12@md">
                  {books && books.length > 1 && !loading ? (
                    <PaginationBooks
                      booksPerPage={booksPerPage}
                      totalBooks={books.length}
                      paginate={paginate}
                      currentPage={currentPage}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Books;
