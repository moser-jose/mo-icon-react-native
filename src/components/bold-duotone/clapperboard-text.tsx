import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneClapperboardText: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M16.54 2.088C15.33 2 13.845 2 12 2h-.098l-3.5 5.25h4.697zm-6.444-.084c-3.474.027-5.38.208-6.631 1.46-.858.858-1.213 2.022-1.36 3.786h4.494zm10.44 1.46c.857.858 1.213 2.022 1.36 3.786h-6.994l3.297-4.946c.993.21 1.74.563 2.337 1.16"/><path fill="${color}" d="M2 12c0-1.237 0-2.311.026-3.25h19.948C22 9.689 22 10.763 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"/><path fill="${color}" d="M5.75 17.5a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.5a.75.75 0 0 1-.75-.75m.75-4.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneClapperboardText);
