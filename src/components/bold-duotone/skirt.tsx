import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneSkirt: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M10 5.5h4l1.96 16.178A23.4 23.4 0 0 1 12 22c-1.495 0-2.812-.125-3.961-.322z" opacity=".6"/><path fill="${color}" d="M5.838 5.5 2.08 17.953c-.216.716.001 1.485.654 1.876.984.591 2.717 1.404 5.304 1.849L9.999 5.5z" opacity=".4"/><path fill="${color}" d="M21.266 19.83c.652-.392.87-1.161.654-1.877L18.162 5.5H14l1.96 16.178c2.587-.444 4.32-1.258 5.306-1.849" opacity=".7"/><path fill="${color}" d="M16.109 2H7.892c-.968 0-1.452 0-1.753.293S5.838 3.057 5.838 4v1.5h12.325V4c0-.943 0-1.414-.301-1.707C17.562 2 17.077 2 16.109 2"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneSkirt };
export default React.memo(BoldDuotoneSkirt);
