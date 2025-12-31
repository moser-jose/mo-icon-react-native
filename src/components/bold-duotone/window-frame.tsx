import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneWindowFrame: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 2c4.714 0 7.071 0 8.535 1.464 1.08 1.08 1.364 2.647 1.439 5.286L22 9.5H2.026v-.75c.075-2.64.358-4.205 1.438-5.286C4.93 2 7.286 2 12 2" opacity=".5"/><path fill="${color}" d="M13 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/><path fill="${color}" d="M2 12c0 4.714 0 7.071 1.464 8.535 1.01 1.01 2.446 1.324 4.786 1.421L9 22V9.5H2.026l-.023.75Q2 11.066 2 12" opacity=".7"/><path fill="${color}" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22c-.819 0-2.316 0-3-.008V9.5h13l-.003.75Q22 11.066 22 12"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneWindowFrame);
