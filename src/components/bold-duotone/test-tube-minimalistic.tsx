import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneTestTubeMinimalistic: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M3.187 15.048a4.085 4.085 0 0 0 0 5.759 4.04 4.04 0 0 0 5.734 0l3.746-3.762-1.772-.736a2.36 2.36 0 0 1-1.408-1.906 2.35 2.35 0 0 0-2.074-2.083h-1.51z"/><path fill="${color}" fill-rule="evenodd" d="M13.362 2.233a.8.8 0 0 1 1.132.003l7.273 7.305a.8.8 0 0 1-1.134 1.129L13.36 3.364a.8.8 0 0 1 .002-1.13" clip-rule="evenodd"/><path fill="${color}" d="M14.09 4.098 3.187 15.048a4.085 4.085 0 0 0 0 5.76 4.04 4.04 0 0 0 5.734 0L19.824 9.856z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneTestTubeMinimalistic };
export default React.memo(BoldDuotoneTestTubeMinimalistic);
