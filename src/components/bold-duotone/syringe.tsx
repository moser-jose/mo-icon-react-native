import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneSyringe: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><g fill="${color}" opacity=".5"><path d="M17.804 9.11 14.89 6.196c-.8-.8-1.2-1.2-1.654-1.365a2.18 2.18 0 0 0-1.492 0c-.455.165-.855.565-1.654 1.365l-4.543 4.543a5.455 5.455 0 0 0 7.714 7.714l4.543-4.543c.8-.8 1.2-1.2 1.365-1.654a2.18 2.18 0 0 0 0-1.492c-.165-.455-.565-.855-1.365-1.654"/><path fill-rule="evenodd" d="M16.556 3.233a.795.795 0 0 1 1.125 0l3.086 3.086a.796.796 0 1 1-1.125 1.125l-3.086-3.086a.796.796 0 0 1 0-1.125" clip-rule="evenodd"/></g><path fill="${color}" d="m17.73 13.985-7.715-7.714L8.89 7.396l7.714 7.714zM5.026 17.85a5.5 5.5 0 0 0 1.125 1.125l-1.793 1.792a.796.796 0 1 1-1.125-1.125zM16.91 8.215 15.783 7.09l1.752-1.752 1.125 1.125zm-1.543 8.133-3.06-3.06a.796.796 0 1 0-1.126 1.125l3.061 3.06zm-1.736 1.736-1.746-1.746a.795.795 0 1 0-1.125 1.125l1.672 1.672q.44-.294.83-.681z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneSyringe };
export default React.memo(BoldDuotoneSyringe);
