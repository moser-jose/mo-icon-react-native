import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineTestTubeMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M13.652 2.469a.75.75 0 0 1 1.061.002l6.819 6.849a.75.75 0 0 1-1.064 1.058l-.23-.231L10.02 20.411a4.54 4.54 0 0 1-6.438 0 4.58 4.58 0 0 1 0-6.457l2.682-2.695.01-.01 7.531-7.564-.155-.156a.75.75 0 0 1 .002-1.06m1.212 2.28L8.419 11.22a2.96 2.96 0 0 1 2.345 2.575c.058.522.39.971.867 1.178l1.192.495 6.357-6.385zm-3.185 11.87-.637-.265a2.96 2.96 0 0 1-1.769-2.394 1.455 1.455 0 0 0-1.281-1.289l-.915-.102-2.432 2.443a3.08 3.08 0 0 0 0 4.34 3.04 3.04 0 0 0 4.312 0z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineTestTubeMinimalistic };
export default React.memo(OutlineTestTubeMinimalistic);
