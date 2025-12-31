import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineFaceScanCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5c0-.829.448-1.5 1-1.5s1 .671 1 1.5m-6 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5C8 9.67 8.448 9 9 9s1 .671 1 1.5"/><path fill="${color}" fill-rule="evenodd" d="M13.265 2.05a.75.75 0 0 1 .884-.586 10.76 10.76 0 0 1 8.386 8.386.75.75 0 1 1-1.47.299 9.26 9.26 0 0 0-7.214-7.215.75.75 0 0 1-.586-.884m-2.53 0a.75.75 0 0 1-.586.884 9.26 9.26 0 0 0-7.214 7.215.75.75 0 0 1-1.47-.299 10.76 10.76 0 0 1 8.386-8.386.75.75 0 0 1 .884.586M2.051 13.264a.75.75 0 0 1 .884.586 9.26 9.26 0 0 0 7.215 7.214.75.75 0 0 1-.299 1.47 10.76 10.76 0 0 1-8.386-8.385.75.75 0 0 1 .586-.885m19.898 0a.75.75 0 0 1 .586.885 10.76 10.76 0 0 1-8.386 8.385.75.75 0 0 1-.298-1.47 9.26 9.26 0 0 0 7.214-7.214.75.75 0 0 1 .884-.586M8.397 15.553a.75.75 0 0 1 1.05-.156c.728.54 1.607.852 2.553.852s1.825-.312 2.553-.852a.75.75 0 1 1 .894 1.205A5.77 5.77 0 0 1 12 17.749a5.77 5.77 0 0 1-3.447-1.147.75.75 0 0 1-.156-1.05" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineFaceScanCircle);
