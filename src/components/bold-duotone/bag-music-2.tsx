import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneBagMusic2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M4.082 10.894c.44-2.34.659-3.511 1.492-4.203C6.407 6 7.598 6 9.98 6h4.04c2.382 0 3.573 0 4.406.691.833.692 1.053 1.862 1.492 4.203l.75 4c.617 3.292.925 4.938.026 6.022C19.794 22 18.119 22 14.77 22H9.23c-3.35 0-5.024 0-5.924-1.084s-.59-2.73.026-6.022z" opacity=".5"/><path fill="${color}" d="M9.75 5a2.25 2.25 0 0 1 4.5 0v1c.566 0 1.062.002 1.5.015V5a3.75 3.75 0 1 0-7.5 0v1.015C8.688 6.002 9.184 6 9.75 6z"/><path fill="${color}" fill-rule="evenodd" d="M13.75 10a.75.75 0 0 0-1.5 0v3.55a2.75 2.75 0 1 0 1.5 2.45v-3.55c.375.192.8.3 1.25.3a.75.75 0 0 0 0-1.5c-.69 0-1.25-.56-1.25-1.25M11 14.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneBagMusic2);
