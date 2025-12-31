import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldStickerCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M2 12C2 6.477 6.477 2 12 2c5.013 0 9.165 3.689 9.888 8.5h-.202c-2.49 0-4.126-.001-5.493.477a8.5 8.5 0 0 0-5.216 5.216c-.478 1.367-.478 3.003-.477 5.493v.202C5.689 21.164 2 17.013 2 12"/><path fill="${color}" d="m21.242 13.708-7.534 7.534a3 3 0 0 1-.369.312A2.33 2.33 0 0 1 12 22c0-.552 0-1.049.003-1.5.012-1.834.075-2.911.39-3.812a7 7 0 0 1 4.295-4.295c.9-.315 1.978-.378 3.812-.39C20.951 12 21.448 12 22 12c0 .486-.169.946-.446 1.34a3 3 0 0 1-.312.368"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldStickerCircle);
