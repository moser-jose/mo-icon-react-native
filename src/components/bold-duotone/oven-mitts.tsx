import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneOvenMitts: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="m13.298 20.026 6.78-6.63a6.315 6.315 0 0 0 0-9.072c-2.562-2.505-6.716-2.505-9.278 0l-.466.455C9.915 3.152 8.668 1.98 7.214 2c-1.773.027-3.182 1.817-3.147 4l-.033 3.34c-.007.757-.01 1.135-.144 1.47l-.004.011 9.307 9.308z"/><path fill="${color}" d="m4.019 16.537 3.569 3.49C8.933 21.341 9.606 22 10.443 22c.814 0 1.473-.624 2.75-1.871L3.886 10.82c-.136.333-.432.654-1.017 1.29-.58.63-.869 1.098-.869 1.635 0 .817.673 1.475 2.019 2.791" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneOvenMitts };
export default React.memo(BoldDuotoneOvenMitts);
