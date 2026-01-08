import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneSortByAlphabet: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M13 7H3m7 5H3m5 5H3" opacity=".5"/><path fill="${color}" d="M11.316 16.692a.75.75 0 1 0 1.368.616zM16.5 7l.684-.308a.75.75 0 0 0-1.368 0zm3.816 10.308a.75.75 0 1 0 1.368-.616zm-.952-3.944.684-.308zm-5.728-.75a.75.75 0 0 0 0 1.5zm-.952 4.694 4.5-10-1.368-.616-4.5 10zm9-.616-1.636-3.636-1.368.615 1.636 3.637zm-1.636-3.636-2.864-6.364-1.368.616 2.864 6.363zm-.684-.442h-5.728v1.5h5.728z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneSortByAlphabet };
export default React.memo(OutlineDuotoneSortByAlphabet);
