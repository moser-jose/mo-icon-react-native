import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenDumbbellLargeMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="m8.319 12.2 3.88-3.88m3.104 3.103-3.88 3.88"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m7.143 19.331 1.238 1.237c.904.905 1.356 1.357 1.908 1.421q.185.023.371 0c.552-.064 1.004-.516 1.908-1.42.905-.905 1.357-1.357 1.421-1.909a1.6 1.6 0 0 0 0-.37c-.064-.553-.516-1.005-1.42-1.91l-4.95-4.948c-.904-.905-1.356-1.357-1.908-1.421a1.6 1.6 0 0 0-.371 0c-.552.064-1.004.516-1.908 1.42-.905.905-1.357 1.357-1.421 1.909a1.6 1.6 0 0 0 0 .37c.064.553.516 1.005 1.42 1.91l.62.618M16.857 4.669l-1.238-1.237c-.904-.905-1.356-1.357-1.908-1.421a1.6 1.6 0 0 0-.371 0c-.552.064-1.004.516-1.908 1.42-.905.905-1.357 1.357-1.421 1.909a1.6 1.6 0 0 0 0 .37c.064.553.516 1.005 1.42 1.91l4.95 4.948c.904.905 1.356 1.357 1.908 1.421q.186.023.371 0c.552-.064 1.004-.516 1.908-1.42.905-.905 1.357-1.357 1.421-1.909a1.6 1.6 0 0 0 0-.37c-.064-.553-.516-1.005-1.42-1.91l-.62-.618"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m18.019 2.498 3.104 3.104M2.498 18.018l3.104 3.104"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenDumbbellLargeMinimalistic };
export default React.memo(BrokenDumbbellLargeMinimalistic);
