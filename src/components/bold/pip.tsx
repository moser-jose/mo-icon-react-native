import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldPip: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M13 17c0-1.886 0-2.828.586-3.414S15.114 13 17 13h1c1.886 0 2.828 0 3.414.586S22 15.114 22 17s0 2.828-.586 3.414S19.886 21 18 21h-1c-1.886 0-2.828 0-3.414-.586S13 18.886 13 17"/><path fill="${color}" d="M14 3h-4C6.229 3 4.343 3 3.172 4.172S2 7.229 2 11v2c0 3.771 0 5.657 1.172 6.828S6.229 21 10 21c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883v-2c0-2.828 0-4.243.879-5.121.878-.879 2.293-.879 5.121-.879H20c.949 0 1.423 0 1.717-.297.293-.298.287-.766.275-1.703-.034-2.634-.215-4.38-1.164-5.328C19.657 3 17.771 3 14 3"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldPip };
export default React.memo(BoldPip);
