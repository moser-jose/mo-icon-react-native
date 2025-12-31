import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineSirenRounded: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12.75 2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zm1.822 8.805a.75.75 0 1 0-.563 1.39c.814.33 1.466.981 1.796 1.796a.75.75 0 1 0 1.39-.563 4.76 4.76 0 0 0-2.623-2.623"/><path fill="${color}" fill-rule="evenodd" d="M12 7.25A8.75 8.75 0 0 0 3.25 16v5.25H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-1.25V16A8.75 8.75 0 0 0 12 7.25m.75 14h6.5V16a7.25 7.25 0 1 0-14.5 0v5.25h6.5v-1.628a2.251 2.251 0 1 1 1.5 0zm-.75-3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" clip-rule="evenodd"/><path fill="${color}" d="M21.53 5.47a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0m-18 0a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineSirenRounded);
