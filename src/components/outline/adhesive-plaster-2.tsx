import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineAdhesivePlaster2: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M9.879 11.293a1 1 0 1 1-1.414 1.414 1 1 0 0 1 1.414-1.414m2.828 4.243a1 1 0 1 0-1.414-1.415 1 1 0 0 0 1.414 1.415m0-7.071a1 1 0 1 1-1.414 1.414 1 1 0 0 1 1.414-1.414m2.828 4.242a1 1 0 1 0-1.414-1.414 1 1 0 0 0 1.414 1.414"/><path fill="${color}" fill-rule="evenodd" d="M3.054 3.054a6.16 6.16 0 0 1 8.711 0l9.18 9.18a6.16 6.16 0 0 1-8.71 8.712l-9.18-9.18a6.16 6.16 0 0 1 0-8.712m7.078.573a4.66 4.66 0 0 0-6.505 6.505zm1.103 1.018-6.59 6.59 8.12 8.12 6.59-6.59zm9.138 9.223-6.505 6.505a4.66 4.66 0 0 0 6.505-6.505" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineAdhesivePlaster2 };
export default React.memo(OutlineAdhesivePlaster2);
