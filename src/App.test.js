import React from "react";
import renderer from "react-test-renderer";
import App from './App'

// Sintaxis de cómo se escribe una prueba en Jest
describe("Sintaxis de cómo se usa Jest", () => {
  it("Suma 2 números", () => {
    expect(1 + 2).toEqual(3);
    expect(2 + 2).toEqual(4);
  });
});

// El componente se muestra de manera correcta
test("El componente se muestra", () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});