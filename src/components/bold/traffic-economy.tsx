import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldTrafficEconomy: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535m11.12-2.3A6.75 6.75 0 1 1 12 5.25a.75.75 0 0 1 0 1.5A5.25 5.25 0 1 0 17.25 12a.75.75 0 0 1 1.5 0 6.75 6.75 0 0 1-4.167 6.236m-.288-12.584a.75.75 0 1 0-.591 1.378 6.23 6.23 0 0 1 3.265 3.265.75.75 0 1 0 1.378-.59 7.73 7.73 0 0 0-4.052-4.053M12 9.75a.75.75 0 0 1 .75.75v.75h.75a.75.75 0 1 1 0 1.5h-.75v.75a.75.75 0 0 1-1.5 0v-.75h-.75a.75.75 0 0 1 0-1.5h.75v-.75a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldTrafficEconomy };
export default React.memo(BoldTrafficEconomy);
