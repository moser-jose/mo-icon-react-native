import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneRecordMinimalistic: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M22 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-12 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/><path fill="${color}" d="M6 16h12a4 4 0 0 1-2.646-1H8.646c-.705.622-1.632 1-2.646 1" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneRecordMinimalistic };
export default React.memo(BoldDuotoneRecordMinimalistic);
