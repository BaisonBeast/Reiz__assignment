function Header({
  CountrySmallerThanLithuania,
  CountriesInOceanaRegion,
  handleSort
}) {
  return (
    <header className="header">
      <h1 className="header__heading"> Countries </h1>
      <div className="header__buttons">
        <div className="header__filter">
          <button
            className="header__button"
            onClick={CountrySmallerThanLithuania}
          >
            SmallerThanLithuania
          </button>
          <button className="header__button" onClick={CountriesInOceanaRegion}>
            CountriesInOceanaRegion
          </button>
        </div>
        <button className="header__button" onClick={handleSort}>
          Descending
        </button>
      </div>
    </header>
  );
}

export default Header;
