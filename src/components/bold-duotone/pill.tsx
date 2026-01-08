import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotonePill: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M3.99 13.602a6.796 6.796 0 0 1 9.612-9.611l6.407 6.407a6.796 6.796 0 1 1-9.61 9.611z" opacity=".5"/><path fill="${color}" d="m7.807 17.419-1.253-1.254.495-.095h.001l.014-.004q.023-.004.074-.017.104-.024.315-.091c.282-.09.697-.243 1.21-.49 1.024-.493 2.438-1.364 3.939-2.866 1.501-1.501 2.372-2.915 2.866-3.94.247-.512.4-.927.49-1.209a5 5 0 0 0 .109-.389l.003-.014.095-.496 1.254 1.253-.032.103c-.11.342-.288.824-.568 1.404-.56 1.162-1.525 2.717-3.156 4.349-1.632 1.631-3.187 2.597-4.349 3.156a11 11 0 0 1-1.507.6"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotonePill };
export default React.memo(BoldDuotonePill);
