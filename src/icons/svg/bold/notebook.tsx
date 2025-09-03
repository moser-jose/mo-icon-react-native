import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldNotebook: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none"><path fill="${color}" fill-rule="evenodd" d="M8.75 2.013V22H15c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2H9zm2 4.487a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75M3 7.25c.008-2.336.081-3.574.879-4.371.675-.675 1.666-.832 3.371-.868v19.978c-1.705-.036-2.696-.193-3.371-.868-.798-.797-.871-2.035-.878-4.371H4a.75.75 0 0 0 0-1.5H3v-2.5h1a.75.75 0 0 0 0-1.5H3v-2.5h1a.75.75 0 0 0 0-1.5zm0 0H2a.75.75 0 0 0 0 1.5h1zm0 5.5H2a.75.75 0 0 1 0-1.5h1zm0 2.5H2a.75.75 0 0 0 0 1.5h1z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldNotebook);
