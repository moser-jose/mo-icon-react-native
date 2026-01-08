import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneVolumeKnob: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 7v4" opacity=".5"/><path fill="${color}" d="M13 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/><path fill="${color}" d="M20.5 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-17 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2m3.197-7.718a1 1 0 1 1-1.414 1.414 1 1 0 0 1 1.414-1.414m12.021 12.022a1 1 0 1 1-1.415 1.414 1 1 0 0 1 1.415-1.414m0-10.608a1 1 0 1 1-1.415-1.414 1 1 0 0 1 1.415 1.414M6.697 18.718a1 1 0 1 1-1.414-1.414 1 1 0 0 1 1.414 1.414" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneVolumeKnob };
export default React.memo(OutlineDuotoneVolumeKnob);
