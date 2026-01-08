import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneSnowflake: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.78 2.78v11.38l2.78 2.78a.75.75 0 1 1-1.06 1.06l-1.72-1.72V22a.75.75 0 0 1-1.5 0v-2.19l-1.72 1.72a.75.75 0 0 1-1.06-1.06l2.78-2.78V6.31L8.47 3.53a.75.75 0 0 1 1.06-1.06l1.72 1.72V2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/><path fill="${color}" fill-rule="evenodd" d="M5.512 4.178a.75.75 0 0 1 .918.53l1.018 3.798L12 11.134l4.552-2.628 1.018-3.798a.75.75 0 0 1 1.448.389l-.629 2.349 1.896-1.095a.75.75 0 1 1 .75 1.3l-1.896 1.094 2.35.63a.75.75 0 0 1-.39 1.448l-3.797-1.018-3.802 2.196 3.802 2.195 3.798-1.018a.75.75 0 0 1 .388 1.449l-2.349.63 1.896 1.094a.75.75 0 0 1-.75 1.3l-1.896-1.096.63 2.35a.75.75 0 1 1-1.45.388l-1.017-3.798L12 12.867l-4.552 2.628-1.018 3.798a.75.75 0 0 1-1.449-.388l.63-2.35-1.897 1.095a.75.75 0 0 1-.75-1.299l1.897-1.095-2.35-.629a.75.75 0 0 1 .389-1.449l3.798 1.018L10.5 12 6.698 9.805 2.9 10.823a.75.75 0 1 1-.388-1.449l2.349-.63L2.965 7.65a.75.75 0 1 1 .75-1.299L5.61 7.446l-.63-2.35a.75.75 0 0 1 .53-.918" clip-rule="evenodd" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneSnowflake };
export default React.memo(BoldDuotoneSnowflake);
