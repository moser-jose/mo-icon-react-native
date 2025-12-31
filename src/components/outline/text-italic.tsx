import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineTextItalic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M14.983 1.25H9a.75.75 0 1 0 0 1.5h4.992l-5.55 18.5H3a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5h-4.992l5.55-18.5H21a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineTextItalic);
