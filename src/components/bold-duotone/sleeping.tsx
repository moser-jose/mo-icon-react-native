import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneSleeping: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M2 5.25a.75.75 0 0 1 .75.75v9.25h19.893v.393l-.001.357v2a.75.75 0 1 1-1.5 0v-1.25H2.75V18a.75.75 0 0 1-1.5 0V6A.75.75 0 0 1 2 5.25" clip-rule="evenodd"/><path fill="${color}" d="M7 13.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m15.362-1.651a5 5 0 0 0-3.068-3.068c-.802-.281-1.8-.281-3.794-.281h-.002c-.798 0-1.838 0-2.159.112a2 2 0 0 0-1.227 1.227C12 10.16 12 10.56 12 11.357v3.893h10.643c-.001-1.737-.02-2.654-.28-3.401" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneSleeping };
export default React.memo(BoldDuotoneSleeping);
