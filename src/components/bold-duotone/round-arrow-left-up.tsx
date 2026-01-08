import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneRoundArrowLeftUp: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10" opacity=".5"/><path fill="${color}" d="M13.5 8.25a.75.75 0 0 1 0 1.5h-2.69l4.72 4.72a.75.75 0 1 1-1.06 1.06l-4.72-4.72v2.69a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 9 8.25z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneRoundArrowLeftUp };
export default React.memo(BoldDuotoneRoundArrowLeftUp);
