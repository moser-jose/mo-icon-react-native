import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenMapArrowLeft: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m10 7.403-7.007 3.125c-1.324.59-1.324 2.354 0 2.944l16.51 7.363c1.495.667 3.047-.814 2.306-2.202l-3.152-5.904c-.245-.459-.245-1 0-1.458l3.152-5.904c.74-1.388-.81-2.87-2.306-2.202L14.75 5.284"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenMapArrowLeft };
export default React.memo(BrokenMapArrowLeft);
