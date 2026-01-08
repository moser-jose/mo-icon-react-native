import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneBones: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.48 2.045V4.06c0 .557-.475.999-.96 1.273-.914.518-1.558 1.706-1.558 2.757a2.519 2.519 0 1 0 5.038 0 2.519 2.519 0 0 0 5.038 0c0-1.05-.644-2.239-1.559-2.757-.484-.274-.96-.716-.96-1.273V2.045M9.519 22v-2.015c0-.557-.476-.999-.96-1.273C7.643 18.194 7 17.006 7 15.954a2.519 2.519 0 1 1 5.038 0 2.519 2.519 0 0 1 5.038 0c0 1.052-.644 2.24-1.559 2.758-.484.274-.96.716-.96 1.273V22"/><path stroke="${color}" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneBones };
export default React.memo(OutlineDuotoneBones);
