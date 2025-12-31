import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenBagCheck: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10 14.3 1.333 1.2 2.667-3"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M9 6V5a3 3 0 1 1 6 0v1m5.224 6.526c-.586-3.121-.878-4.682-1.99-5.604C17.125 6 15.537 6 12.36 6h-.72c-3.176 0-4.764 0-5.875.922s-1.403 2.483-1.989 5.604c-.823 4.389-1.234 6.583-.034 8.029S7.174 22 11.639 22h.722c4.465 0 6.698 0 7.897-1.445.696-.84.85-1.93.696-3.555"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenBagCheck);
