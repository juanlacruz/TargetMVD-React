import React from 'react';
import '../../styles/Common.scss';
import target from '../../assets/target.png';
import TargetForm from './TargetForm';

const Target = () => {
  return (
    <div className="container">
      <img src={target} />
      <h1 className="title">create new target</h1>
      <TargetForm />
    </div>
  );
};

export default Target;
