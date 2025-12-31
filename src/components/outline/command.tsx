import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineCommand: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M15.25 5A3.75 3.75 0 1 1 19 8.75h-2.25v6.5H19A3.75 3.75 0 1 1 15.25 19v-2.25h-6.5V19a3.75 3.75 0 1 1-3.749-3.75H7.25v-6.5H5.001A3.75 3.75 0 1 1 8.751 5v2.25h6.5zm-8 2.25V5A2.25 2.25 0 1 0 5 7.25zM19 2.75A2.25 2.25 0 0 0 16.75 5v2.25H19a2.25 2.25 0 1 0 0-4.5m-10.25 6v6.5h6.5v-6.5zM21.25 19A2.25 2.25 0 0 0 19 16.75h-2.25V19a2.25 2.25 0 1 0 4.5 0m-18.5 0A2.25 2.25 0 0 1 5 16.75h2.25V19a2.25 2.25 0 1 1-4.5 0" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineCommand);
