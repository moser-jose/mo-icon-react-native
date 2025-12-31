import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldThreeSquares: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 6c0-1.886 0-2.828.586-3.414S14.114 2 16 2h2c1.886 0 2.828 0 3.414.586S22 4.114 22 6v2c0 1.886 0 2.828-.586 3.414S19.886 12 18 12h-2c-1.886 0-2.828 0-3.414-.586S12 9.886 12 8z"/><path fill="${color}" d="M10.5 7c-1.557.005-2.383.054-2.914.586C7 8.172 7 9.114 7 11v2c0 1.437 0 2.327.26 2.928a1.5 1.5 0 0 0 .326.486C8.172 17 9.114 17 11 17h2c1.886 0 2.828 0 3.414-.586.532-.531.581-1.357.585-2.914h-1.088c-.866 0-1.66 0-2.305-.087-.711-.095-1.463-.32-2.08-.938-.619-.618-.844-1.37-.94-2.08-.086-.646-.086-1.44-.086-2.305z"/><path fill="${color}" d="M5.5 12c-1.557.005-2.383.054-2.914.586C2 13.172 2 14.114 2 16v2c0 1.886 0 2.828.586 3.414S4.114 22 6 22h2c1.886 0 2.828 0 3.414-.586.532-.531.581-1.357.585-2.914h-1.088c-.866 0-1.66 0-2.305-.087-.711-.095-1.463-.32-2.08-.938-.619-.618-.844-1.37-.94-2.08-.086-.646-.086-1.44-.086-2.306z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldThreeSquares);
