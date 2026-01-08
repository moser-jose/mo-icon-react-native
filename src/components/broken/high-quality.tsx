import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenHighQuality: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M6 8v7.619M10.815 8v7.619M6 12h4.815M19 16l-1.926-1.524m-.963 1.143c-.447 0-.671 0-.857-.03-.764-.12-1.361-.592-1.513-1.197-.037-.147-.037-.324-.037-.678v-3.81c0-.353 0-.53.037-.677.152-.605.749-1.077 1.513-1.198C15.44 8 15.664 8 16.11 8c.448 0 .671 0 .857.03.764.12 1.361.592 1.514 1.197.037.147.037.324.037.678v3.81c0 .353 0 .53-.037.678-.152.604-.75 1.076-1.514 1.197-.186.029-.41.029-.857.029Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenHighQuality };
export default React.memo(BrokenHighQuality);
