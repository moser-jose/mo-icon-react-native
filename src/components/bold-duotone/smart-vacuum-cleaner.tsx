import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneSmartVacuumCleaner: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="m16.441 19.428-1 1.117.559.5a3.75 3.75 0 0 0 5.295-5.295l-.5-.559-1.118 1zm-8.883 0 1 1.117-.558.5a3.75 3.75 0 0 1-5.295-5.295l.5-.559 1.117 1z" opacity=".5"/><path fill="${color}" d="M12 6.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"/><path fill="${color}" fill-rule="evenodd" d="M22 11.75c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10m-13.75-3a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m4.5 7a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneSmartVacuumCleaner);
