import React, { useState } from 'react';
import styled from 'styled-components'
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const formControl = styled.form`
  & {
    margin: 0.5rem 0;
  }

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid label {
    color: red;
  }

  &.invalid input {
    border-color: red;
    background-color: salmon;
  }
`

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = event => {
    const { target: { value } } = event
    setIsValid(value.trim() !== "")
    setEnteredValue(value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if (enteredValue.trim() === ""){
      setIsValid(false)
      return
    }

    setIsValid(true)
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input
            type="text"
            onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
