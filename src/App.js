import "./styles.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Countries from "./components/Countries";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [page, setPage] = useState(1);

  async function fetchCountries() {
    const res = await fetch(
      "https://restcountries.com/v2/all?fields=name,region,area"
    );
    const data = await res.json();
    data.sort();
    setCountries(data);
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  function CountrySmallerThanLithuania() {
    const Lithuania = countries.filter(function (country) {
      return country.name === "Lithuania";
    });
    if (Lithuania.length === 0) return;
    const countrySmallerThanLithuania = countries.filter(function (country) {
      return Lithuania[0].area >= country.area;
    });
    setCountries(countrySmallerThanLithuania);
  }

  function CountriesInOceanaRegion() {
    const countriesInOceanaRegion = countries.filter(function (country) {
      return country.region === "Oceania";
    });
    setCountries(countriesInOceanaRegion);
  }

  function selectPageHandler(selectedPage) {
    if (
      selectedPage >= 1 &&
      selectedPage <= Math.floor(countries.length / 20) &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  }

  function handleSort() {
    const newOrder = countries.sort((a, b) => {
      const firstName = a.name;
      const secondName = b.name;
      if (firstName >= secondName) return -1;
      else return 1;
    });
    setCountries(newOrder);
    setPage(Math.floor(countries.length / 20) - page + 1);
  }

  return (
    <div className="container">
      <Header
        CountriesInOceanaRegion={CountriesInOceanaRegion}
        CountrySmallerThanLithuania={CountrySmallerThanLithuania}
        handleSort={handleSort}
      />
      <Countries countries={countries} page={page} />
      <Footer
        countries={countries}
        page={page}
        selectPageHandler={selectPageHandler}
      />
    </div>
  );
}
