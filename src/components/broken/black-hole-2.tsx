import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenBlackHole2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-dasharray="2 2" stroke-linecap="round" stroke-width="1.5" d="M10.142 10.363C13.688 6.817 21.914 15.61 16.524 21"/><path stroke="${color}" stroke-dasharray="2 2" stroke-linecap="round" stroke-width="1.5" d="M13.858 13.637C10.312 17.183 2.086 8.39 7.476 3"/><path stroke="${color}" stroke-dasharray="2 2" stroke-linecap="round" stroke-width="1.5" d="M10.363 13.859C6.817 10.313 15.61 2.087 21 7.477"/><path stroke="${color}" stroke-dasharray="2 2" stroke-linecap="round" stroke-width="1.5" d="M13.637 10.141C17.183 13.687 8.39 21.913 3 16.523"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenBlackHole2);
