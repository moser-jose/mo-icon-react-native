import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneDumbbellLargeMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="m3.432 15.62 4.949 4.948c.904.905 1.356 1.357 1.908 1.421q.185.023.371 0c.552-.064 1.004-.516 1.908-1.42.905-.905 1.357-1.357 1.421-1.909a1.6 1.6 0 0 0 0-.37c-.064-.553-.516-1.005-1.42-1.91l-1.113-1.111-3.103-3.104-.734-.733c-.904-.905-1.356-1.357-1.908-1.421a1.6 1.6 0 0 0-.371 0c-.552.064-1.004.516-1.908 1.42-.905.905-1.357 1.357-1.421 1.909a1.6 1.6 0 0 0 0 .37c.064.553.516 1.005 1.42 1.91m8.733-7.267 3.104 3.104 1.112 1.111c.904.905 1.356 1.357 1.908 1.421q.186.023.371 0c.552-.064 1.004-.516 1.908-1.42.905-.905 1.357-1.357 1.421-1.909a1.6 1.6 0 0 0 0-.37c-.064-.553-.516-1.005-1.42-1.91l-4.95-4.948c-.904-.905-1.356-1.357-1.908-1.421a1.6 1.6 0 0 0-.371 0c-.552.064-1.004.516-1.908 1.42-.905.905-1.357 1.357-1.421 1.909a1.6 1.6 0 0 0 0 .37c.064.553.516 1.005 1.42 1.91z" clip-rule="evenodd"/><path fill="${color}" d="m11.457 15.268 3.812-3.812-3.104-3.104-3.812 3.812z" opacity=".5"/><path fill="${color}" fill-rule="evenodd" d="M17.489 1.968a.75.75 0 0 1 1.06 0l3.104 3.104a.75.75 0 0 1-1.06 1.06l-3.105-3.104a.75.75 0 0 1 0-1.06M1.966 17.488a.75.75 0 0 1 1.06 0l3.105 3.104a.75.75 0 0 1-1.06 1.06l-3.105-3.104a.75.75 0 0 1 0-1.06" clip-rule="evenodd" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneDumbbellLargeMinimalistic };
export default React.memo(BoldDuotoneDumbbellLargeMinimalistic);
