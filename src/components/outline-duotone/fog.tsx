import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneFog: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M14.381 7.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765c0 .82.236 1.586.645 2.235m4.471-6.391a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 7.78 22 9.881 22 12.353c0 1.39-.508 2.663-1.351 3.647" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 22h8"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 19h14" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 16h20"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneFog);
