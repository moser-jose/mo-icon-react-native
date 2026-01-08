import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenMapArrowUp: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m7.403 10 3.125-7.007c.59-1.324 2.354-1.324 2.944 0l7.363 16.51c.667 1.495-.814 3.047-2.202 2.306l-5.904-3.152c-.459-.245-1-.245-1.458 0l-5.904 3.152c-1.388.74-2.87-.81-2.202-2.306l2.119-4.752"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenMapArrowUp };
export default React.memo(BrokenMapArrowUp);
