import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneUploadTrack: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 22a10 10 0 0 0 3.75-.727v-1.537a2.25 2.25 0 0 1-1.841-3.827l2.5-2.5a2.25 2.25 0 0 1 3.182 0l1.862 1.862A10 10 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10" opacity=".5"/><path fill="${color}" fill-rule="evenodd" d="M17.47 14.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V22a.75.75 0 0 1-1.5 0v-5.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06z" clip-rule="evenodd"/><path fill="${color}" d="m12.75 11.213.99.495c.203.101.38.19.529.255.15.066.33.133.528.156a1.75 1.75 0 0 0 1.848-1.142 1.9 1.9 0 0 0 .096-.542c.009-.162.009-.361.009-.588v-.06c0-.161 0-.333-.031-.499a1.75 1.75 0 0 0-.656-1.06 2.6 2.6 0 0 0-.433-.252l-1.37-.685c-.203-.102-.38-.19-.529-.255a1.9 1.9 0 0 0-.528-.157 1.75 1.75 0 0 0-1.848 1.142 1.9 1.9 0 0 0-.097.543 9 9 0 0 0-.008.435v3.55a2.75 2.75 0 1 0 1.5 2.45z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneUploadTrack);
