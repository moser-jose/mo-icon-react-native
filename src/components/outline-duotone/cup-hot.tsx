import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneCupHot: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M3.284 11.266c-.133-2-.2-2.999.393-3.632C4.27 7 5.272 7 7.276 7h5.449c2.003 0 3.005 0 3.598.634.593.633.526 1.633.393 3.632l-.343 5.133c-.177 2.655-.265 3.982-1.13 4.792S13.047 22 10.387 22h-.774c-2.66 0-3.99 0-4.856-.81-.865-.809-.953-2.136-1.13-4.79zM17 17h1a4 4 0 0 0 0-8h-1"/><path stroke="${color}" stroke-width="1.5" d="M16.5 18h-13" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m6.05 5.061.411-.575a.707.707 0 0 0-.165-.987.707.707 0 0 1-.165-.986l.41-.575m7.51 3.123.41-.575a.707.707 0 0 0-.165-.987.707.707 0 0 1-.165-.986l.41-.575"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m10.05 5.061.411-.575a.707.707 0 0 0-.165-.987.707.707 0 0 1-.165-.986l.41-.575" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneCupHot);
