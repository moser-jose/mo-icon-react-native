import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneTornadoSmall: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 5c-4.97 0-9 .672-9 1.5S7.03 8 12 8s9-.672 9-1.5c0-.52-1.588-.978-4-1.247"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20 10s-2.791 1-8.276 1S4 10 4 10m12 6s-1.258.5-4 .5-4-.5-4-.5" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M16 18.5c-.748.255-1.648.5-3 .5s-2.342-.121-3-.245M18 13s-.515 1-6 1m-6-1s.219.425 1.892.721"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneTornadoSmall };
export default React.memo(OutlineDuotoneTornadoSmall);
