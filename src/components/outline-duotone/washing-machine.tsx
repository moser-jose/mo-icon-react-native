import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneWashingMachine: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M6 22v-1m12 1v-1" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v3c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172S3 16.771 3 13z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M3 9h18" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M15 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M6.5 5.5h3"/><path fill="${color}" d="M15.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneWashingMachine };
export default React.memo(OutlineDuotoneWashingMachine);
