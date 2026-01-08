import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineMapArrowDown: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M21.047 1.988c.654.685.94 1.768.473 2.816l-7.362 16.51a2.338 2.338 0 0 1-4.316 0L2.48 4.804a2.55 2.55 0 0 1 .473-2.816C3.612 1.298 4.688.98 5.72 1.53l-.353.662.353-.662 5.904 3.152-.353.662.353-.662a.79.79 0 0 0 .752 0L18.28 1.53l.353.662-.353-.662c1.032-.55 2.108-.232 2.767.458m-2.06.865-.351-.656zl-5.903 3.152a2.29 2.29 0 0 1-2.166 0L5.014 2.853c-.356-.19-.714-.103-.976.171-.267.28-.388.72-.188 1.169l7.362 16.51c.326.73 1.25.73 1.576 0l7.362-16.51c.2-.448.08-.889-.188-1.169-.262-.274-.62-.36-.976-.17" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineMapArrowDown };
export default React.memo(OutlineMapArrowDown);
