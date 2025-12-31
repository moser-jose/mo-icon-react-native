import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneBones: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"/><path fill="${color}" d="M9.48 10.61A2.52 2.52 0 0 0 12 8.093a2.519 2.519 0 0 0 5.038 0c0-1.052-.644-2.24-1.559-2.758-.484-.274-.96-.716-.96-1.273v-2.05H9.48v2.05c0 .557-.476.999-.96 1.273-.915.518-1.56 1.706-1.56 2.758a2.52 2.52 0 0 0 2.52 2.518m5.077 11.378v-2.004c0-.556.476-.998.96-1.272.915-.519 1.559-1.707 1.559-2.758a2.519 2.519 0 0 0-5.038 0 2.519 2.519 0 0 0-5.038 0c0 1.051.644 2.24 1.558 2.758.485.274.961.716.961 1.272v2.005z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneBones);
