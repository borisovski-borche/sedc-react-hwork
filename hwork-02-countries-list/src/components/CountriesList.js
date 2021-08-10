import React, { Fragment, useState } from "react";
import { v4 as uuid } from "uuid";

import Input from "./Input";
import CountryItem from "./CountryItem";

const CountriesList = () => {
  const [countryName, setCountryName] = useState("");
  const [countries, setCountries] = useState([
    { id: uuid(), name: "Macedonia" },
    { id: uuid(), name: "Austria" },
    { id: uuid(), name: "France" },
    { id: uuid(), name: "Spain" },
    { id: uuid(), name: "Brazil" },
  ]);

  const onCountryDelete = id => {
    setCountries(() => {
      return countries.filter(el => el.id !== id);
    });
  };

  const onCountryAdd = name => {
    if (name) {
      setCountries(prevCountries => {
        return [...prevCountries, { id: uuid(), name: name }];
      });
      setCountryName("");
    }
  };

  const onCountryEdit = (id, name) => {
    if (name) {
      setCountries(prevCountries => {
        return prevCountries.map(el => {
          if (el.id === id) {
            return { id: el.id, name: name };
          }
          return el;
        });
      });
    }
  };

  return (
    <Fragment>
      <div className="row mt-5 mb-2 px-4">
        <div className="col-8">
          <Input value={countryName} onChange={setCountryName} />
        </div>
        <div className="col-4">
          <button
            className="btn btn-primary"
            onClick={() => onCountryAdd(countryName)}
          >
            Add Country
          </button>
        </div>
      </div>
      <div className="row">
        <ul className="list-group p-4">
          {countries.map(country => (
            <CountryItem
              key={country.id}
              {...country}
              onCountryDelete={onCountryDelete}
              onCountryEdit={onCountryEdit}
            />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default CountriesList;
