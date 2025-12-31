import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneVideoFrameReplace: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M2 6c0-1.886 0-2.828.586-3.414S4.114 2 6 2h5c1.886 0 2.828 0 3.414.586S15 4.114 15 6s0 2.828-.586 3.414S12.886 10 11 10H6c-1.886 0-2.828 0-3.414-.586S2 7.886 2 6Zm8 12c0-1.886 0-2.828.586-3.414S12.114 14 14 14h3c1.886 0 2.828 0 3.414.586S21 16.114 21 18s0 2.828-.586 3.414S18.886 22 17 22h-3c-1.886 0-2.828 0-3.414-.586S10 19.886 10 18Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M6 2.5V10m5-7.5V10M2.5 6H6m5 0h4m-1.5 8.5V22m4-7.5V22M11 18h2.5m4 0H21" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m22 10-1 1-1-1"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 11v-1c0-.932 0-2.398-.152-2.765a2 2 0 0 0-1.083-1.083C19.398 6 18.932 6 18 6" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2 14 1-1 1 1"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 13v1c0 .932 0 2.398.152 2.765a2 2 0 0 0 1.083 1.083C4.602 18 5.068 18 6 18" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneVideoFrameReplace);
