import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineHanger: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M11.66 5.75c-.836 0-1.374.592-1.374 1.16a.75.75 0 0 1-1.5 0c0-1.543 1.364-2.66 2.874-2.66s2.874 1.117 2.874 2.66c0 .68-.247 1.314-.69 1.794-.14.153-.294.305-.435.445l-.074.072a8 8 0 0 0-.44.464 2.4 2.4 0 0 0-.206.274 4.3 4.3 0 0 1 1.615.66l7.432 5.01c.95.64 1.207 1.697.877 2.588-.325.876-1.19 1.533-2.315 1.533H3.703c-1.113 0-1.975-.645-2.307-1.51-.338-.88-.1-1.931.828-2.583l7.095-4.992a4.3 4.3 0 0 1 1.774-.722c.106-.507.393-.918.659-1.23a9 9 0 0 1 .528-.558l.081-.08c.142-.14.266-.263.38-.386.181-.198.293-.468.293-.78 0-.567-.538-1.159-1.374-1.159m1.805 6.112a2.9 2.9 0 0 0-1.655-.482 2.9 2.9 0 0 0-1.628.512l-7.095 4.991c-.345.243-.39.558-.29.819.105.275.403.548.906.548h16.595c.508 0 .805-.277.908-.555.098-.264.049-.582-.308-.822z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineHanger };
export default React.memo(OutlineHanger);
