import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineEmojiFunnyCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M15.475 9.516c.215.8-.044 1.565-.577 1.707-.534.143-1.14-.39-1.354-1.19s.044-1.564.577-1.707c.534-.143 1.14.39 1.354 1.19M9.68 11.069c.214.8-.044 1.564-.578 1.707s-1.14-.39-1.354-1.19.044-1.564.578-1.707 1.14.39 1.354 1.19"/><path fill="${color}" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m15.929 1.34a.75.75 0 0 1-.017 1.061q-.256.248-.536.476l.218.445a2.25 2.25 0 1 1-4.04 1.982l-.273-.556a8.9 8.9 0 0 1-3.8-.087.75.75 0 1 1 .364-1.455c1.13.283 2.428.286 3.746-.067s2.44-1.005 3.277-1.815a.75.75 0 0 1 1.06.017m-3.174 3.005.146.298a.75.75 0 1 0 1.347-.66l-.127-.259a9 9 0 0 1-1.366.621" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineEmojiFunnyCircle };
export default React.memo(OutlineEmojiFunnyCircle);
