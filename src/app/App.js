import React, { Component } from 'react';
import './App.css';
import {Header} from './partials/Header';
import {ShowGrid} from './shows/ShowGrid';
import {SingleShow} from './shows/SingleShow';
import {shows} from '../services/ShowsService';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showsData: [],
      singleShow: null,
      dropDownSearchResults: [],
      grid: true,

    }
    this.showSingleShow = this.showSingleShow.bind(this)
  }

  componentDidMount() {
    shows.getData()
      .then((res) => this.setState({showsData: res}))
  }

  showSingleShow(event) {
    this.setState({grid: false})
    console.log('clicked', event.target.id);
  }

  render() {
    return (
      <React.Fragment>
        <Header searchDropDown={this.searchDropDown} action={this.showSingleShow} dropDown={this.state.dropDownSearchResults} />
        {(this.state.grid) ? (<ShowGrid data={this.state.showsData} action={this.showSingleShow}/>):(<SingleShow data={this.state.singleShow} />)}
      </React.Fragment>
    );
  }
}

export default App;
