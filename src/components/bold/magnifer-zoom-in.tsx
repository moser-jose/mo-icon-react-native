import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldMagniferZoomIn: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M21.788 21.788a.723.723 0 0 0 0-1.022L18.122 17.1a9.157 9.157 0 1 0-1.022 1.022l3.666 3.666a.723.723 0 0 0 1.022 0M11.157 8.024c.399 0 .723.324.723.723v1.687h1.686a.723.723 0 0 1 0 1.446H11.88v1.686a.723.723 0 1 1-1.445 0V11.88H8.747a.723.723 0 1 1 0-1.445h1.687V8.747c0-.4.323-.723.723-.723" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldMagniferZoomIn);
