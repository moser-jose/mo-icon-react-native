import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneTram: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M6.376 19.572c-.478-.17-.87-.41-1.204-.744-.975-.974-1.139-2.442-1.166-5.078h15.988c-.027 2.636-.191 4.104-1.166 5.078a3.15 3.15 0 0 1-1.203.744l1.046 2.093a.75.75 0 1 1-1.342.67l-1.224-2.447C15.057 20 13.726 20 12 20s-3.057 0-4.105-.112L6.67 22.336a.75.75 0 0 1-1.342-.671zM14.75 16a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75M7 15.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/><path fill="${color}" d="M5.172 3.171C4 4.343 4 6.228 4 9.999v3.75h16V10c0-3.77 0-5.656-1.172-6.828-.878-.879-2.16-1.098-4.336-1.153A.48.48 0 0 0 14 2.5a2 2 0 1 1-4 0 .48.48 0 0 0-.492-.481c-2.177.055-3.458.274-4.336 1.153" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneTram };
export default React.memo(BoldDuotoneTram);
