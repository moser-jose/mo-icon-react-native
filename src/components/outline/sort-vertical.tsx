import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineSortVertical: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M16 5.25a.75.75 0 0 1 .538.228l4 4.125a.75.75 0 1 1-1.076 1.044L16.75 7.851V18a.75.75 0 0 1-1.5 0V7.85l-2.712 2.797a.75.75 0 1 1-1.076-1.044l4-4.125A.75.75 0 0 1 16 5.25m-8 0a.75.75 0 0 1 .75.75v10.15l2.712-2.797a.75.75 0 1 1 1.076 1.044l-4 4.125a.75.75 0 0 1-1.076 0l-4-4.125a.75.75 0 1 1 1.076-1.044l2.712 2.796V6A.75.75 0 0 1 8 5.25" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineSortVertical };
export default React.memo(OutlineSortVertical);
