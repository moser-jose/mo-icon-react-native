import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldPill: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M3.99 3.99a6.796 6.796 0 0 0 0 9.612l2.564 2.563.495-.095h.001l.014-.003.074-.018q.103-.024.315-.091c.282-.09.697-.243 1.21-.49 1.024-.493 2.438-1.364 3.939-2.866 1.501-1.501 2.372-2.915 2.866-3.939.247-.512.4-.928.49-1.21a5 5 0 0 0 .109-.389l.003-.014.095-.496-2.563-2.563a6.796 6.796 0 0 0-9.611 0m13.428 3.816-.032.103c-.11.343-.288.824-.568 1.404-.56 1.162-1.525 2.718-3.156 4.349s-3.187 2.597-4.349 3.157a11 11 0 0 1-1.507.599l2.591 2.59a6.796 6.796 0 1 0 9.611-9.61z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldPill);
