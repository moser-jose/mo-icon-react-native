import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneMicrophone2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M4 9a.75.75 0 0 1 .75.75v1a7.25 7.25 0 1 0 14.5 0v-1a.75.75 0 0 1 1.5 0v1a8.75 8.75 0 0 1-8 8.718v2.282a.75.75 0 0 1-1.5 0v-2.282a8.75 8.75 0 0 1-8-8.718v-1A.75.75 0 0 1 4 9" clip-rule="evenodd"/><path fill="${color}" d="M9.75 7.75A.75.75 0 0 0 9 7H6.298a5.751 5.751 0 0 1 11.404 0H13.5a.75.75 0 0 0 0 1.5h4.25V10H13.5a.75.75 0 0 0 0 1.5h4.201a5.751 5.751 0 0 1-11.403 0H9A.75.75 0 0 0 9 10H6.25V8.5H9a.75.75 0 0 0 .75-.75" opacity=".5"/><path fill="${color}" d="M12.75 10.75c0 .414.336.75.75.75h4.201l.049-1.5H13.5a.75.75 0 0 0-.75.75m0-3c0 .414.336.75.75.75h4.25L17.701 7H13.5a.75.75 0 0 0-.75.75m-3 0A.75.75 0 0 0 9 7H6.298L6.25 8.5H9a.75.75 0 0 0 .75-.75m0 3A.75.75 0 0 0 9 10H6.25l.048 1.5H9a.75.75 0 0 0 .75-.75"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneMicrophone2 };
export default React.memo(BoldDuotoneMicrophone2);
