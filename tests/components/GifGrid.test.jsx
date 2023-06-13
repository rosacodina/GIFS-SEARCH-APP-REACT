import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/components/hooks/useFetchGifs";

jest.mock("../../src/components/hooks/useFetchGifs");

describe('Pruebas en Gifgrid', () => {
  
  const category = "Sky";

  test('debe enseñar el loading inicialmente ', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    render( <GifGrid category={ category } /> );    
    expect( screen.getByText("Cargando..." ) );
    expect( screen.getByText( category ) );

    screen.debug();
  });


  test('debe mostrar items cuando se cargan las imágenes mediante useFetchGifs  ', () => {
    const gifs = [
      {
      id: "ABC",
      title: "miercoles",
      url: "https://localhost/miercoles.jpg"
    },
    {
      id: "231",
      title: "lunes",
      url: "https://localhost/lunes.jpg"
    },
  ]
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });

    render( <GifGrid category={ category } /> ); 
    expect( screen.getAllByRole('img').length).toBe(2);   
  });
  
  

});
