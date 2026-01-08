import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineSkateboarding: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M11.332 5.345a2.49 2.49 0 0 1 2.298-.177c1.727.74 2.042 3.055.574 4.229l-.445.356-.124.1a1.25 1.25 0 0 0 .115 1.98l.153.097.01.006.157.1a3.75 3.75 0 0 1 1.679 3.028l.001.175V16.5a.75.75 0 0 1-1.5 0v-1.396a2.25 2.25 0 0 0-1.008-1.817l-.093-.06-.04-.025-.018-.01q-.12-.074-.183-.117a2.75 2.75 0 0 1-.099-4.483l.458-.366a.987.987 0 0 0-1.14-1.609l-3.23 2.019a.75.75 0 0 1-.794-1.272zm4.44 4.473a.75.75 0 0 1 .91-.546 7.5 7.5 0 0 0 3.636 0 .75.75 0 1 1 .364 1.456 9 9 0 0 1-4.364 0 .75.75 0 0 1-.546-.91M11.53 13.47a.75.75 0 0 1 0 1.06 5.87 5.87 0 0 1-4.151 1.72H7a.75.75 0 0 1 0-1.5h.379c1.159 0 2.27-.46 3.09-1.28a.75.75 0 0 1 1.061 0"/><path fill="${color}" fill-rule="evenodd" d="M19 1.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M2.498 16.443a.75.75 0 0 1 1.06.055l.608.676A3.25 3.25 0 0 0 6.58 18.25h10.84a3.25 3.25 0 0 0 2.415-1.076l.608-.676a.75.75 0 1 1 1.116 1.004l-.609.676a4.75 4.75 0 0 1-3.53 1.572H6.58a4.75 4.75 0 0 1-3.53-1.572l-.608-.676a.75.75 0 0 1 .055-1.06" clip-rule="evenodd"/><path fill="${color}" d="M8 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineSkateboarding };
export default React.memo(OutlineSkateboarding);
