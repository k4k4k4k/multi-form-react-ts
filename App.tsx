import * as React from 'react';
import './style.css';
import { useState, useEffect } from 'react';

const fields = [
  {
    id: 'name',
    name: 'name',
    type: 'text',
    label: 'Name',
  },
  {
    id: 'email',
    name: 'email',
    type: 'email',
    label: 'Email',
  },
  {
    id: 'birthdate',
    name: 'birthdate',
    type: 'date',
    label: 'Birthdate',
  },
  {
    id: 'password',
    name: 'password',
    type: 'password',
    label: 'Password',
  },
];

export default function App() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    birthDate: '',
    password: '',
  });
  const [page, setPage] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const onChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
    setInputValue(e.target.value)
  };
  const changePage = (type) => {
    switch (type) {
      case 'next':
        setPage((prev) => prev + 1);
        setInputValue("")
        break;
      case 'back':
        setPage((prev) => prev - 1);
        setInputValue("")
    }
  };

  return (
    <div className="App">
    <form className="form">
      {page > 0 ? <button type="button" onClick={() => changePage('back')}>Back</button> : ''}
      <label htmlFor={fields[page].id}>{fields[page].label}</label>
      <input
        type={fields[page].type}
        name={fields[page].name}
        id={fields[page].id}
        onChange={onChange}
        value={inputValue}
      />
      {page < fields.length - 1 ? (
        <button type="button" onClick={() => changePage('next')}>
          Next
        </button>
      ) : (
        <button type="button">Submit</button>
      )}
      {console.log(formValues)}
    </form>
    </div>
  );
}
