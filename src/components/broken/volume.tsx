import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenVolume: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M5.959 8.578a3.2 3.2 0 0 1 1.381-1.3c.6-.277 1.286-.277 2.66-.277.512 0 .768 0 1.016-.042q.37-.063.712-.214c.23-.101.444-.242.871-.524l.22-.144C15.36 4.4 16.632 3.562 17.7 3.926c.205.07.403.17.58.295.922.648.993 2.157 1.133 5.174.052 1.118.087 2.074.087 2.606s-.035 1.488-.087 2.605c-.14 3.018-.21 4.526-1.133 5.175a2.3 2.3 0 0 1-.58.295c-1.067.364-2.339-.474-4.882-2.151l-.219-.145c-.427-.281-.64-.422-.871-.524a3 3 0 0 0-.712-.213C10.768 17 10.512 17 10 17c-1.374 0-2.06 0-2.66-.277a3.2 3.2 0 0 1-1.381-1.3c-.314-.582-.35-1.186-.424-2.395q-.017-.27-.026-.528"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenVolume);
