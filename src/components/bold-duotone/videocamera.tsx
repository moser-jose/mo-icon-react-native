import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneVideocamera: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M2 11.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4 6.212 4 9.5 4c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C17 6.57 17 8.212 17 11.5v1c0 3.287 0 4.931-.908 6.038a4 4 0 0 1-.554.554C14.43 20 12.788 20 9.5 20c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 17.43 2 15.788 2 12.5z" opacity=".5"/><path fill="${color}" d="m17 9.5.658-.329c1.946-.973 2.92-1.46 3.63-1.02.712.44.712 1.528.712 3.703v.292c0 2.176 0 3.263-.711 3.703-.712.44-1.685-.047-3.63-1.02L17 14.5z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneVideocamera);
