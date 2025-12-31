import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineFacemaskCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 0 0-9.245 9.545l.05.02 4.21 1.871 2.85-1.14a5.75 5.75 0 0 1 4.27 0l2.85 1.14 4.21-1.871.05-.02q.005-.147.005-.295A9.25 9.25 0 0 0 12 2.75m9.026 11.281-3.319 1.476-.368 4.048a9.26 9.26 0 0 0 3.687-5.524m-5.275 6.427.002-.026.45-4.943-2.625-1.05a4.25 4.25 0 0 0-3.156 0l-2.624 1.05.449 4.943.002.026A9.2 9.2 0 0 0 12 21.25a9.2 9.2 0 0 0 3.751-.792m-9.09-.903-.368-4.048-3.32-1.476a9.26 9.26 0 0 0 3.688 5.524M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12" clip-rule="evenodd"/><path fill="${color}" d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5m-6 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineFacemaskCircle);
