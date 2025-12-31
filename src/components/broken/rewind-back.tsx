import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenRewindBack: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m13 15.232 6.097 4.46c1.302.897 2.903-.27 2.903-2.118V15m-9-6.232 6.097-4.46C20.399 3.411 22 4.578 22 6.426V11M6.63 7.708l3.71-2.438c1.193-.785 2.66.237 2.66 1.853v9.754c0 1.616-1.467 2.638-2.661 1.853L2.92 13.853c-1.228-.807-1.228-2.899 0-3.706l.928-.61"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenRewindBack);
