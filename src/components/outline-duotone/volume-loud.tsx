import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneVolumeLoud: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M1.535 10.97c.073-1.208.11-1.813.424-2.394a3.2 3.2 0 0 1 1.38-1.3C3.94 7 4.627 7 6 7c.512 0 .768 0 1.016-.042a3 3 0 0 0 .712-.214c.23-.101.444-.242.871-.524l.22-.144C11.36 4.398 12.632 3.56 13.7 3.924c.205.07.403.17.58.295.922.648.993 2.157 1.133 5.174.052 1.118.087 2.074.087 2.606s-.035 1.488-.087 2.605c-.14 3.018-.21 4.526-1.133 5.175a2.3 2.3 0 0 1-.58.295c-1.067.364-2.339-.474-4.882-2.151l-.219-.144c-.427-.282-.64-.423-.871-.525a3 3 0 0 0-.712-.213c-.248-.042-.504-.042-1.016-.042-1.374 0-2.06 0-2.66-.277a3.2 3.2 0 0 1-1.381-1.3c-.314-.582-.35-1.186-.424-2.395A17 17 0 0 1 1.5 12c0-.323.013-.671.035-1.029Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20 6s1.5 1.8 1.5 6-1.5 6-1.5 6" opacity=".4"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M18 9s.5.9.5 3-.5 3-.5 3" opacity=".7"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneVolumeLoud };
export default React.memo(OutlineDuotoneVolumeLoud);
