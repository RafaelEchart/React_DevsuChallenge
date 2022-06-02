import React from "react";
import { Provider } from "react-redux";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "../components/SearchBar";
import store from "../redux/configureStore";

describe("Testing search input component", () => {
  it("The input should be present", () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const inputSearch = screen.getByTestId("search-input");
    expect(inputSearch).toBeInTheDocument();
  });
});
