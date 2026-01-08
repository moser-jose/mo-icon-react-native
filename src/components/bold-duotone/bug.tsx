import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneBug: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M19 11.938V15a7 7 0 0 1-6.25 6.96V15a.75.75 0 0 0-1.5 0v6.96A7 7 0 0 1 5 15v-3.062A3.94 3.94 0 0 1 8.938 8h6.124A3.94 3.94 0 0 1 19 11.938" clip-rule="evenodd" opacity=".5"/><path fill="${color}" d="M19 14.75v-1.5h3a.75.75 0 1 1 0 1.5zm-1.504 4.587c.31-.394.58-.821.801-1.276l2.538 1.269a.75.75 0 1 1-.67 1.341zM5.703 18.06q.333.685.801 1.277L3.835 20.67a.75.75 0 0 1-.67-1.341zM5 13.25H2a.75.75 0 1 0 0 1.5h3zm12.354-4.515 2.81-1.406a.75.75 0 1 1 .671 1.342L18.42 9.879a4 4 0 0 0-1.065-1.144m-10.708 0c-.427.306-.79.695-1.067 1.144L3.165 8.671a.75.75 0 0 1 .67-1.342zM16.5 8.27V7.5a4.5 4.5 0 1 0-9 0v.77A3.9 3.9 0 0 1 8.938 8h6.124c.508 0 .993.096 1.438.27"/><path fill="${color}" d="M6.376 1.584a.75.75 0 0 0 .208 1.04l2.36 1.573a4.5 4.5 0 0 1 1.387-.877L7.416 1.376a.75.75 0 0 0-1.04.208m8.68 2.613a4.5 4.5 0 0 0-1.387-.877l2.915-1.944a.75.75 0 1 1 .832 1.248z" opacity=".5"/><path fill="${color}" fill-rule="evenodd" d="M12 14.25a.75.75 0 0 1 .75.75v7h-1.5v-7a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneBug };
export default React.memo(BoldDuotoneBug);
