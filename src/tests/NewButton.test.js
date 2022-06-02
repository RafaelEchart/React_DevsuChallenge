import React from "react";
import { Provider } from "react-redux";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NewButton from "../components/NewButton";
import store from "../redux/configureStore";

describe("Testing new pokemon buttton to render properly", () => {
  it("If we render the new pokemon button the NUEVO word should display", () => {
    render(
      <Provider store={store}>
        <NewButton />
      </Provider>
    );

    expect(screen.getByText("Nuevo")).toBeInTheDocument();
  });
});
