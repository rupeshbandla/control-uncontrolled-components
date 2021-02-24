import { useState } from "react";
import BookSearchResult from "./BookSearchResult";
import "./AxiosPut.css";

function AxiosPut() {
  const [isbn, setIsbn] = useState("");
  const [result, setResult] = useState("");

  // 0345535529 - Game of Throns

  // 1101965487 - Book

  // 0007477155  - Boo

  function handleInput(e) {
    setIsbn(e.target.value);
  }

  async function getRecords() {
    if (isbn === "") {
      alert("please enter the isbn number");
    } else {
      const searchBook = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
      );
      const bookResult = await searchBook.json();
      console.log(bookResult);
      setResult(bookResult);
    }
  }

  return (
    <div className="container">
      <label>Search for Book by ISBN</label>
      <br />
      <input type="text" onChange={handleInput} value={isbn} />
      <button onClick={getRecords} name="search">
        Search
      </button>
      <div className="search">Searching:{isbn}</div>
      <hr />
      <BookSearchResult result={result} />
    </div>
  );
}

export default AxiosPut;
