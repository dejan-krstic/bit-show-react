import React, { Component } from 'react';
import _ from 'lodash';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import { Header } from './partials/Header';
import { ShowGrid } from './shows/ShowGrid';
import SingleShow from './shows/SingleShow';
import { shows } from '../services/DataService';
import { API_URL, API_SEARCH } from '../constants/constants';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showsData: [],
      singleShow: null,
      dropDownResults: [],
      grid: true,
      searchValue: ''

    }

  }

  componentDidMount() {
    shows.getData(API_URL, 50)
      .then(res => this.setState({ showsData: res }))
  }


  searchDebounce = _.debounce((value) => {
    shows.getData(API_SEARCH + value, 10)
      .then(res => {
        this.setState({ dropDownResults: res })
      })
  }, 300)

  searchShows = ({ target: { value } }) => {
    this.searchDebounce(value)
    this.setState({ searchValue: value })
  }
  render() {
    return (
      <React.Fragment>

        <Header
          dropDown={this.state.dropDownResults}
          searchShows={this.searchShows}
          searchValue={this.state.searchValue}
          clearSearch={() => this.setState({ searchValue: '', dropDownResults: [] })}
        />
        <Switch>
          <Route
            exact path="/show/:showId"
            render={props => <SingleShow {...props} data={this.state.singleShow} />}
          />
        <Route
          exact path="/"
          render={props => <ShowGrid {...props} data={this.state.showsData} action={this.showSingleShow} />}
          />
          </Switch>
      </React.Fragment>
    );
  }
}

export default App;
