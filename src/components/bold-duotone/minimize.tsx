import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneMinimize: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M2.393 15a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v5.857a.75.75 0 1 1-1.5 0v-4.046l-5.72 5.72a.75.75 0 0 1-1.06-1.061l5.72-5.72H3.142a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".6"/><path fill="${color}" fill-rule="evenodd" d="M21.607 9a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V3.143a.75.75 0 0 1 1.5 0v4.046l5.72-5.72a.75.75 0 1 1 1.06 1.061l-5.72 5.72h4.047a.75.75 0 0 1 .75.75" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneMinimize);
