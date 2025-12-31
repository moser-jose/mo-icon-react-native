import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneBillFull: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M17.625 21a1.693 1.693 0 0 1 2.25 0A.676.676 0 0 0 21 20.495V3.505A.676.676 0 0 0 19.875 3c-.642.57-1.608.57-2.25 0a1.693 1.693 0 0 0-2.25 0c-.642.57-1.608.57-2.25 0a1.693 1.693 0 0 0-2.25 0c-.642.57-1.608.57-2.25 0a1.693 1.693 0 0 0-2.25 0c-.642.57-1.608.57-2.25 0A.676.676 0 0 0 3 3.505v16.99c0 .583.69.893 1.125.505a1.693 1.693 0 0 1 2.25 0c.642.57 1.608.57 2.25 0a1.693 1.693 0 0 1 2.25 0c.642.57 1.608.57 2.25 0a1.693 1.693 0 0 1 2.25 0c.642.57 1.608.57 2.25 0Z" opacity=".4"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7.5 15.5h9m-9-3.5h9m-9-3.5h9"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneBillFull);
