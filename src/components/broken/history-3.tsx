import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenHistory3: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-dasharray="0.5 3.5" stroke-linecap="round" stroke-width="1.5" d="M17 3.338A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10a10 10 0 0 0-.832-4"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 12c0-1.821-.487-3.53-1.338-5M12 2c1.821 0 3.53.487 5 1.338"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v4h4"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenHistory3 };
export default React.memo(BrokenHistory3);
