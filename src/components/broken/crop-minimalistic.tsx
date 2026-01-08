import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenCropMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 19h-9c-3.771 0-5.657 0-6.828-1.172-.654-.653-.943-1.528-1.07-2.828M5 11V2m3 3h3c3.771 0 5.657 0 6.828 1.172.654.653.943 1.528 1.07 2.828M2 5h3m14 14v3m0-9v3"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenCropMinimalistic };
export default React.memo(BrokenCropMinimalistic);
