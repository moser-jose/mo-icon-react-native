import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneWheel: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><g fill="${color}" opacity=".5"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/><path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-10 6a6 6 0 1 0 0-12 6 6 0 0 0 0 12m3-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" clip-rule="evenodd"/></g><path fill="${color}" d="m9.672 17.531 1.525-2.64a3 3 0 0 1-1.299-.75l-1.524 2.64c.397.3.832.554 1.298.75M6.046 12.75h3.048a3 3 0 0 1 0-1.5H6.047a6 6 0 0 0 0 1.5m2.327-5.531 1.524 2.64c.357-.35.802-.613 1.299-.75L9.672 6.467c-.465.196-.901.45-1.298.75m4.429 1.891 1.525-2.64c.465.196.901.45 1.298.75l-1.524 2.64a3 3 0 0 0-1.299-.75m2.103 3.642a3 3 0 0 0 0-1.5h3.048a6 6 0 0 1 0 1.5zm-2.103 2.14c.497-.137.942-.4 1.299-.75l1.524 2.64a6 6 0 0 1-1.298.751z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneWheel };
export default React.memo(BoldDuotoneWheel);
