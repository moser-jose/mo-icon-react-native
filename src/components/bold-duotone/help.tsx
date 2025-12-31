import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneHelp: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-6a4 4 0 1 0 0-8 4 4 0 0 0 0 8" clip-rule="evenodd" opacity=".5"/><path fill="${color}" d="m5.48 19.581 4.272-4.272a4 4 0 0 1-1.06-1.061L4.418 18.52q.49.57 1.06 1.06M4.418 5.479 8.691 9.75a4 4 0 0 1 1.06-1.06L5.48 4.418q-.57.491-1.06 1.06m9.828 3.212 4.273-4.272q.57.491 1.06 1.06L15.31 9.752a4 4 0 0 0-1.06-1.06m5.332 9.828-4.273-4.272a4 4 0 0 1-1.06 1.06l4.272 4.273q.57-.49 1.06-1.06"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneHelp);
