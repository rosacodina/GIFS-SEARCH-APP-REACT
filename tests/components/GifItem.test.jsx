/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en GifItem component', () => {

  const title = "Miércoles";
  const url = "https://one-punch.com/miercoles.jpg"

  test('debe coincidir con el snapshot ', () => {

    const { container } = render(<GifItem title={ title } url={ url } />);
    expect( container ).toMatchSnapshot();

  });

  test('debe enseñar la imagen con el URL y el ALT indicado ', () => {
    
    render(<GifItem title={ title } url={ url } />);
    //screen.debug();
    const { src, alt } = screen.getByRole("presentation");
    expect( src ).toBe( url );
    expect( alt ).toBe( alt );
  });

  test('debe enseñar el título en el componente ', () => {
    
    render(<GifItem title={ title } url={ url } />);
    expect( screen.getByText( title ) ).toBeTruthy();

  });
  
     
});
