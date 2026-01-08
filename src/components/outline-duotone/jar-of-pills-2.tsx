import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneJarOfPills2: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M4 3.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C4.801 2 5.034 2 5.5 2h9c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54C15.199 5 14.966 5 14.5 5h-9c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C4 4.199 4 3.966 4 3.5Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M2.5 18h8m-8-8h15" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M10.5 22H6.957c-.571 0-.857 0-1.127-.037a4 4 0 0 1-2.153-1.008c-.201-.184-.384-.404-.75-.842A4 4 0 0 1 2 17.552v-6.63A4 4 0 0 1 3.501 7.8l2.403-1.922c.543-.434.814-.652 1.136-.764C7.36 5 7.708 5 8.403 5h3.24c.7 0 1.051 0 1.375.115.324.114.597.335 1.141.776l2.358 1.908A4 4 0 0 1 18 10.91v1.59m-8-.5v4m-2-2h4"/><path stroke="${color}" stroke-width="1.5" d="M14.773 16.773s.992.21 2.118 1.336 1.336 2.118 1.336 2.118m1.037-4.49c.954.953.985 2.469.069 3.385l-2.211 2.21c-.916.917-2.432.886-3.386-.068s-.985-2.47-.069-3.386l2.211-2.21c.916-.917 2.432-.886 3.386.068Z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneJarOfPills2 };
export default React.memo(OutlineDuotoneJarOfPills2);
