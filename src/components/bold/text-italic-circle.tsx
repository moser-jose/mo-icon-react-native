import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldTextItalicCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m-1.333 4.25H16a.75.75 0 0 1 0 1.5h-2.09l-2.267 8.5h1.69a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h2.09l2.267-8.5h-1.69a.75.75 0 0 1 0-1.5" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldTextItalicCircle };
export default React.memo(BoldTextItalicCircle);
