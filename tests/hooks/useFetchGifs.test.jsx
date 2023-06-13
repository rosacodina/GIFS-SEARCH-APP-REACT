import { renderHook, waitFor } from "@testing-library/react";
import {useFetchGifs} from "../../src/hooks/useFetchGifs";

describe('pruebas en el hook del comp. useFetchGifs', () => {
  
  test('debe devolver el estado inicial ', () => {
    
    const { result } = renderHook( () => useFetchGifs("sky") );
    const { images, isLoading } = result.current;

    expect( images.length ).toBe(0);
    expect( isLoading ).toBeTruthy();
  });

  test('debe devolver un arreglo de imágenes e isLoading en false', async() => {
    
    const { result } = renderHook( () => useFetchGifs("sky") );
    await waitFor(
      () => expect( result.current.images.length ).toBeGreaterThan(0),
    );

    const { images, isLoading } = result.current;


    expect( images.length ).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy();
  });
  
});
