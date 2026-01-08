import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneVideoFrameCut: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M9.5 3.004h5a41 41 0 0 1 1.75.043v17.907a40 40 0 0 1-1.75.043h-5a40 40 0 0 1-1.75-.043V3.047a40 40 0 0 1 1.75-.043" opacity=".5"/><path fill="${color}" d="M12 1.25a.75.75 0 0 1 .75.75v1.667a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M11.25 22v-1.667a.75.75 0 0 1 1.5 0V22a.75.75 0 0 1-1.5 0m1.5-15a.75.75 0 0 0-1.5 0v3.333a.75.75 0 0 0 1.5 0zm0 6.667a.75.75 0 0 0-1.5 0V17a.75.75 0 0 0 1.5 0zM6.25 3.202c-.9.161-1.56.45-2.078.97-.772.77-1.035 1.852-1.125 3.578H6.25zM3.006 9.25Q2.999 10.048 3 11v2q-.002.95.006 1.75H6.25v-5.5zm1.166 10.578c-.772-.771-1.035-1.853-1.125-3.578H6.25v4.547c-.9-.161-1.56-.45-2.078-.969M17.75 7.75V3.202c.9.161 1.56.45 2.078.97.772.77 1.035 1.852 1.125 3.578zm3.244 1.5H17.75v5.5h3.244q.008-.8.006-1.75v-2q.002-.951-.006-1.75m-3.244 7h3.203c-.09 1.725-.353 2.807-1.125 3.578-.518.519-1.177.808-2.078.969z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneVideoFrameCut };
export default React.memo(BoldDuotoneVideoFrameCut);
