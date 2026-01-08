import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneChatRoundUnread: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="3" cy="3" r="3" stroke="${color}" stroke-width="1.5" transform="matrix(-1 0 0 1 22 2)"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M14 2.2q-.97-.198-2-.2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10q-.002-1.03-.2-2" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneChatRoundUnread };
export default React.memo(OutlineDuotoneChatRoundUnread);
