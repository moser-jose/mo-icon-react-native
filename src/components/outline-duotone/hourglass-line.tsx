import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneHourglassLine: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="m12 12-2.958 2.929c-2.922 2.894-4.383 4.341-3.974 5.59q.052.16.13.312C5.8 22 7.867 22 12 22s6.2 0 6.802-1.17q.078-.15.13-.311c.41-1.249-1.052-2.696-3.974-5.59zm0 0 2.958-2.929c2.922-2.894 4.383-4.341 3.974-5.59a2 2 0 0 0-.13-.312C18.2 2 16.133 2 12 2S5.8 2 5.198 3.17q-.078.15-.13.311c-.41 1.249 1.052 2.696 3.974 5.59z" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M10 5.5h4m-4 13h4"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneHourglassLine);
