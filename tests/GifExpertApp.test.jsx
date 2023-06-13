import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('pruebas en GifExpertApp', () => {
  
  test('debe agregar una nueva categoría cuando llama a onAddCategory ', () => {
    screen.debug();

    render( <GifExpertApp /> );

    const defaultCategory = screen.getByText( ( content, element) => {
      return content.includes("nueva categoría");
    });
    const input = screen.getByRole("textbox");
    const newCategory = screen.getByText("nueva categoría");
    const form = screen.getByLabelText("form");

    fireEvent.change(input, {target: {value: "Nueva Categoría"} } );
    fireEvent.submit(form);

    expect(newCategory).toBeInTheDocument();
    expect(defaultCategory).toBeInTheDocument();

  });
  
  
});
