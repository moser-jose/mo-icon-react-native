import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneThermometer: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17.096 10 1.3 1.3m-4.5 1.9 1.3 1.3m-4.51 1.909 1.301 1.3M5.58 20.558l.383-.384a2.01 2.01 0 0 1 1.647-.578l.799.09a3.02 3.02 0 0 0 2.47-.867l8.942-8.943a4.028 4.028 0 1 0-5.696-5.696L5.18 13.122a3.02 3.02 0 0 0-.866 2.47l.089.8a2.01 2.01 0 0 1-.578 1.646l-.384.383a1.51 1.51 0 0 0 2.137 2.137"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m9 15 6.5-6.5" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneThermometer };
export default React.memo(OutlineDuotoneThermometer);
