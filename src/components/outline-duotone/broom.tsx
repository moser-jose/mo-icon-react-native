import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneBroom: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M12.728 5.536a4 4 0 1 1 5.657 5.657M3.58 12.979l-.667-1.096C2.04 10.175 2.6 7.965 4.408 7.011c.854-.45 1.81-.879 2.761-1.15 2.86-.818 5.366-.518 5.366-.518l6.043 6.043s.3 2.506-.518 5.365c-.272.951-.7 1.908-1.15 2.762-.955 1.807-3.164 2.367-4.873 1.495l-1.096-.667a22 22 0 0 1-7.361-7.362Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m20.506 3.414-2.121 2.121" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneBroom };
export default React.memo(OutlineDuotoneBroom);
