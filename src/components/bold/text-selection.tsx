import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldTextSelection: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M8.25 9A.75.75 0 0 1 9 8.25h6a.75.75 0 0 1 0 1.5h-2.25V15a.75.75 0 0 1-1.5 0V9.75H9A.75.75 0 0 1 8.25 9" clip-rule="evenodd"/><path fill="${color}" fill-rule="evenodd" d="M5.86 3.263A2 2 0 1 0 3.263 5.86 1 1 0 0 0 3.25 6v12q0 .072.013.14a2 2 0 1 0 2.597 2.597 1 1 0 0 0 .14.013h12a1 1 0 0 0 .14-.013 2 2 0 1 0 2.597-2.597 1 1 0 0 0 .013-.14V6a1 1 0 0 0-.013-.14 2 2 0 1 0-2.597-2.597A1 1 0 0 0 18 3.25H6a1 1 0 0 0-.14.013M4.737 5.86A1 1 0 0 1 4.75 6v12a1 1 0 0 1-.013.14c.512.203.92.611 1.123 1.123A1 1 0 0 1 6 19.25h12q.072 0 .14.013c.203-.512.611-.92 1.123-1.123a1 1 0 0 1-.013-.14V6q0-.072.013-.14a2 2 0 0 1-1.123-1.123 1 1 0 0 1-.14.013H6a1 1 0 0 1-.14-.013c-.203.512-.611.92-1.123 1.123" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldTextSelection };
export default React.memo(BoldTextSelection);
