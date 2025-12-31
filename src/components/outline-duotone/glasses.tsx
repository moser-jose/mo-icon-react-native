import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneGlasses: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="18" cy="16" r="4" stroke="${color}" stroke-width="1.5"/><circle cx="6" cy="16" r="4" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m14 16.214-.656-.234a4 4 0 0 0-2.688 0l-.656.234M2 16l.763-8.395c.115-1.264.173-1.896.543-2.363s.972-.668 2.176-1.07L6 4m16 12-.763-8.395c-.115-1.264-.172-1.896-.542-2.363s-.973-.668-2.177-1.07L18 4" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneGlasses);
