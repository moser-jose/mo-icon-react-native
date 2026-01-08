import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenMusicNote4: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12.114 20.376a.75.75 0 1 0-1.298-.751zM11.464 16l-.648.375zM12 17l-.667.344A.75.75 0 0 0 12.75 17zm.75-9a.75.75 0 0 0-1.5 0zM8 21.25A3.25 3.25 0 0 1 4.75 18h-1.5A4.75 4.75 0 0 0 8 22.75zM4.75 18A3.25 3.25 0 0 1 8 14.75v-1.5A4.75 4.75 0 0 0 3.25 18zm6.066 1.625A3.25 3.25 0 0 1 8 21.25v1.5c1.76 0 3.294-.957 4.114-2.375zM8 14.75a3.25 3.25 0 0 1 2.816 1.625l1.298-.75A4.75 4.75 0 0 0 8 13.25zm2.816 1.625c.08.14.208.378.32.59l.14.268.042.081.012.022.002.006.001.001L12 17l.667-.344-.002-.002-.015-.03-.043-.083-.144-.275a20 20 0 0 0-.349-.641zM12.75 17V8h-1.5v9z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m16.117 3.942-2.634 1.317c-.365.182-.547.273-.698.389a2 2 0 0 0-.75 1.212c-.035.187-.035.39-.035.8 0 .97 0 1.456.12 1.786a2 2 0 0 0 2.112 1.306c.348-.04.783-.258 1.651-.692l2.634-1.317c.365-.182.547-.274.698-.389a2 2 0 0 0 .75-1.213C20 6.954 20 6.75 20 6.342c0-.971 0-1.457-.12-1.787a2 2 0 0 0-2.112-1.305c-.348.04-.783.258-1.651.692Z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenMusicNote4 };
export default React.memo(BrokenMusicNote4);
