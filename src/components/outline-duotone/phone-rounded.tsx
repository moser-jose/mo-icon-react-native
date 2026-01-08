import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotonePhoneRounded: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M5.007 6.933C5.05 5.8 5.7 4.774 6.537 3.937c1.394-1.393 3.616-1.206 4.5.38l.65 1.162c.585 1.05.35 2.426-.572 3.349m5.952 10.165c1.133-.042 2.159-.694 2.996-1.53 1.393-1.394 1.206-3.616-.38-4.5l-1.162-.65c-1.05-.585-2.426-.35-3.349.572"/><path stroke="${color}" stroke-width="1.5" d="M5.007 6.934c-.073 1.908.41 5.148 3.66 8.399s6.492 3.733 8.4 3.661m-1.895-6.108s-1.119 1.119-3.148-.91-.91-3.148-.91-3.148" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotonePhoneRounded };
export default React.memo(OutlineDuotonePhoneRounded);
