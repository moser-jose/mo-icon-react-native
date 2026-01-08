import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineTraffic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M16.114 21.932A10.75 10.75 0 1 1 12 1.25a.75.75 0 0 1 0 1.5A9.25 9.25 0 1 0 21.25 12a.75.75 0 0 1 1.5 0 10.75 10.75 0 0 1-6.636 9.932"/><path fill="${color}" d="M14.687 1.589a.75.75 0 1 0-.374 1.452 9.27 9.27 0 0 1 6.646 6.646.75.75 0 0 0 1.452-.374 10.77 10.77 0 0 0-7.724-7.724"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineTraffic };
export default React.memo(OutlineTraffic);
