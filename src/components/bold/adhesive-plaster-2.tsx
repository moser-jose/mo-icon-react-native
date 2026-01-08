import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldAdhesivePlaster2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="m20.91 13.332-7.578 7.577a5.41 5.41 0 0 0 7.577-7.577"/><path fill="${color}" fill-rule="evenodd" d="m12.235 19.885 7.65-7.65-8.12-8.12-7.65 7.65zm-2.356-8.592a1 1 0 1 1-1.414 1.414 1 1 0 0 1 1.414-1.414m2.828 4.243a1 1 0 1 0-1.414-1.415 1 1 0 0 0 1.414 1.415m0-7.071a1 1 0 1 1-1.414 1.414 1 1 0 0 1 1.414-1.414m2.828 4.242a1 1 0 1 0-1.414-1.414 1 1 0 0 0 1.414 1.414" clip-rule="evenodd"/><path fill="${color}" d="m3.09 10.668 7.578-7.577a5.41 5.41 0 0 0-7.577 7.577"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldAdhesivePlaster2 };
export default React.memo(BoldAdhesivePlaster2);
