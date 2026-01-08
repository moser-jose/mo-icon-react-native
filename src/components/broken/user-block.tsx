import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenUserBlock: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="6" r="4" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M15.5 13.535C14.47 13.195 13.275 13 12 13c-3.866 0-7 1.79-7 4 0 .345 0 .68.027 1M13 20.987Q12.525 21 12 21c-1.722 0-3.02-.108-4-.305m11.95-3.645-3.9 3.9"/><circle cx="18" cy="19" r="3" stroke="${color}" stroke-width="1.5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenUserBlock };
export default React.memo(BrokenUserBlock);
