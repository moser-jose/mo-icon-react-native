import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenPlain: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M16.212 8.848a.75.75 0 0 0-1.055-1.066zm-5.55 5.488 5.55-5.488-1.055-1.066-5.55 5.488z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M18.636 15.67c-1.21 3.63-1.816 5.446-2.703 5.962-.844.49-1.887.49-2.73 0-.888-.516-1.493-2.331-2.703-5.962-.195-.583-.292-.874-.455-1.118a2.2 2.2 0 0 0-.597-.597c-.244-.163-.535-.26-1.118-.454-3.63-1.21-5.446-1.816-5.962-2.703a2.72 2.72 0 0 1 0-2.731C2.884 7.18 4.7 6.575 8.33 5.364M20.026 11.5l.326-.98c1.5-4.498 2.25-6.747 1.062-7.934s-3.436-.438-7.935 1.062L12.423 4"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenPlain);
