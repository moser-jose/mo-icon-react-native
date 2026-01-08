import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotonePhone: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="m16.1 13.359.456-.453c.63-.626 1.611-.755 2.417-.317l1.91 1.039c1.227.667 1.498 2.302.539 3.255l-1.42 1.412c-.362.36-.81.622-1.326.67M4.003 5.745c-.035-.62.255-1.178.689-1.61l1.57-1.56c.874-.87 2.348-.735 3.111.284l1.261 1.684c.617.824.55 1.952-.157 2.654l-.286.286"/><path stroke="${color}" stroke-width="1.5" d="M18.676 18.966c-1.63.151-5.614-.016-9.86-4.239-4.005-3.982-4.723-7.395-4.813-8.98" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M16.1 13.359s-1.082 1.076-4.037-1.862-1.872-4.015-1.872-4.015" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotonePhone };
export default React.memo(OutlineDuotonePhone);
