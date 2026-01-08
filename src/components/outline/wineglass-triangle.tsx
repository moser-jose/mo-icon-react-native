import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineWineglassTriangle: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M2.948 6.388C1.43 4.837 2.545 2.25 4.7 2.25h14.598c2.156 0 3.27 2.587 1.753 4.138l-8.302 8.49v5.372h3.494a.75.75 0 0 1 0 1.5H7.756a.75.75 0 0 1 0-1.5h3.494v-5.373zM12 13.498l2.933-2.998H9.067zM7.6 9h8.8l3.58-3.66c.575-.589.165-1.59-.68-1.59H4.7c-.845 0-1.255 1.001-.68 1.59z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineWineglassTriangle };
export default React.memo(OutlineWineglassTriangle);
