import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneBluetooth: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="m12.302 12.005 4.44 3.154c.54.383 1.013.718 1.342 1.033.351.336.666.765.666 1.35s-.315 1.014-.666 1.35c-.33.314-.801.65-1.341 1.033l-1.833 1.302c-.73.518-1.346.955-1.857 1.216-.52.265-1.155.465-1.79.14-.637-.326-.844-.96-.93-1.536-.083-.566-.083-1.319-.083-2.21V5.165c0-.891 0-1.644.084-2.21.085-.577.292-1.21.929-1.536.635-.324 1.27-.125 1.79.14.511.261 1.127.699 1.857 1.217l1.833 1.301c.54.384 1.012.719 1.341 1.034.351.335.666.764.666 1.35 0 .584-.315 1.013-.666 1.349-.33.315-.801.65-1.341 1.033L12.3 11.996l.007.005z" clip-rule="evenodd"/><path fill="${color}" d="M10.25 10.56 6.43 7.886a.75.75 0 1 0-.86 1.228L9.692 12 5.57 14.886a.75.75 0 0 0 .86 1.229l3.82-2.674z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneBluetooth);
