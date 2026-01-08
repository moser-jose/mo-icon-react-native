import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldBedsideTable3: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v.25H2zm6.25-3.5A.75.75 0 0 1 9 5.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75M2 11.75h20V12c0 3.771 0 5.657-1.172 6.828a3.1 3.1 0 0 1-1.078.697V22a.75.75 0 0 1-1.5 0v-2.129C17.18 20 15.806 20 14 20h-4c-1.806 0-3.18 0-4.25-.129V22a.75.75 0 0 1-1.5 0v-2.475a3.1 3.1 0 0 1-1.078-.697C2 17.657 2 15.771 2 12zm6.25 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldBedsideTable3 };
export default React.memo(BoldBedsideTable3);
