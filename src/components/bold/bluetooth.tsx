import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldBluetooth: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="m16.743 15.159-4.441-3.154.006-.004-.007-.005 4.442-3.154c.54-.383 1.012-.718 1.341-1.033.351-.336.666-.765.666-1.35s-.315-1.014-.666-1.35c-.33-.314-.801-.65-1.341-1.033L14.91 2.775c-.73-.518-1.346-.956-1.857-1.216-.52-.266-1.155-.465-1.79-.14-.637.325-.844.958-.93 1.535-.083.566-.083 1.319-.083 2.21v5.397L6.43 7.887a.75.75 0 1 0-.86 1.228l4.122 2.886-4.122 2.886a.75.75 0 0 0 .86 1.229l3.82-2.674v5.395c0 .891 0 1.644.084 2.21.085.577.292 1.21.93 1.536.634.325 1.27.125 1.79-.14.51-.261 1.126-.698 1.856-1.216l1.832-1.302c.54-.384 1.013-.719 1.342-1.034.351-.335.666-.764.666-1.35 0-.584-.315-1.013-.666-1.349-.33-.315-.801-.65-1.341-1.033"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldBluetooth);
