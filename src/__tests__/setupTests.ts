jest.mock('react-native', () => {
  const React = require('react');
  return {
    Platform: {
      OS: 'ios',
      select: jest.fn((obj) => obj.ios),
    },
    StyleSheet: {
      create: jest.fn((styles) => styles),
    },
    View: (props: any) => React.createElement('View', props),
    Text: (props: any) => React.createElement('Text', props),
  };
});

jest.mock('react-native-svg', () => ({
  SvgXml: (props: any) => {
    const React = require('react');
    return React.createElement('svg', props);
  },
}));
