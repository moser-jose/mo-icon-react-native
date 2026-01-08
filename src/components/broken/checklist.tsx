import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenChecklist: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 5.5 3.214 7 7.5 3M2 12.5 3.214 14 7.5 10M2 19.5 3.214 21 7.5 17"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 12h-5m-5 0h1.5M12 19h5m3.5 0H22m0-14H12"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenChecklist };
export default React.memo(BrokenChecklist);
