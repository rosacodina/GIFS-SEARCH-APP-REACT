import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('pruebas en GifExpertApp', () => {
  
  test('debe agregar una nueva categoría cuando llama a onAddCategory ', () => {
    screen.debug();

    render( <GifExpertApp /> );

    const input = screen.getByTestId("category-input");
    const form = screen.getByLabelText("form");

    fireEvent.change(input, {target: {value: "Nueva Categoría"} } );
    fireEvent.submit(form);

    const newCategory = screen.getByText("nueva categoría");

    expect(newCategory).toBeInTheDocument();

  });
  
  
});
