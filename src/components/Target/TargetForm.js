import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import FormField from '../common/FormField';
import '../../styles/Common.scss';
import Select from 'react-select';

class TargetForm extends Component {
  constructor() {
    super();
    this.state = { value: 'two' };
    this.toggle = this.toggle.bind(this);
    this.options = [
      { value: 'football', label: 'Football' },
      { value: 'travel', label: 'Travel' },
      { value: 'politics', label: 'Politics' },
      { value: 'art', label: 'Art' },
      { value: 'dating', label: 'Dating' },
      { value: 'music', label: 'Music' },
      { value: 'movies', label: 'Movies' },
      { value: 'series', label: 'Series' },
      { value: 'food', label: 'Food' }
    ];
  }
  toggle({ value }) {
     this.setState({ value });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className="form container-form">
        <Field name="areaLenght" component={FormField} type="text" label="SPECIFY AREA LENGTH"/>
        <Field name="targetTitle" component={FormField} type="text" label="TARGET TITLE"/>
        <Select name="form-field-name" value={this.state.value} options={this.options} onChange={this.toggle}/>
        <button className="button-target" type="submit">SAVE TARGET</button>
      </form>
    );
  }
}

const TargetReduxForm = reduxForm({
  form: 'target'
})(TargetForm);

export default TargetReduxForm;
