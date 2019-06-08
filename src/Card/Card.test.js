import React from "react";
import { shallow } from "enzyme";
import Card from './Card'

describe("Primer Test con Enzyme", () => {
  it("Renderea el componente sin fallas", () => {
    shallow(<Card />);
  });
});