import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneCart4: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M3.045 11.75c.126.714.303 1.541.51 2.507l.429 2c.487 2.273.73 3.409 1.555 4.076S7.526 21 9.851 21h4.299c2.324 0 3.486 0 4.31-.667.826-.667 1.07-1.803 1.556-4.076l.429-2c.207-.966.384-1.793.51-2.507z" opacity=".5"/><path fill="${color}" fill-rule="evenodd" d="M9.25 14a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/><path fill="${color}" d="M8.33 2.665a.75.75 0 0 1 1.341.67l-1.835 3.67Q8.56 7 9.422 7h5.156q.863-.001 1.586.005l-1.835-3.67a.75.75 0 0 1 1.342-.67l2.201 4.402c1.353.104 2.202.37 2.75 1.047.436.539.576 1.209.525 2.136H21q.075 0 .146.014a13 13 0 0 1-.19 1.486H3.045a13 13 0 0 1-.192-1.486A1 1 0 0 1 3 10.25h-.147c-.051-.927.09-1.597.525-2.136.548-.678 1.397-.943 2.75-1.047z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneCart4);
