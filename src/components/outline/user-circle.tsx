import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineUserCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M8.25 9a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M12 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clip-rule="evenodd"/><path fill="${color}" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12M12 2.75a9.25 9.25 0 0 0-6.558 15.773c.18-.973.535-1.89 1.246-2.628C7.753 14.791 9.454 14.25 12 14.25s4.247.541 5.311 1.645c.712.738 1.066 1.656 1.247 2.629A9.25 9.25 0 0 0 12 2.75m5.194 16.905c-.102-1.212-.365-2.1-.962-2.719-.65-.673-1.853-1.186-4.232-1.186s-3.582.513-4.232 1.186c-.597.62-.86 1.507-.962 2.72A9.2 9.2 0 0 0 12 21.25a9.2 9.2 0 0 0 5.194-1.595" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineUserCircle);
