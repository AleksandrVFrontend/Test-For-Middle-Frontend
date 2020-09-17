import React, { useReducer, useEffect } from "react";
import "../index.min.css";
import Header from "./Header";
import CreateImgForm from "./Images";
import Button from "./Button";
import text from "./JSON/entities.json"



const FLAG_RESPONSE = text;

const initialState = {
  loading: true,
  flages: [],
  errorMessage: null
};


const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_FLAG_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_FLAG_SUCCESS":
      return {
        ...state,
        loading: false,
        flages: action.payload,
      };
    default:
      return state;
  }
};


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (FLAG_RESPONSE) {
          dispatch({
            type: "SEARCH_FLAG_SUCCESS",
            payload: FLAG_RESPONSE.response,
          });
        } else {
          dispatch({
            type: "SEARCH_FLAG_REQUEST",
          });
        }
  	}, []);


    const { flages, errorMessage, loading } = state;

    return (
    <>
      <Header text="Самый широкий выбор квартир от застройщика и не только" />
      <section className="main-section">
        {loading && !errorMessage ? (
          <span>loading... </span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          <ul className="list-of-img">
          {flages.map((flag, index) => (
            <CreateImgForm key={`${index}-${flag.Title}`} flag={flag} />
          ))}
          </ul>
        )}
      </section>
      <Button text="ЗАГРУЗИТЬ ЕЩЕ" />
    </>
  );
};

export default App;