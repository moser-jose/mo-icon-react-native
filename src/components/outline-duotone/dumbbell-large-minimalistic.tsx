import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneDumbbellLargeMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="m8.319 12.2 3.88-3.88m3.104 3.103-3.88 3.88" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M3.432 15.62c-.905-.905-1.357-1.357-1.421-1.91a1.6 1.6 0 0 1 0-.37c.064-.552.516-1.004 1.42-1.908.905-.905 1.357-1.357 1.909-1.421q.186-.023.37 0c.553.064 1.005.516 1.91 1.42l4.948 4.95c.905.904 1.357 1.356 1.421 1.908q.023.186 0 .371c-.064.552-.516 1.004-1.42 1.908-.905.905-1.357 1.357-1.909 1.421a1.6 1.6 0 0 1-.37 0c-.553-.064-1.005-.516-1.91-1.42zm8-8c-.905-.905-1.357-1.357-1.421-1.91a1.6 1.6 0 0 1 0-.37c.064-.552.516-1.004 1.42-1.908.905-.905 1.357-1.357 1.909-1.421q.186-.022.37 0c.553.064 1.005.516 1.91 1.42l4.948 4.95c.905.904 1.357 1.356 1.421 1.908q.023.185 0 .371c-.064.552-.516 1.004-1.42 1.908-.905.905-1.357 1.357-1.909 1.421a1.6 1.6 0 0 1-.37 0c-.553-.064-1.005-.516-1.91-1.42z"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m18.019 2.498 3.104 3.104M2.498 18.018l3.104 3.104" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneDumbbellLargeMinimalistic };
export default React.memo(OutlineDuotoneDumbbellLargeMinimalistic);
