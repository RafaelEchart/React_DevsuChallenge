import React from "react";
import { Provider } from "react-redux";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NoPokemons from "../components/NoPokemons";
import store from "../redux/configureStore";

describe("Testing no pokemon banner to render properly", () => {
  it("If we pass type === 'no data' the message should render propertly", () => {
    render(
      <Provider store={store}>
        <NoPokemons type="no_data"/>
      </Provider>
    );

    expect(screen.getByText("NO SE ENCONTRARON POKEMONS")).toBeInTheDocument();
    expect(screen.getByText("AGREGA UNO NUEVO")).toBeInTheDocument();
  });
  
  it("If we pass type === 'not_found' the message should render propertly", () => {
    render(
      <Provider store={store}>
        <NoPokemons type="not_found"/>
      </Provider>
    );

    expect(screen.getByText("NO SE ENCONTRARON POKEMONS")).toBeInTheDocument();
    expect(screen.getByText("PRUEBA UN ID DIFERENTE")).toBeInTheDocument();
  });
});
