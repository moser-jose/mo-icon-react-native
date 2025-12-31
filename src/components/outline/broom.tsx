import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineBroom: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M21.036 2.884a.75.75 0 0 1 0 1.06l-1.632 1.633a4.75 4.75 0 0 1-.085 5.687l.004.032-.032.004.032-.004v.005l.001.008.003.027.01.096q.011.124.024.348a16.1 16.1 0 0 1-.58 5.176c-.29 1.019-.744 2.026-1.209 2.907-1.16 2.199-3.832 2.855-5.876 1.812l-.025-.012-1.12-.682A22.75 22.75 0 0 1 2.94 13.37l-.682-1.12-.012-.025c-1.043-2.043-.387-4.715 1.813-5.876.88-.465 1.887-.918 2.905-1.21a16.1 16.1 0 0 1 5.525-.554l.096.009.027.003h.008l.003.001h.001l-.003.033.003-.033.033.004a4.75 4.75 0 0 1 5.687-.085l1.633-1.632a.75.75 0 0 1 1.06 0m-8.839 3.182-.14-.01a14.6 14.6 0 0 0-4.682.524c-.883.254-1.79.658-2.617 1.094-1.407.743-1.873 2.474-1.19 3.844l.652 1.071a21.25 21.25 0 0 0 7.11 7.11l1.072.652c1.37.684 3.101.218 3.844-1.189.437-.827.84-1.734 1.093-2.617a14.6 14.6 0 0 0 .516-4.823zm6.126 4.004L13.85 5.597a3.251 3.251 0 0 1 4.473 4.473" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineBroom);
