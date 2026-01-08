import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneAtom: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M16.471 16.471c4.939-4.939 6.94-10.944 4.471-13.413-2.469-2.47-8.474-.468-13.413 4.47-4.939 4.94-6.94 10.945-4.471 13.414 2.47 2.47 8.475.468 13.413-4.47" opacity=".3"/><path fill="${color}" d="M7.529 16.471C2.59 11.533.589 5.527 3.058 3.058c2.469-2.47 8.474-.468 13.413 4.47 4.939 4.94 6.94 10.945 4.471 13.414-2.47 2.47-8.475.468-13.413-4.47" opacity=".3"/><path fill="${color}" d="M14.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneAtom };
export default React.memo(BoldDuotoneAtom);
