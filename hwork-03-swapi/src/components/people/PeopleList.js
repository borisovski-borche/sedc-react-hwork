import { Component } from "react";
import axios from "axios";

import PeopleItem from "./PeopleItem";
import Pagination from "./Pagination";

class PeopleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      currentPage: 1,
      total: 0,
      loading: false,
    };
  }
  changePage = number => {
    this.setState({
      currentPage: number,
    });
  };

  componentDidMount() {
    this.fetchPeople(this.state.currentPage);
  }

  componentDidUpdate(_, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.fetchPeople(this.state.currentPage);
    }
  }

  fetchPeople = async page => {
    this.setState({
      loading: true,
    });

    const response = await axios.get(
      `https://swapi.dev/api/people/?page=${page}`
    );

    this.setState({
      people: response.data.results,
      total: response.data.count,
      loading: false,
    });

    if (!response.data.next) {
      this.setState({
        nextDisabled: true,
      });
      console.log(this.state.nextDisabled);
    }
  };

  render() {
    return (
      <div className="d-flex flex-column p-3 col-6">
        <h2 className="text-center m-3">People of Star Wars</h2>
        <Pagination
          changePage={this.changePage}
          currentPage={this.state.currentPage}
          total={this.state.total}
          pageDisplayNum={3}
        />
        {this.state.loading ? (
          <p className="fs-2 text-center">Loading...</p>
        ) : (
          <ul className="list-group">
            {this.state.people.map(person => {
              return <PeopleItem person={person} key={person.name} />;
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default PeopleList;
