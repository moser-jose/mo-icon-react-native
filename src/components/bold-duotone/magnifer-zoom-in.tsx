import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneMagniferZoomIn: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M11.157 20.313a9.157 9.157 0 1 0 0-18.313 9.157 9.157 0 0 0 0 18.313" opacity=".5"/><path fill="${color}" fill-rule="evenodd" d="M11.157 8.023c.399 0 .722.324.722.723v1.687h1.687a.723.723 0 1 1 0 1.446H11.88v1.687a.723.723 0 1 1-1.445 0v-1.687H8.747a.723.723 0 0 1 0-1.446h1.687V8.746c0-.399.323-.723.723-.723" clip-rule="evenodd"/><path fill="${color}" d="m17.1 18.122 3.666 3.666a.723.723 0 0 0 1.023-1.022L18.122 17.1a9 9 0 0 1-1.022 1.022"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneMagniferZoomIn };
export default React.memo(BoldDuotoneMagniferZoomIn);
