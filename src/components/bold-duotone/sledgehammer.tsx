import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneSledgehammer: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M7.604 4.604C9.34 2.868 10.208 2 11.286 2c1.079 0 1.947.868 3.682 2.604l4.42 4.419c1.735 1.735 2.603 2.603 2.603 3.682s-.868 1.946-2.604 3.682-2.604 2.604-3.682 2.604c-1.079 0-1.947-.868-3.682-2.604l-4.42-4.419C5.869 10.233 5 9.365 5 8.286s.868-1.946 2.604-3.682"/><path fill="${color}" d="m8.345 12.71-5.52 5.519c-.342.342-.513.513-.616.691a1.56 1.56 0 0 0 0 1.563c.103.178.274.349.617.691.342.343.513.514.692.617a1.56 1.56 0 0 0 1.562 0c.178-.103.35-.274.692-.617l5.518-5.518zm10.31-4.419.373-.373c.342-.342.514-.514.617-.692a1.56 1.56 0 0 0 0-1.562c-.103-.178-.275-.35-.617-.692s-.514-.513-.692-.616a1.56 1.56 0 0 0-1.562 0c-.178.103-.35.274-.692.616l-.373.373z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneSledgehammer };
export default React.memo(BoldDuotoneSledgehammer);
