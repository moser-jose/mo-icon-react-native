import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenUfo3: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m3.636 20.364 4.121-4.122M10 22l2.707-2.222M2 14l2.222-2.707M7.856 4c1.15.09 2.579.636 4.09 1.56M5.275 6.583c.165 2.13 1.905 5.225 4.702 8.021 3.906 3.907 8.394 5.752 10.024 4.122.826-.825.76-2.384-.014-4.229a14 14 0 0 0-.966-1.864m-4.802-2.271c-2.256-2.256-2.726-3.478-2.815-3.975-.032-.174.052-.335.178-.46a4.73 4.73 0 0 1 6.688 0l.384.384a4.73 4.73 0 0 1 0 6.689c-.124.125-.286.21-.46.178-.337-.06-1.008-.297-2.108-1.146"/><path fill="${color}" d="M13.029 13.27a1 1 0 1 1-1.415-1.414 1 1 0 0 1 1.414 1.414M10.2 9.028a1 1 0 1 1-1.414-1.415A1 1 0 0 1 10.2 9.028m7.071 7.071a1 1 0 1 1-1.414-1.414 1 1 0 0 1 1.414 1.414"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenUfo3);
