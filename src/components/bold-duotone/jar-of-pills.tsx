import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneJarOfPills: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M6 3.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C6.801 2 7.034 2 7.5 2h9c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54C17.199 5 16.966 5 16.5 5h-9c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C6 4.199 6 3.966 6 3.5m-2 7.423v6.629a4 4 0 0 0 .025.448h15.951q.024-.217.024-.435v-6.657q0-.464-.105-.908H4.108Q4 10.451 4 10.922" opacity=".5"/><path fill="${color}" d="M5.501 7.799 9 5h6.018l1.142.891 2.357 1.908A4 4 0 0 1 19.895 10H4.108A4 4 0 0 1 5.5 7.799M4.025 18a4 4 0 0 0 .902 2.113c.366.438.549.658.75.842a4 4 0 0 0 2.153 1.008C8.1 22 8.386 22 8.957 22h6.685a4 4 0 0 0 3.087-1.457l.359-.435A4 4 0 0 0 19.976 18z"/><path fill="${color}" fill-rule="evenodd" d="M12 11.25a.75.75 0 0 1 .75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V16a.75.75 0 0 1-1.5 0v-1.25H10a.75.75 0 0 1 0-1.5h1.25V12a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneJarOfPills };
export default React.memo(BoldDuotoneJarOfPills);
