import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldHourglass: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M5.198 3.3C5.8 2 7.867 2 12 2s6.2 0 6.802 1.3q.078.166.13.346c.41 1.387-1.052 2.995-3.974 6.21L13 12l1.958 2.143c2.922 3.216 4.383 4.824 3.974 6.21a2.5 2.5 0 0 1-.13.348C18.2 22 16.133 22 12 22s-6.2 0-6.802-1.3a2.5 2.5 0 0 1-.13-.346c-.41-1.387 1.052-2.995 3.974-6.21L11 12 9.042 9.857C6.12 6.64 4.66 5.033 5.068 3.647q.052-.18.13-.348"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldHourglass };
export default React.memo(BoldHourglass);
