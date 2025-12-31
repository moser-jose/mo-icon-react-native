import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneVirus: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12.057 19A6.865 6.865 0 0 0 19 12.057C18.969 8.19 15.81 5.03 11.944 5A6.865 6.865 0 0 0 5 11.944c.031 3.865 3.19 7.025 7.057 7.056Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m18 6-1.05 1.05M5 5l2 2" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m17.05 18.05-.55-.55"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M6 19.05 7.05 18" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M16.5 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/><path stroke="${color}" stroke-width="1.5" d="M11 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" opacity=".5"/><circle cx="9" cy="13" r="1" fill="${color}" opacity=".5"/><circle cx="19.5" cy="4.5" r="1.5" stroke="${color}" stroke-width="1.5"/><circle cx="1.5" cy="1.5" r="1.5" stroke="${color}" stroke-width="1.5" transform="matrix(-1 0 0 1 5 2)"/><path stroke="${color}" stroke-width="1.5" d="M2 12a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z" opacity=".5"/><circle cx="1.5" cy="1.5" r="1.5" stroke="${color}" stroke-width="1.5" transform="matrix(1 0 0 -1 17.05 21.05)"/><circle cx="4.5" cy="20.5" r="1.5" stroke="${color}" stroke-width="1.5" transform="rotate(180 4.5 20.5)"/><path stroke="${color}" stroke-width="1.5" d="M13.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm6 10a1.5 1.5 0 1 0-.5-2.915v2.83q.236.084.5.085ZM10.585 19a1.5 1.5 0 0 0 2.83 0z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneVirus);
