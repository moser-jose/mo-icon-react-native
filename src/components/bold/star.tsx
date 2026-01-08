import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldStar: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M12 3.25a.75.75 0 0 1 .75.75v2.4a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75m6.187 2.563a.75.75 0 0 1 0 1.06L16.49 8.571a.75.75 0 1 1-1.06-1.061l1.697-1.697a.75.75 0 0 1 1.06 0m-12.374 0a.75.75 0 0 1 1.06 0L8.57 7.51a.75.75 0 0 1-1.06 1.06L5.813 6.875a.75.75 0 0 1 0-1.061M3.25 12a.75.75 0 0 1 .75-.75h2.4a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m13.6 0a.75.75 0 0 1 .75-.75H20a.75.75 0 0 1 0 1.5h-2.4a.75.75 0 0 1-.75-.75m-8.28 3.43a.75.75 0 0 1 0 1.06l-1.697 1.697a.75.75 0 1 1-1.06-1.06L7.51 15.43a.75.75 0 0 1 1.06 0m6.86 0a.75.75 0 0 1 1.06 0l1.697 1.697a.75.75 0 0 1-1.06 1.06l-1.698-1.697a.75.75 0 0 1 0-1.06M12 16.85a.75.75 0 0 1 .75.75V20a.75.75 0 0 1-1.5 0v-2.4a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldStar };
export default React.memo(BoldStar);
