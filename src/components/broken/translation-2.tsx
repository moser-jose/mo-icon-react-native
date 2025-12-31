import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenTranslation2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 6a6 6 0 0 0-4.243 10.243m8.486 0A5.98 5.98 0 0 0 18 12a5.97 5.97 0 0 0-1-3.318"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 2c5.523 0 10 4.477 10 10a9.97 9.97 0 0 1-2.929 7.071m-14.142 0A9.97 9.97 0 0 1 2 12a10 10 0 0 1 5-8.662"/><circle cx="12" cy="12" r="2" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-width="1.5" d="M9.887 17.344c.96-.876 1.44-1.314 2.032-1.342q.081-.004.162 0c.593.028 1.072.466 2.032 1.342 2.087 1.906 3.13 2.858 2.839 3.68a1.3 1.3 0 0 1-.094.206c-.43.77-1.906.77-4.858.77s-4.428 0-4.858-.77a1.4 1.4 0 0 1-.094-.206c-.292-.822.752-1.774 2.84-3.68Z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenTranslation2);
