import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldArrowToDownLeft: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M17.53 13.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06l3.72 3.72V9.5c0-.713-.22-1.8-.859-2.687C9.781 5.965 8.756 5.25 7 5.25a.75.75 0 0 1 0-1.5c2.244 0 3.72.952 4.609 2.187.861 1.196 1.141 2.61 1.141 3.563v8.19l3.72-3.72a.75.75 0 0 1 1.06 0" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldArrowToDownLeft);
