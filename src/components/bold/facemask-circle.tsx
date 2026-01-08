import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldFacemaskCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="m21.824 13.878-4.112 1.645-.38 4.938a10 10 0 0 0 4.492-6.583m-6.058 7.389.444-5.776-2.632-1.052a4.25 4.25 0 0 0-3.156 0L7.79 15.49l.444 5.776A10 10 0 0 0 12 22c1.332 0 2.603-.26 3.766-.733m-9.098-.806-.379-4.922-4.077-1.482a10 10 0 0 0 4.456 6.404"/><path fill="${color}" fill-rule="evenodd" d="M21.998 12.193 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12q0 .195.007.386l4.98 1.81 2.877-1.15a5.75 5.75 0 0 1 4.272 0L17 14.192zM16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5M9 12c.552 0 1-.672 1-1.5S9.552 9 9 9s-1 .672-1 1.5.448 1.5 1 1.5" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldFacemaskCircle };
export default React.memo(BoldFacemaskCircle);
