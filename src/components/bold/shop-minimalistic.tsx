import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldShopMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M19 14.25a.75.75 0 0 1 .75.75v6.25H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h1.25V15a.75.75 0 0 1 1.5 0v6.25h12.5V15a.75.75 0 0 1 .75-.75M16.528 2H7.472c-1.203 0-1.804 0-2.287.299-.484.298-.753.836-1.29 1.912L2.49 7.76c-.324.82-.608 1.786-.062 2.479A2 2 0 0 0 6 9a2 2 0 1 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 3.571 1.238c.546-.693.262-1.659-.062-2.479l-1.403-3.548c-.538-1.076-.807-1.614-1.29-1.912C18.331 2 17.73 2 16.527 2"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldShopMinimalistic };
export default React.memo(BoldShopMinimalistic);
