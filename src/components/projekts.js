import React, { useState } from "react";

export default function Projekts() {
  // hook
  const [countries, updateCountries] = useState([]);

  //arrow function
  const latestCountries = () => {
    let apiurl = "https://restcountries.com/v3.1/all";
    fetch(apiurl)
      .then((response) => response.json())
      .then((response) => {
        updateCountries(response);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <main>
        <h1>World Countries</h1>
      </main>
      <section className="dashboard">
        <button className="loadBtn" onClick={latestCountries}>
          Load Data
        </button>
      </section>
      <div className="dashboard">
        {countries.length > 0
          ? countries.map((country, index) => {
              return (
                <div key={index}>
                  <table className="tableFlag">
                    <tr>
                      <th>Country</th>
                      <th>Flag</th>
                    </tr>
                    <tr>
                      <th>{country.name.common}</th>
                      <th>
                        <img src={country.flags.png} alt="flag" />
                      </th>
                    </tr>
                  </table>
                </div>
              );
            })
          : []}
      </div>
    </div>
  );
}
