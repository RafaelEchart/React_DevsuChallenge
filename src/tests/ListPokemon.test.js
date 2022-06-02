import React from "react";
import {  Provider } from "react-redux";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import IndividualPokemon from "../components/ListPokemon/IndividualPokemon";
import store from "../redux/configureStore";



describe("Testing List of Pokemon being rendered propertly", () => {
  it("If we pass one pokemon to the IndividualPokemon component it sould render the correct data", () => {

    let pokemonData = {
        id: 7603,
        name: "Perrito",
        image:
          "https://as01.epimg.net/betech/imagenes/2016/07/20/portada/1469027241_689532_1469027466_noticia_normal_recorte1.jpg",
        type: "normal",
        hp: 100,
        attack: 50,
        defense: 80,
        idAuthor: 1,
        created_at: "2022-06-02T19:04:42.342Z",
        updated_at: "2022-06-02T19:04:56.378Z",
      }

    
    render(<Provider store={store}><IndividualPokemon pokemon={pokemonData}/></Provider>)

    expect(screen.getByText("Perrito")).toBeInTheDocument();
    expect(screen.getByText("50")).toBeInTheDocument();
  });
  
  
});
