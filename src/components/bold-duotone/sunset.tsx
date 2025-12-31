import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneSunset: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M7.25 22a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m-2.333 3.25H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/><path fill="${color}" d="M4.25 19a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75m1-7c0 1.178.302 2.286.833 3.25h11.834a6.75 6.75 0 0 0-5.167-9.96h-1.5a6.75 6.75 0 0 0-6 6.709" opacity=".5"/><path fill="${color}" d="M11.47 12.842a.75.75 0 0 0 1.06 0l2-2a.75.75 0 0 0-1.06-1.06l-.72.719v-5.21c-.447-.068-1.186-.028-1.5 0v5.21l-.72-.72a.75.75 0 1 0-1.06 1.061z"/><path fill="${color}" d="M4.398 4.4a.75.75 0 0 1 1.061 0l.393.392a.75.75 0 0 1-1.06 1.06l-.394-.392a.75.75 0 0 1 0-1.06m15.202 0a.75.75 0 0 1 0 1.06l-.392.393a.75.75 0 0 1-1.06-1.06l.392-.393a.75.75 0 0 1 1.06 0" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneSunset);
