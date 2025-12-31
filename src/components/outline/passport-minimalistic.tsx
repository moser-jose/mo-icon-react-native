import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlinePassportMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M8.25 14a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M12 11.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clip-rule="evenodd"/><path fill="${color}" fill-rule="evenodd" d="M18.75 4.306a2.75 2.75 0 0 0-3.139-2.722L4.814 3.126A1.82 1.82 0 0 0 3.25 5v14A3.75 3.75 0 0 0 7 22.75h10A3.75 3.75 0 0 0 20.75 19V9a3.75 3.75 0 0 0-2-3.317zM5.062 6.75H17.01A2.25 2.25 0 0 1 19.25 9v10A2.25 2.25 0 0 1 17 21.25H7A2.25 2.25 0 0 1 4.75 19V6.75zm11.95-1.5h.238v-.944a1.25 1.25 0 0 0-1.427-1.237L5.026 4.61a.321.321 0 0 0 .041.64z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlinePassportMinimalistic);
