import React from "react";
import { Icon } from "../components/react-native-icon";

jest.mock("../registry", () => {
  const actual = jest.requireActual<typeof import("../registry")>("../registry");

  return {
    ...actual,
    iconRegistry: {
      ...actual.iconRegistry,
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
      name: "bell",
      type: "outline-duotone",
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

  it("returns null for icon without name property", () => {
    const warn = jest.spyOn(console, "warn").mockImplementation(() => {});
    const element = Icon({
      name: '',
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
