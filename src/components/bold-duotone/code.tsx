import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneCode: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M16.443 7.327a.75.75 0 0 1 1.059-.055l1.737 1.563c.737.663 1.347 1.213 1.767 1.711.44.525.754 1.088.754 1.783s-.313 1.259-.754 1.783c-.42.498-1.03 1.048-1.767 1.71l-1.737 1.565a.75.75 0 1 1-1.004-1.115l1.697-1.527c.788-.71 1.319-1.19 1.663-1.599.33-.392.402-.622.402-.817s-.072-.425-.402-.817c-.344-.41-.875-.89-1.663-1.599l-1.697-1.526a.75.75 0 0 1-.056-1.06m-8.94 1.06a.75.75 0 0 0-1.004-1.115L4.761 8.835c-.737.663-1.347 1.213-1.767 1.711-.44.525-.754 1.088-.754 1.783s.313 1.259.754 1.783c.42.498 1.03 1.048 1.767 1.71l1.737 1.565a.75.75 0 1 0 1.004-1.115l-1.697-1.527c-.788-.71-1.319-1.19-1.663-1.599-.33-.392-.402-.622-.402-.817s.072-.425.402-.817c.344-.41.875-.89 1.663-1.599z"/><path fill="${color}" d="M14.181 4.276a.75.75 0 0 1 .53.918l-3.973 14.83a.75.75 0 1 1-1.45-.388l3.974-14.83a.75.75 0 0 1 .92-.53" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneCode);
