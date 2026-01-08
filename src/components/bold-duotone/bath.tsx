import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneBath: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M2 11h-.25a.75.75 0 0 0 0 1.5H2v.355c0 .375 0 .595.016.84.142 2.237 1.35 4.302 3.102 5.652.157.126.913.588 1.27.803a7.4 7.4 0 0 0 2.581.765c.245.025.394.03.648.04h.007c.74.028 1.464.045 2.126.045s1.386-.017 2.126-.045h.007c.254-.01.404-.015.648-.04a7.4 7.4 0 0 0 2.58-.765c.339-.2 1.067-.639 1.272-.803 1.751-1.35 2.96-3.416 3.102-5.652.015-.245.015-.465.015-.84v-.038c0-.06 0-.123-.004-.18a2 2 0 0 0-.014-.137h.268a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/><path fill="${color}" d="m5.118 19.348-.039.067-1 2a.75.75 0 0 0 1.342.671l.968-1.935c-.358-.216-1.114-.678-1.271-.803m11.993.802.968 1.935a.75.75 0 0 0 1.342-.67l-1-2-.039-.068c-.204.164-.932.604-1.27.803M3.5 4.135a1.635 1.635 0 0 1 3.153-.607l.144.358 1.36-.64-.11-.275A3.135 3.135 0 0 0 2 4.135V11h1.5z" opacity=".5"/><path fill="${color}" d="M6.797 3.886a4.1 4.1 0 0 0-1.38 1.774 4.18 4.18 0 0 0-.02 3.107.75.75 0 0 0 .995.414l5.96-2.567a.75.75 0 0 0 .402-.963 3.97 3.97 0 0 0-2.133-2.213 3.84 3.84 0 0 0-2.465-.192z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneBath };
export default React.memo(BoldDuotoneBath);
