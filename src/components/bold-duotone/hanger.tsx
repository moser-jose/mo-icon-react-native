import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneHanger: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M11.793 9.88c.874-.01 1.76.232 2.51.739l7.433 5.01c.95.64 1.207 1.697.877 2.588-.325.876-1.19 1.533-2.315 1.533H3.703c-1.113 0-1.975-.645-2.307-1.51-.338-.88-.1-1.931.828-2.583l7.096-4.991a4.4 4.4 0 0 1 2.473-.786m1.672 1.983a2.9 2.9 0 0 0-1.655-.483 2.9 2.9 0 0 0-1.628.512l-7.095 4.992c-.345.242-.39.557-.29.818.105.276.403.548.906.548h16.595c.508 0 .805-.277.908-.555.098-.263.049-.582-.308-.822z" clip-rule="evenodd"/><path fill="${color}" d="M10.286 6.91c0-.568.538-1.16 1.374-1.16s1.374.592 1.374 1.16c0 .311-.112.581-.294.78a11 11 0 0 1-.38.385l-.08.08a9 9 0 0 0-.529.558c-.265.312-.553.724-.658 1.23a4.5 4.5 0 0 1 1.596.016q.075-.12.205-.274c.126-.149.274-.298.44-.464l.075-.072c.14-.14.295-.292.435-.445.443-.48.69-1.115.69-1.795 0-1.542-1.364-2.659-2.874-2.659S8.786 5.367 8.786 6.91a.75.75 0 0 0 1.5 0" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneHanger);
