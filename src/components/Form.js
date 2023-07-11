import React, { useEffect, useState } from "react";
import { Fields } from "../constant/User";
import "./look.css";
import Table from "./Table";
const InitialData = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  city: "",
  gender: "",
  terms: false,
};
const LocalDB = () => {
  const storeUsers = localStorage.getItem("users");
  if (storeUsers) {
    return JSON.parse(storeUsers);
  } else {
    return [];
  }
};
const Form = () => {
  const [state, setState] = useState(InitialData);
  const [errorMessage, setErrorMessage] = useState({});
  const [users, setUser] = useState(LocalDB());
  const [editUser, setEditUser] = useState(null);

  const formValidations = () => {
    const errors = {};
    Fields.forEach((field) => {
      const { name, regex, errorMessage } = field;
      const value = state[name];
      if (regex && !regex.test(value)) {
        errors[name] = errorMessage;
      }
    });
    return errors;
  };
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setState({
      ...state,
      [name]: fieldValue,
    });
    console.log(state);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = formValidations();
    setErrorMessage(errors);
    if (!Object.keys(errors).length) {
      if (editUser !== null) {
        const updatedUser = [...users];
        updatedUser[editUser] = state;
        setUser(updatedUser);
        setEditUser(null);
      } else {
        setUser([...users, state]);
      }
      setState(InitialData);
    }
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div>
      <div>
        <form className="form" onSubmit={handleSubmit}>
         
          {
            Fields.map((field)=>{
              if(field.type==='text' || field.type==='email' || field.type==='tel'){
                return(
                  <label>
                    {field.title}
                    <input
                      className={field.class}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={state[field.name]}
                      onChange={handleChange}
                      errorMessage={field.errorMessage}
                    />
                    {
                      errorMessage && <p className="error">{errorMessage[field.name]}</p>
                    }
                  </label>
                )
              } 
              else if(field.type === 'select'){
                return(
                  <label>
                    {field.title}
                    
                      <select
                        className={field.class}
                        type={field.type}
                        name={field.name}
                        value={state[field.name]}
                        onChange={handleChange}
                      >
                      {
                        field.Option.map((option)=>(
                          <option>{option.label}</option>
                        ))
                      }
                      </select>
                   
                  </label>
                )
              }
              
              else if(field.type === 'radio'){
                return(
                  <label>
                    {field.title}
                    {field.Option.map((option)=>(
                      <label>
                      <input
                      type={field.type}
                      name={field.name}
                      value={option.value}
                      onChange={handleChange}
                      checked={state[field.name] === option.value}
                    />
                      {option.label}
                      </label>
                    ))}
                    {
                      errorMessage && <p className="error">{errorMessage[field.name]}</p>
                    }
                  </label>
                )
              }
              else if(field.type === 'checkbox'){
                return(
                  <label>
                    {field.title}
                  
                      <input
                        type={field.type}
                        name={field.name}
                        checked={state[field.name]}
                        onChange={handleChange}
                      />
                    
                    {
                       errorMessage && <p className="error">{errorMessage[field.name]}</p>

                    }
                  </label>
                )
              }
            })
          }
         
          {/* {Fields.map((field) => {
            switch (field.type) {
              case "text":
                return (
                  <label>
                    {field.title}
                    <input
                      className={field.class}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      onChange={handleChange}
                      value={state[field.name]}
                      errorMessage={field.errorMessage}
                    />
                    {errorMessage && (
                      <p className="error"> {errorMessage[field.name]}</p>
                    )}
                  </label>
                );
              case "email":
                return (
                  <label>
                    {field.title}
                    <input
                      className={field.class}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      onChange={handleChange}
                      value={state[field.name]}
                    />
                    {errorMessage && (
                      <p className="error"> {errorMessage[field.name]}</p>
                    )}
                  </label>
                );
              case "tel":
                return (
                  <label>
                    {field.title}
                    <input
                      className={field.class}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      onChange={handleChange}
                      value={state[field.name]}
                    />
                    {errorMessage && (
                      <p className="error"> {errorMessage[field.name]}</p>
                    )}
                  </label>
                );
              case "radio":
                return (
                  <label>
                    {field.title}
                    {field.Option.map((option) => (
                      <label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={option.value}
                          onChange={handleChange}
                          checked={state[field.name] === option.value}
                        />
                        {option.label}
                      </label>
                    ))}
                    {errorMessage && (
                      <p className="error"> {errorMessage[field.name]}</p>
                    )}
                  </label>
                );
              case "checkbox":
                return (
                  <label>
                    {field.title}
                    <input
                      type={field.type}
                      name={field.name}
                      checked={state[field.name]}
                      onChange={handleChange}
                    />
                    {errorMessage && (
                      <p className="error"> {errorMessage[field.name]}</p>
                    )}
                  </label>
                );
              case "select":
                return (
                  <label>
                    {field.title}
                    <select
                      className={field.class}
                      type={field.type}
                      name={field.name}
                      value={state[field.name]}
                      onChange={handleChange}
                    >
                      {field.Option.map((option) => (
                        <option>{option.label}</option>
                      ))}
                    </select>
                    {errorMessage && (
                      <p className="error"> {errorMessage[field.name]}</p>
                    )}
                  </label>
                );
              default:
                return null;
            }
          })} */}

          {editUser !== null ? (
            <button className="submitbutton" type="update" value="update">
              update
            </button>
          ) : (
            <button className="submitbutton" type="submit" value="submit">
              submit
            </button>
          )}
        </form>
      </div>
      <Table
        users={users}
        setUser={setUser}
        setState={setState}
        setEditUser={setEditUser}
      />
    </div>
  );
};

export default Form;
