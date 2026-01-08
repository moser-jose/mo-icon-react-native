import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneSofa3: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M4 18h16a2 2 0 1 0 0-4H4a2 2 0 1 0 0 4Z"/><path stroke="${color}" stroke-width="1.5" d="m4.5 14-.075-.299c-1.087-4.347-1.63-6.52-.56-8.023q.102-.142.216-.275C5.278 4 7.519 4 12 4s6.722 0 7.92 1.403q.112.133.214.275c1.07 1.502.527 3.676-.56 8.023L19.5 14" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20 20v-2M4 20v-2" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneSofa3 };
export default React.memo(OutlineDuotoneSofa3);
