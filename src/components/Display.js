/**
 * This is a Stateful Component. Its primary purpose is to fetch data, or do other logic that requires component lifecycles
 */
import React from 'react';
import BasicTable from './BasicTable';

import './Display.scss';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPostgres: [],
      dataFirebase: {}
    };
  }

  fetchData = () => {
    fetch('/recycling-data')
      .then(res => res.json())
      .then(json => {
        json = json.map((cls, i) => { 
          delete cls.id
          cls.score = Object.values(cls).reduce((acc, value) => {
            if (typeof value !== "string") return acc + value;
            else return acc
          }, 0)
          return cls})
        console.log(json.sort((a, b) => b.score - a.score))
        this.setState({ dataPostgres: json });
        this.props.loadData(json)
      });
  }

  /**
   * This is a React Component Lifecycle method. 
   * It will fire when the component has been mounted onto the DOM tree.
   */
  componentDidMount() {
    this.fetchData();
    // this.fetchDataFirebase();
  }

  render() {
    return (
      <div className="display-container">
        <BasicTable data={this.state.dataPostgres} />
        <h2>{"Current Leader"}</h2>
        <BasicTable data={this.state.dataPostgres.slice(0, 1)} />
      </div>
    )
  }
}

export default Display;

Display.propTypes = {};
