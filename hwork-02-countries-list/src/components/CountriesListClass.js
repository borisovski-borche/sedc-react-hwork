import { Component, Fragment } from "react";
import { v4 as uuid } from "uuid";

import Input from "./Input";
import CountryItem from "./CountryItem";

class CountriesListClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: "",
      countries: [
        { id: uuid(), name: "Poland" },
        { id: uuid(), name: "Russia" },
        { id: uuid(), name: "Portugal" },
        { id: uuid(), name: "Italy" },
        { id: uuid(), name: "Argentina" },
      ],
    };
  }

  onCountryNameChange = name => {
    this.setState({
      countryName: name,
    });
  };
  onCountryDelete = id => {
    this.setState({
      countries: this.state.countries.filter(el => el.id !== id),
    });
  };

  onCountryAdd = name => {
    if (name) {
      this.setState({
        countries: [...this.state.countries, { id: uuid(), name }],
        countryName: "",
      });
    }
  };

  onCountryEdit = (id, name) => {
    if (name) {
      this.setState({
        countries: this.state.countries.map(el => {
          if (el.id === id) {
            return { id: el.id, name };
          }
          return el;
        }),
      });
    }
  };

  render() {
    const { countryName, countries } = this.state;

    return (
      <Fragment>
        <div className="row mt-5 mb-2 px-4">
          <div className="col-8">
            <Input value={countryName} onChange={this.onCountryNameChange} />
          </div>
          <div className="col-4">
            <button
              className="btn btn-primary"
              onClick={() => this.onCountryAdd(countryName)}
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
                onCountryDelete={this.onCountryDelete}
                onCountryEdit={this.onCountryEdit}
              />
            ))}
          </ul>
        </div>
      </Fragment>
    );
  }
}
export default CountriesListClass;
