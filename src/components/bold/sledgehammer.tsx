import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldSledgehammer: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M7.604 4.604C9.34 2.868 10.208 2 11.286 2c1.079 0 1.947.868 3.682 2.604l4.42 4.419c1.735 1.735 2.603 2.603 2.603 3.682s-.868 1.946-2.604 3.682-2.604 2.604-3.682 2.604c-1.079 0-1.947-.868-3.682-2.604l-4.42-4.419C5.869 10.233 5 9.365 5 8.286s.868-1.946 2.604-3.682m-.32 9.166-4.458 4.46c-.343.342-.514.513-.617.691a1.56 1.56 0 0 0 0 1.563c.103.178.274.349.617.691.342.343.513.514.692.617a1.56 1.56 0 0 0 1.562 0c.178-.103.35-.274.692-.617l4.458-4.458z"/><path fill="${color}" d="m8.345 12.71.004-.005 2.946 2.946-.005.005zm11.324-5.527a1.56 1.56 0 0 0-.024-1.519c-.103-.178-.275-.35-.617-.692s-.514-.513-.692-.616a1.56 1.56 0 0 0-1.519-.024z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldSledgehammer };
export default React.memo(BoldSledgehammer);
