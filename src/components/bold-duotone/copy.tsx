import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneCopy: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M6.6 11.397c0-2.726 0-4.089.843-4.936.844-.847 2.201-.847 4.917-.847h2.88c2.715 0 4.073 0 4.916.847.844.847.844 2.21.844 4.936v4.82c0 2.726 0 4.089-.844 4.936-.843.847-2.201.847-4.916.847h-2.88c-2.716 0-4.073 0-4.917-.847s-.843-2.21-.843-4.936z"/><path fill="${color}" d="M4.172 3.172C3 4.343 3 6.229 3 10v2c0 3.771 0 5.657 1.172 6.828.617.618 1.433.91 2.62 1.048-.192-.84-.192-1.996-.192-3.66v-4.819c0-2.726 0-4.089.843-4.936.844-.847 2.201-.847 4.917-.847h2.88c1.652 0 2.8 0 3.638.19-.138-1.193-.43-2.012-1.05-2.632C16.657 2 14.771 2 11 2S5.343 2 4.172 3.172" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneCopy };
export default React.memo(BoldDuotoneCopy);
