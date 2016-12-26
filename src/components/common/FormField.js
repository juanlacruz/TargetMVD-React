import React, { Component, PropTypes } from 'react';
import '../../styles/Signup.scss';

class FormField extends Component {

  render() {
    const { input, label, type, meta: { touched, error }, placeholder } = this.props;
    return (
      <div className="sign-up-wrapper">
        <label className="input-name-title">{label}</label>
        <input className="input-form" {...input} placeholder={placeholder} type={type}/>
        {touched && error && <span>{error}</span>}
      </div>
    );
  }
}

FormField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired
};

export default FormField;
