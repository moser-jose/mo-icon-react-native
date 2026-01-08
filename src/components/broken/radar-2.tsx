import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenRadar2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M9.412 21.66q.796.212 1.588.292c4.795.488 9.372-2.558 10.66-7.363C23.088 9.254 19.922 3.77 14.587 2.34a9.97 9.97 0 0 0-7.501.95M12 12 5.002 6.336c-.43-.347-1.063-.283-1.366.178a10 10 0 0 0-1.295 2.898 10 10 0 0 0 2.661 9.734m2.367-10.96a6 6 0 1 0 10.442 2.316m-7.708-4.195A6 6 0 0 1 12 6c1.093 0 2.117.292 3 .802"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenRadar2 };
export default React.memo(BrokenRadar2);
