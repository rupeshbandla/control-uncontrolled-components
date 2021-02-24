function BookSearchResult(props) {
  return (
    <div className="searchResult">
      {props.result && <p>Kind:{props.result.kind} </p>}
      {props.result && <p>Total Items:{props.result.totalItems}</p>}
    </div>
  );
}

export default BookSearchResult;
