import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldBones: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M2 12c0-4.714 0-7.071 1.464-8.536 1.177-1.176 2.93-1.408 6.017-1.453v2.05c0 .556-.476.998-.96 1.272-.915.518-1.56 1.707-1.56 2.758a2.519 2.519 0 0 0 5.039 0 2.519 2.519 0 0 0 5.038 0c0-1.051-.644-2.24-1.559-2.758-.484-.274-.96-.716-.96-1.273V2.01c3.088.046 4.84.278 6.016 1.454C22 4.93 22 7.286 22 12s0 7.07-1.465 8.535c-1.171 1.172-2.914 1.406-5.978 1.453v-2.004c0-.556.476-.998.96-1.272.915-.519 1.559-1.707 1.559-2.758a2.519 2.519 0 0 0-5.038 0 2.519 2.519 0 0 0-5.038 0c0 1.051.644 2.24 1.558 2.758.485.274.961.716.961 1.272v2.005c-3.111-.044-4.873-.273-6.055-1.454C2 19.071 2 16.714 2 12"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldBones };
export default React.memo(BoldBones);
