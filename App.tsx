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
  const onChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };
  const changePage = (e, type) => {
    e.preventDefault()
    switch (type) {
      case 'next':
        (page!==fields.length - 1)? setPage((prev) => prev + 1) : "";
        break;
      case 'back':
        setPage((prev) => prev - 1);
    }
  };

  return (
    <div className="App">
    <form className="form">
      {page > 0 ? <button type="submit" onClick={() => changePage(event,'back')}>Back</button> : ''}
      <label htmlFor={fields[page].id}>{fields[page].label}</label>
      <input
        type={fields[page].type}
        name={fields[page].name}
        id={fields[page].id}
        onChange={onChange}
        value={formValues[fields[page].name]} //!!!
      />
        <button type="submit" disabled={!formValues[fields[page].name] && } onClick={() => changePage(event,'next')}> 
        {/* disabled для невозможности идти дальше, пока не заполнишь поле */}
        {page < fields.length - 1 ? "Next" : "Submit"}
        </button>
      {console.log(formValues)} 
    </form>
    </div>
  );
}
