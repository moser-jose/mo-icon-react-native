import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDoubleAltArrowUp: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M11.512 6.43a.75.75 0 0 1 .976 0l7 6a.75.75 0 1 1-.976 1.14L12 7.987l-6.512 5.581a.75.75 0 1 1-.976-1.138zm-7 10 7-6a.75.75 0 0 1 .976 0l7 6a.75.75 0 1 1-.976 1.14L12 11.987l-6.512 5.581a.75.75 0 1 1-.976-1.138" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDoubleAltArrowUp };
export default React.memo(OutlineDoubleAltArrowUp);
