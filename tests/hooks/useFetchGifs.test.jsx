import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/components/hooks/useFetchGifs";

describe('pruebas en el hook del comp. useFetchGifs', () => {
  
  test('debe devolver el estado inicial ', () => {
    
    const { result } = renderHook( () => useFetchGifs("Sky") );
    const { images, isLoading } = result.current;

    expect( images.length ).toBe(0);
    expect( isLoading ).toBeTruthy();
  });

  test('debe devolver un arreglo de imágenes de isLoading en false', async() => {
    
    const { result } = renderHook( () => useFetchGifs("Sky") );
    await waitFor( () => expect( result.current.images.length ).toBeGreaterThan(0),
    );

    const { images, isLoading } = result.current;

    expect( images.length ).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy();
  });
  
});
