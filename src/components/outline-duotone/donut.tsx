import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneDonut: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="${color}" stroke-width="1.5"/><circle cx="12" cy="12" r="3" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-width="1.5" d="M2 13s2.2 2 4 2c1.212 0 2.606-.908 3.387-1.5m4.613.724c.471.415 1.088.776 1.805.776 1.69 0 1.69-2 3.38-2 1.077 0 1.925.814 2.399 1.403" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M14.5 7 16 5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m19 7 1-1" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m12 5-1-1"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m10.5 7-1.366.366m7.516 1.611.066 1.412" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20.678 10.085 19 11.563"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7 5 6 4" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m6.792 9.144-.585-1.288m-.542 4.785L6.5 11.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m3.683 10.35-.079-1.412" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneDonut);
