import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneBowling: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="${color}" stroke-width="1.5"/><circle cx="12" cy="7" r="1.5" stroke="${color}" stroke-width="1.5" opacity=".5" transform="rotate(-90 12 7)"/><circle cx="12" cy="12" r="1.5" stroke="${color}" stroke-width="1.5" opacity=".5" transform="rotate(-90 12 12)"/><path stroke="${color}" stroke-width="1.5" d="M8 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneBowling);
