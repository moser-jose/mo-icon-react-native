import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldVirus: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M20 5.5a1.5 1.5 0 0 1-1.889 1.45l-.63.63a1 1 0 0 1-.073.064 7.1 7.1 0 0 1 1.409 2.867q.09-.01.183-.011a1.5 1.5 0 0 1 0 3h-.138a6.83 6.83 0 0 1-1.837 3.454l1.136 1.147a1.503 1.503 0 0 1 1.889 1.449 1.5 1.5 0 1 1-2.95-.389l-1.13-1.13a1 1 0 0 1-.105-.132 6.8 6.8 0 0 1-1.527.738l-.216.613a2.25 2.25 0 0 1-4.244 0l-.247-.7a7 7 0 0 1-1.4-.712l-1.377 1.41A2 2 0 1 1 5.81 18.17l1.255-1.286a7.14 7.14 0 0 1-1.75-2.909 2 2 0 1 1-.061-3.96A6.85 6.85 0 0 1 6.509 7.57l-.728-.728a2 2 0 1 1 1.06-1.06l.729.727a6.85 6.85 0 0 1 3.68-1.48v-.23a1.5 1.5 0 1 1 1.5 0v.254a7.1 7.1 0 0 1 3.606 1.538 1 1 0 0 1 .064-.071l.63-.631A1.5 1.5 0 1 1 20 5.5M11.75 13a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m-1.25-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M9 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" clip-rule="evenodd"/><path fill="${color}" d="M13.25 13a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldVirus);
