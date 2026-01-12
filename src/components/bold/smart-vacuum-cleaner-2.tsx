import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldSmartVacuumCleaner2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 6.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"/><path fill="${color}" fill-rule="evenodd" d="M18.52 19.332A9.96 9.96 0 0 1 12 21.75a9.96 9.96 0 0 1-6.52-2.418L2.53 22.28a.75.75 0 0 1-1.06-1.06l2.948-2.95A9.96 9.96 0 0 1 2 11.75c0-5.523 4.477-10 10-10s10 4.477 10 10a9.96 9.96 0 0 1-2.418 6.52l2.948 2.95a.75.75 0 1 1-1.06 1.06zM8.25 8.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m4.5 7a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldSmartVacuumCleaner2 };
export default React.memo(BoldSmartVacuumCleaner2);
