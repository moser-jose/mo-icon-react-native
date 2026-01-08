import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneCassette2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M13.228 8h-2.456c-1.34 0-2.011 0-2.525-.356s-.75-.984-1.22-2.24L6.5 4h11l-.527 1.404c-.47 1.256-.706 1.884-1.22 2.24S14.57 8 13.228 8m.272 5.75a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0m-7.5 0a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0" opacity=".5"/><path fill="${color}" fill-rule="evenodd" d="M3.172 5.17C2 6.343 2 8.229 2 12s0 5.657 1.172 6.829 3.057 1.17 6.828 1.17h4c3.771 0 5.657 0 6.828-1.171S22 15.77 22 11.999s0-5.657-1.172-6.828c-.737-.737-1.756-1.01-3.35-1.112l-.505 1.345c-.47 1.255-.706 1.883-1.22 2.239s-1.184.356-2.525.356h-2.456c-1.34 0-2.011 0-2.525-.356s-.75-.984-1.22-2.24L6.522 4.06c-1.594.101-2.613.375-3.35 1.112M15.75 16c-.01 0 .01 0 0 0a2.25 2.25 0 1 0 0-4.5l-7.5-.001a2.25 2.25 0 0 0 0 4.5c-.01 0 .01 0 0 0z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneCassette2 };
export default React.memo(BoldDuotoneCassette2);
