import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenTransmission: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0-16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 6v7m0 5v-2m-8 2v-7m0-5v2m16-2v2c0 1.886 0 2.828-.586 3.414S17.886 12 16 12h-6m-6 0h2"/><path fill="${color}" d="M18 15v-.75a.75.75 0 0 0-.75.75zm-.75 7a.75.75 0 0 0 1.5 0zm4.11.392a.75.75 0 1 0 1.28-.784zM18 15.75h2.286v-1.5H18zm.75 2.75V15h-1.5v3.5zm2.5-1.75c0 .567-.446 1-.964 1v1.5c1.375 0 2.464-1.134 2.464-2.5zm-.964-1c.518 0 .964.433.964 1h1.5c0-1.366-1.089-2.5-2.464-2.5zm0 2h-.429v1.5h.429zm-.429 0H18v1.5h1.857zm-.64 1.142 2.143 3.5 1.28-.784-2.143-3.5zM17.25 18.5V22h1.5v-3.5z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenTransmission);
