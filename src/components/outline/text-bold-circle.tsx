import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineTextBoldCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M7.25 7.522A2.27 2.27 0 0 1 9.522 5.25H12a3.75 3.75 0 0 1 2.665 6.389A3.75 3.75 0 0 1 13 18.75H9.176a1.926 1.926 0 0 1-1.926-1.927zm1.5 3.728H12a2.25 2.25 0 0 0 0-4.5H9.522a.77.77 0 0 0-.772.772zm0 1.5v4.073c0 .236.19.427.426.427H13a2.25 2.25 0 0 0 0-4.5z" clip-rule="evenodd"/><path fill="${color}" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineTextBoldCircle);
