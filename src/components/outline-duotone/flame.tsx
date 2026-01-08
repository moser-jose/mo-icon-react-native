import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneFlame: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M15.359 21.751c2.023-.63 4.641-2.496 4.641-6.75 0-4.623-5.056-9.587-8.427-12.155-.557-.424-1.357-.119-1.617.531C8.31 7.495 4 11.854 4 15c0 3.107 2.246 5.309 4.081 6.372"/><path stroke="${color}" stroke-width="1.5" d="M15.359 21.751c-.432.134-.715-.369-.457-.74.88-1.265 1.898-3.195 1.898-5.01 0-1.951-1.644-4.254-2.928-5.675-.293-.324-.805-.11-.821.328-.053 1.45-.282 3.388-1.268 4.908a.412.412 0 0 1-.677.036c-.308-.39-.616-.871-.924-1.251-.166-.205-.466-.208-.657-.027-.747.707-1.792 1.809-1.792 3.18 0 .99.472 2.22.958 3.174.22.433-.189.941-.61.698" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneFlame };
export default React.memo(OutlineDuotoneFlame);
