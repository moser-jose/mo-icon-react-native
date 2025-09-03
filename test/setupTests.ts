jest.mock("react-native-svg", () => ({
    SvgXml: (props: any) => {
      const React = require("react");
      return React.createElement("svg", props);
    },
  }));