import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneEndCall: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M8 12.862v.616c0 .852-.577 1.604-1.42 1.851l-2 .586c-1.284.377-2.58-.553-2.58-1.85V12.14c0-.489.125-.97.44-1.352.734-.883 2.44-2.506 5.56-3.311zm8 0v.388c0 .956.723 1.769 1.7 1.912l2 .293c1.21.178 2.3-.729 2.3-1.912v-2.125c0-.587-.184-1.164-.63-1.562-.817-.73-2.492-1.88-5.37-2.474z" clip-rule="evenodd"/><path fill="${color}" d="M12 11.396c4 0 4 1.466 4 1.466v-5.48C14.862 7.147 13.536 7 12 7s-2.862.184-4 .478v5.384s0-1.466 4-1.466" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneEndCall };
export default React.memo(BoldDuotoneEndCall);
