import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneArrowDown: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M12 3.25a.75.75 0 0 1 .75.75v9.25h-1.5V4a.75.75 0 0 1 .75-.75" clip-rule="evenodd" opacity=".5"/><path fill="${color}" d="M6 13.25a.75.75 0 0 0-.53 1.28l6 6a.75.75 0 0 0 1.06 0l6-6a.75.75 0 0 0-.53-1.28z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneArrowDown };
export default React.memo(BoldDuotoneArrowDown);
