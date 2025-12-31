import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineChefHat: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M7.253 4.255a5.25 5.25 0 0 1 9.494 0A5.75 5.75 0 0 1 19.75 15.05v3.002c0 .899 0 1.648-.08 2.242-.084.628-.27 1.195-.726 1.65-.455.456-1.022.642-1.65.726-.594.08-1.344.08-2.242.08H8.948c-.898 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.726-.456-.455-.642-1.022-.726-1.65-.08-.594-.08-1.343-.08-2.242v-3.001A5.75 5.75 0 0 1 7.253 4.256m-.45 1.5A4.25 4.25 0 0 0 5.3 13.897a.75.75 0 0 1 .45.687v2.666h12.5v-2.666a.75.75 0 0 1 .45-.687 4.251 4.251 0 0 0-1.503-8.142q.053.365.053.745V7a.75.75 0 0 1-1.5 0v-.5A3.746 3.746 0 0 0 12 2.75 3.75 3.75 0 0 0 8.25 6.5V7a.75.75 0 0 1-1.5 0v-.5q0-.38.053-.745M18.248 18.75H5.752c.004.57.018 1 .065 1.345.062.461.169.659.3.789s.327.237.788.3c.483.064 1.131.066 2.095.066h6c.964 0 1.612-.002 2.095-.067.461-.062.659-.169.789-.3s.237-.327.3-.788c.046-.346.06-.776.064-1.345" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineChefHat);
