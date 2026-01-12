import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneCloudSnowfallMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M13 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3-1.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/><path fill="${color}" d="M12 19a1 1 0 0 0 .781-.376.997.997 0 0 0-.182-1.425.995.995 0 0 0-1.198 0A.999.999 0 0 0 12 19m3-1.5a1 1 0 0 1-.781-.376A1 1 0 1 1 15 17.5m-6-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/><path fill="${color}" d="M16.286 19C19.442 19 22 16.472 22 13.353c0-2.472-1.607-4.573-3.845-5.338C17.837 5.194 15.415 3 12.476 3 9.32 3 6.762 5.528 6.762 8.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765S3.919 19 6.286 19z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneCloudSnowfallMinimalistic };
export default React.memo(BoldDuotoneCloudSnowfallMinimalistic);
