import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneClapperboardEdit: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M21.998 10.5c-.016-3.732-.162-5.735-1.463-7.036C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535c1.241 1.241 3.123 1.43 6.536 1.46"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M21.5 8h-19M7 8l3.5-5.5m3 5.5L17 2.5" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="m18.562 13.935.417-.417a1.77 1.77 0 1 1 2.503 2.503l-.417.417m-2.503-2.503s.052.887.834 1.669 1.669.834 1.669.834m-2.503-2.503-3.835 3.835c-.26.26-.39.39-.5.533a3 3 0 0 0-.338.545c-.078.164-.136.338-.252.686l-.372 1.116-.12.36m7.92-4.572-3.835 3.835c-.26.26-.39.39-.533.5a3 3 0 0 1-.545.338c-.164.078-.338.136-.686.252l-1.116.372-.36.12m0 0-.362.12a.477.477 0 0 1-.604-.603l.12-.361m.845.844-.844-.844"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneClapperboardEdit };
export default React.memo(OutlineDuotoneClapperboardEdit);
