import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineMapArrowUp: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M21.047 22.012c.654-.685.94-1.768.473-2.816l-7.362-16.51a2.338 2.338 0 0 0-4.316 0L2.48 19.196a2.55 2.55 0 0 0 .473 2.816c.659.69 1.735 1.009 2.767.458l-.353-.662.353.662 5.904-3.152-.353-.662.353.662a.79.79 0 0 1 .752 0l5.904 3.152.353-.662-.353.662c1.032.55 2.108.232 2.767-.458m-2.06-.866-.351.657zl-5.903-3.152a2.29 2.29 0 0 0-2.166 0l-5.903 3.153c-.356.19-.714.103-.976-.171a1.05 1.05 0 0 1-.188-1.169l7.362-16.51c.326-.73 1.25-.73 1.576 0l7.362 16.51c.2.448.08.889-.188 1.169-.262.274-.62.36-.976.17" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineMapArrowUp);
