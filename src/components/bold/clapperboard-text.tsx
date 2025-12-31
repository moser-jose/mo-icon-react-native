import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldClapperboardText: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M16.54 2.088C15.33 2 13.845 2 12 2h-.099l-3.5 5.25H13.1zm-6.444-.084c-3.474.027-5.38.208-6.632 1.46-.857.858-1.213 2.022-1.36 3.786H6.6z"/><path fill="${color}" fill-rule="evenodd" d="M2.026 8.75C2 9.689 2 10.763 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-1.237 0-2.311-.026-3.25zM5.75 14a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75m.75 2.75a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/><path fill="${color}" d="M20.536 3.464c.857.858 1.213 2.022 1.36 3.786H14.9l3.3-4.946c.993.21 1.74.563 2.336 1.16"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldClapperboardText);
