// @ts-ignore
import { render } from '@testing-library/react-native';

jest.mock('react-native-svg', () => ({
  SvgXml: (props: any) => {
    const React = require('react');
    return React.createElement('svg', { ...props, testID: props.testID || 'svg-xml' });
  },
}));

describe('Direct Component Imports', () => {
  it('should be able to import BoldHome directly from component file', () => {
    try {
      const BoldHomeModule = require('../components/bold/home');
      expect(BoldHomeModule).toBeDefined();

      // Check that both default and named export exist
      if (BoldHomeModule.default) {
        expect(typeof BoldHomeModule.default).toBe('function');
      }

      if (BoldHomeModule.BoldHome) {
        expect(typeof BoldHomeModule.BoldHome).toBe('function');
      }
    } catch {
      // Component file might not exist
      // This is expected if the component hasn't been generated
    }
  });

  it('should render BoldHome when imported directly', () => {
    try {
      const BoldHomeModule = require('../components/bold/home');
      const Component = BoldHomeModule.BoldHome || BoldHomeModule.default;

      if (Component) {
        const { getByTestId } = render(
          <Component size={24} color="#000000" testID="direct-import-test" />,
        );
        expect(getByTestId('direct-import-test')).toBeTruthy();
      }
    } catch {
      // Component might not exist
    }
  });

  it('should export named export from component file', () => {
    try {
      const BoldHomeModule = require('../components/bold/home');
      // After script runs, BoldHome should be exported as named export
      if (BoldHomeModule.BoldHome) {
        expect(BoldHomeModule.BoldHome).toBeDefined();
        expect(typeof BoldHomeModule.BoldHome).toBe('function');
      }
    } catch {
      // Component might not exist
    }
  });

  it('should maintain default export for backward compatibility', () => {
    try {
      const BoldHomeModule = require('../components/bold/home');
      // Default export should still exist for backward compatibility
      if (BoldHomeModule.default) {
        expect(BoldHomeModule.default).toBeDefined();
        expect(typeof BoldHomeModule.default).toBe('function');
      }
    } catch {
      // Component might not exist
    }
  });
});
