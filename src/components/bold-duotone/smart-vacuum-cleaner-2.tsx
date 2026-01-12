import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneSmartVacuumCleaner2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="m6.06 19-3.53 3.53a.75.75 0 0 1-1.06-1.06L5 17.94zm11.88 0 3.53 3.53a.75.75 0 1 0 1.06-1.06L19 17.94z" clip-rule="evenodd" opacity=".5"/><path fill="${color}" d="M9.75 8.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"/><path fill="${color}" fill-rule="evenodd" d="M12 21.5c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10M8.25 8.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m4.5 7a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneSmartVacuumCleaner2 };
export default React.memo(BoldDuotoneSmartVacuumCleaner2);
