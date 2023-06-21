function Countries({ countries, page }) {
  return (
    <div>
      {countries.length > 0 && (
        <div className="countries">
          {countries.slice(page * 20 - 20, page * 20).map((country, indx) => {
            return (
              <div className="countries__single" key={indx}>
                <h2 className="countries__heading">{country.name}</h2>
                <div className="countries__content">
                  <div className="countries__region">
                    <label>Region: </label>
                    <span>{country.region}</span>
                  </div>
                  <div className="countries__area">
                    <label>Area: </label>
                    <span>{country.area}</span>
                  </div>
                  <div className="countries__independent">
                    <label>Independent: </label>
                    <span>{country.independent ? "✅" : "❌"}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Countries;
