import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldCloudSun: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M16.286 20C19.442 20 22 17.472 22 14.353c0-2.472-1.607-4.573-3.845-5.338C17.837 6.194 15.415 4 12.476 4 9.32 4 6.762 6.528 6.762 9.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 11.53 2 13.426 2 15.765S3.919 20 6.286 20z"/><path fill="${color}" d="M9.94 2.955a5 5 0 0 0-6.327 7.723 5.8 5.8 0 0 1 1.664-.561 7 7 0 0 1-.015-.47c0-3.073 1.951-5.677 4.678-6.692"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldCloudSun);
