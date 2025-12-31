import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineRadialBlur: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M13.106 2.815a9.2 9.2 0 0 0-5.73 1.174 9.25 9.25 0 1 0 9.25 16.021 9.2 9.2 0 0 0 3.88-4.376 9.24 9.24 0 0 0-.495-8.26 9.24 9.24 0 0 0-6.905-4.559m-6.48-.125a10.7 10.7 0 0 1 6.66-1.364 10.74 10.74 0 0 1 8.024 5.299 10.74 10.74 0 0 1 .577 9.598 10.7 10.7 0 0 1-4.512 5.087C12.234 24.278 5.66 22.516 2.69 17.375-.278 12.233 1.484 5.658 6.625 2.69" clip-rule="evenodd"/><path fill="${color}" fill-rule="evenodd" d="M9.75 9a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M8 9.75a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M14.25 9a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m-1.75.75a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M9.75 13.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M8 14.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0m6.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m-1.75.75a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0" clip-rule="evenodd"/><path fill="${color}" d="M15 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-4.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M18.25 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M5.75 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m12.5 4.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m-12.5 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M15 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-4.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineRadialBlur);
