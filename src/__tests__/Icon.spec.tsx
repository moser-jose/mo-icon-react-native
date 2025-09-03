import React from "react";

const { Icon } = require("../components/react-native-icon");
jest.mock("../registry", () => {
  const React = require("react");
  const MockSvg = (props: any) => React.createElement("svg", props);

  // Importa o módulo real e reaproveita o export original
  const actual = jest.requireActual<typeof import("../registry")>("../registry");

  return {
    ...actual,
    iconRegistry: {
      ...actual.iconRegistry
    },
  };
});

jest.mock("react-native-svg", () => ({
  SvgXml: (props: any) => {
    const React = require("react");
    return React.createElement("svg", props);
  },
}));


describe("Icon", () => {
  it("should be able to render an existing icon", () => {
    const element = Icon({
      name: "archive",
      type: "bold-duotone",
      size: 24,
      color: "#111",
    });
    expect(element).toBeTruthy();
  });

  it("should be able to render an existing icon without type", () => {
    const element = Icon({
      name: "archive",
      size: 24,
      color: "#111",
    });
    expect(element).toBeTruthy();
  });

  it("should be able to render an existing icon without type and color", () => {
    const element = Icon({
      name: "archive",
      size: 24,
    });
    expect(element).toBeTruthy();
  });

  it("returns null for icon without name", () => {
    const warn = jest.spyOn(console, "warn").mockImplementation(() => {});
    const element = Icon({
      size: 24,
    });
    expect(element).toBeNull();
    expect(warn).toHaveBeenCalled();
    warn.mockRestore();
  });



  it("returns null for unknown icon and logs a warning", () => {
    const warn = jest.spyOn(console, "warn").mockImplementation(() => {});
    const element = Icon({ name: "does-not-exist", type: "outline" });
    expect(element).toBeNull();
    expect(warn).toHaveBeenCalled();
    warn.mockRestore();
  });
});
