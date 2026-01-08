import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneTornado: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 3c-4.97 0-9 .672-9 1.5S7.03 6 12 6s9-.672 9-1.5c0-.52-1.588-.978-4-1.247"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20 8s-2.791 1-8.276 1S4 8 4 8m12 6s-1.258.5-4 .5-4-.5-4-.5" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M16 16.5c-.748.255-1.648.5-3 .5s-2.342-.121-3-.245"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M11.719 19.462q.575.038 1.281.039a9.3 9.3 0 0 0 1.5-.114" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M18 11s-.515 1-6 1m-6-1s.219.425 1.892.721M13 22h.5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneTornado };
export default React.memo(OutlineDuotoneTornado);
