import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineCode2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M8.557 4.327a.75.75 0 0 1-.055 1.06L6.805 6.913c-.788.71-1.319 1.19-1.663 1.599-.33.393-.402.622-.402.817 0 .196.072.425.402.817.344.41.875.89 1.663 1.599l1.697 1.527a.75.75 0 0 1-1.004 1.115l-1.737-1.564c-.737-.663-1.347-1.213-1.767-1.711-.44-.524-.754-1.088-.754-1.783s.313-1.258.754-1.783c.42-.498 1.03-1.048 1.767-1.71l.04-.038 1.697-1.526a.75.75 0 0 1 1.06.055m5.623-.052a.75.75 0 0 1 .532.917l-3.987 15a.75.75 0 1 1-1.45-.385l3.987-15a.75.75 0 0 1 .918-.532m1.263 6.223a.75.75 0 0 1 1.059-.056l1.737 1.564c.736.662 1.347 1.212 1.767 1.71.44.525.754 1.088.754 1.784 0 .695-.313 1.258-.754 1.782-.42.499-1.03 1.049-1.767 1.711l-1.737 1.564a.75.75 0 1 1-1.004-1.115l1.697-1.527c.788-.709 1.319-1.19 1.663-1.598.33-.393.402-.622.402-.818s-.072-.424-.402-.817c-.344-.409-.875-.89-1.663-1.598l-1.697-1.527a.75.75 0 0 1-.055-1.06" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineCode2 };
export default React.memo(OutlineCode2);
