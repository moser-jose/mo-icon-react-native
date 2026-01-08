import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneMapArrowLeft: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M9.856 15.962a.5.5 0 0 0 .244.68l9.402 4.193c1.495.667 3.047-.814 2.306-2.202l-3.152-5.904c-.245-.459-.245-1 0-1.458l3.152-5.904c.741-1.388-.81-2.87-2.306-2.202l-3.525 1.572a2 2 0 0 0-.974.932z"/><path fill="${color}" d="M8.466 15.391a.5.5 0 0 1-.651.233l-4.823-2.15c-1.323-.59-1.323-2.355 0-2.945L11.89 6.56a.5.5 0 0 1 .65.68z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneMapArrowLeft };
export default React.memo(BoldDuotoneMapArrowLeft);
