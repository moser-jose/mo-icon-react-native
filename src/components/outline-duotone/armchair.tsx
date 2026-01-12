import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneArmchair: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linejoin="round" stroke-width="1.5" d="M6.821 21H17.18c.995 0 1.494 0 1.906-.1 1.404-.342 2.5-1.512 2.821-3.01.094-.44.094-.97.094-2.033v-4.611C22 10.006 21.057 9 19.895 9c-1.163 0-2.105 1.005-2.105 2.246v5.087H6.21v-5.087C6.21 10.006 5.269 9 4.106 9S2 10.005 2 11.246v4.611c0 1.063 0 1.594.094 2.033.32 1.498 1.417 2.668 2.822 3.01.411.1.91.1 1.905.1Z"/><path stroke="${color}" stroke-width="1.5" d="M6 10V8.154c0-2.3 0-3.451.482-4.308A3.65 3.65 0 0 1 7.8 2.495C8.635 2 9.757 2 12 2s3.365 0 4.2.495c.547.324 1.002.79 1.318 1.351C18 4.703 18 5.853 18 8.154V10" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M19.5 22v-1m-15 1v-1" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneArmchair };
export default React.memo(OutlineDuotoneArmchair);
