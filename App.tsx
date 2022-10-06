import * as React from 'react';
import './style.css';
import {useState, useEffect} from "react";

const fields = [
  {
    id: "name",
    name: "name",
    type: "text",
    label: "Name"
  },
  {
    id: "email",
    name: "email",
    type: "email",
    label: "Email"
  },
  {
    id: "birthdate",
    name: "birthdate",
    type: "date",
    label: "Birthdate"
  },
  {
    id: "password",
    name: "password",
    type: "password",
    label: "Password"
  }
];

export default function App() {
  const [formValues, setFormValues] = useState({
    name:"",
    email:"",
    birthDate:"",
    password:""
  });
  const [page, setPage] = useState(0);
  const onChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value
    })
  };
  const changePage = (type) => {
    switch(type){
      case  "next":
        // useEffect(()=>setPage(prev => prev + 1), [])
        setPage(prev => prev + 1)
        break;
      case "prev":
        // useEffect(()=>setPage(prev => prev - 1), [])
        setPage(prev => prev - 1)
    }
  }


  return (
    <form className="App">
      <button onClick={() => changePage("prev")}>Back</button>
      <label htmlFor={fields[page].id}>{fields[page].label}</label>
      <input type={fields[page].type} name={fields[page].name} id={fields[page].id} onChange={onChange}/>
      <button onClick={() => changePage("next")}>Next</button>
    </form>
  ); 
}
