import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineBombEmoji: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 16.75a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5zm2-4.25c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5M9 14c.552 0 1-.672 1-1.5S9.552 11 9 11s-1 .672-1 1.5.448 1.5 1 1.5"/><path fill="${color}" fill-rule="evenodd" d="M19.717 2.078c-.436-1.104-1.998-1.104-2.434 0L16.66 3.66l-1.582.623c-1.104.436-1.104 1.998 0 2.434l.82.323-1.119 1.12a8.25 8.25 0 1 0 1.06 1.06l1.12-1.119.324.821c.436 1.104 1.998 1.104 2.434 0l.623-1.582 1.582-.623c1.104-.436 1.104-1.998 0-2.434L20.34 3.66zm-1.693 2.21.476-1.206.476 1.206c.133.337.4.603.736.736l1.206.476-1.206.476c-.337.133-.603.4-.736.736L18.5 7.918l-.476-1.206a1.3 1.3 0 0 0-.736-.736L16.082 5.5l1.206-.476c.337-.133.603-.4.736-.736M2.75 14.5a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineBombEmoji };
export default React.memo(OutlineBombEmoji);
