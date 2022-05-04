import React, { useState, useEffect } from "react";

const Beers = () => {
  const [beersList, setBeerList] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function loadBeers() {
      try {
        const result = await fetch(
          `https://api.punkapi.com/v2/beers?page=${page}`
        );
        const data = await result.json();
        const beerNames = data.map((b) => b.name);
        setBeerList(beerNames);
      } catch (err) {
        console.log(err);
      }
    }
    loadBeers();
  }, [page]);

  function handleFirstClick() {
    setPage(1);
  }
  function handleNextClick() {
    setPage((prev) => prev + 1);
  }

  function handlePrevClick() {
    setPage((prev) => prev - 1);
  }
  function handleLastClick() {
    setPage(13);
  }

  return (
    <div>
      <h1>Beers</h1>
      <ul>
        {beersList.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <button onClick={handleFirstClick}>First page</button>
      <button onClick={handlePrevClick}>Previous page</button>
      {page}
      <button onClick={handleNextClick}>Next page</button>
      <button onClick={handleLastClick}>Last page</button>
    </div>
  );
};

export default Beers;
