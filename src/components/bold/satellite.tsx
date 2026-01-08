import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldSatellite: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="m21.565 10.492.266.067a6.001 6.001 0 0 0-8.399-8.384l.076.26.284.854.003.007.017.045q.024.066.088.206c.084.187.225.47.44.829.432.718 1.164 1.747 2.35 2.934 1.187 1.186 2.216 1.918 2.935 2.35.359.215.642.356.828.44a4 4 0 0 0 .25.105l.006.002h.001zm-7.907 11.144 4.913-8.844a6 6 0 0 0 2.47-1.356l-6.072 10.928a.75.75 0 0 1-1.311-.728m-.337-9.896 2.849-2.849c1.053.98 1.98 1.633 2.683 2.055q.316.187.567.318l-.849 1.528a6 6 0 0 1-5.25-1.052m-1.061-1.06a6 6 0 0 0 1.06 1.06l-7.79 7.79a.75.75 0 0 1-1.06-1.06zm-1.052-5.25 1.528-.85q.13.251.319.567c.421.703 1.074 1.63 2.054 2.683l-2.85 2.85a6 6 0 0 1-1.05-5.25m0 0a6 6 0 0 1 1.356-2.47L1.636 9.031a.75.75 0 0 0 .728 1.311z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldSatellite };
export default React.memo(BoldSatellite);
