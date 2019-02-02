import React, { Component } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/lib/animated';

class MultiSelect extends Component {
  constructor(...props) {
    super(...props)

    this.state = {
      options: this.props.options,
      value: []
    }

    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(value) {
    this.setState({value})
  }

  render() {
    return (
      <Select
        isMulti={true}
        closeMenuOnSelect={false}
        components={makeAnimated()}
        simpleValue={true}
        joinValues={true}
        name={this.props.name}
        value={this.state.value}
        options={this.state.options}
        onChange={this.handleSelectChange}
      />
    )
  }
}

export default MultiSelect