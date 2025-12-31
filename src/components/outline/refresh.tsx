import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineRefresh: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M2.93 11.2c.072-4.96 4.146-8.95 9.149-8.95a9.16 9.16 0 0 1 7.814 4.357.75.75 0 0 1-1.277.786 7.66 7.66 0 0 0-6.537-3.643c-4.185 0-7.575 3.328-7.648 7.448l.4-.397a.75.75 0 0 1 1.057 1.065l-1.68 1.666a.75.75 0 0 1-1.056 0l-1.68-1.666A.75.75 0 1 1 2.528 10.8zm16.856-.733a.75.75 0 0 1 1.055 0l1.686 1.666a.75.75 0 1 1-1.054 1.067l-.41-.405c-.07 4.965-4.161 8.955-9.18 8.955a9.2 9.2 0 0 1-7.842-4.356.75.75 0 1 1 1.277-.788 7.7 7.7 0 0 0 6.565 3.644c4.206 0 7.61-3.333 7.68-7.453l-.408.403a.75.75 0 1 1-1.055-1.067z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineRefresh);
