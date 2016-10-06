import React, { Component, PropTypes } from 'react';

class FormField extends Component {

  render() {
    const {input, label, type, meta: { touched, error }} = this.props;
    return(
      <div>
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type}/>
          {touched && error && <span>{error}</span>}
        </div>
      </div>
    );
  }
}

FormField.PropTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
}

export default FormField;
