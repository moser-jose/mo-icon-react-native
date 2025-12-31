import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneKeyMinimalisticSquare: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464" opacity=".5"/><path fill="${color}" fill-rule="evenodd" d="M16.651 13.86a4.605 4.605 0 1 0-7.715-2.106.72.72 0 0 1-.172.692L6.289 14.92a.99.99 0 0 0-.283.807l.155 1.392a.66.66 0 0 0 .188.393l.14.139a.66.66 0 0 0 .392.188l1.392.155a.99.99 0 0 0 .807-.283l.296-.297-1.163-1.15a.75.75 0 0 1 1.055-1.066l1.166 1.153.003.003 1.118-1.118a.72.72 0 0 1 .69-.172 4.6 4.6 0 0 0 4.406-1.204m-4.26-4.136a1.333 1.333 0 1 1 1.885 1.885 1.333 1.333 0 0 1-1.886-1.885" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneKeyMinimalisticSquare);
