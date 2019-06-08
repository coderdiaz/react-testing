import React from "react";
import { mount } from "enzyme";

import Counter from "./Counter";

test("El botón del componente agregue uno", () => {
  const component = mount(<Counter />);

  component.find('[className="suma"]').simulate("click");
  expect(component.find("p").equals(<p>La cuenta es: 1</p>)).toEqual(true);

  component.find('[className="resta"]').simulate("click");
  expect(component.find("p").equals(<p>La cuenta es: 0</p>)).toEqual(true);
  component.unmount();
});
