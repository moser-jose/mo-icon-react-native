import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenUserSpeakRounded: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="10" cy="6" r="4" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M19 2s2 1.2 2 4-2 4-2 4m-2-6s1 .6 1 2-1 2-1 2m-4 12.615c-.91.247-1.926.385-3 .385-3.866 0-7-1.79-7-4s3.134-4 7-4 7 1.79 7 4c0 .345-.077.68-.22 1"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenUserSpeakRounded };
export default React.memo(BrokenUserSpeakRounded);
