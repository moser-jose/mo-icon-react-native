import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneVolumeCross: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M7.016 17.043C6.768 17 6.512 17 6 17c-1.374 0-2.06 0-2.66-.277a3.2 3.2 0 0 1-1.381-1.3c-.314-.582-.35-1.186-.424-2.395A17 17 0 0 1 1.5 12c0-.323.013-.671.035-1.029.073-1.208.11-1.813.424-2.394a3.2 3.2 0 0 1 1.38-1.3C3.939 7 4.626 7 6 7c.512 0 .768 0 1.016-.042a3 3 0 0 0 .712-.214c.23-.101.444-.242.871-.524l.22-.144C11.36 4.4 12.632 3.562 13.7 3.926c.205.07.403.17.58.295.835.587.972 1.879 1.094 4.357"/><path stroke="${color}" stroke-width="1.5" d="M15.5 8.5V12c0 .532-.035 1.488-.087 2.605-.14 3.018-.21 4.526-1.133 5.175a2.3 2.3 0 0 1-.58.295c-.967.33-2.102-.328-4.2-1.702C8.833 17.915 7.4 17 7 17" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20 18s1.5-1.8 1.5-6c0-2.433-.503-4.061-.927-5M18 15s.5-.9.5-3c0-.862-.084-1.522-.183-2" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 2 2 22"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneVolumeCross };
export default React.memo(OutlineDuotoneVolumeCross);
