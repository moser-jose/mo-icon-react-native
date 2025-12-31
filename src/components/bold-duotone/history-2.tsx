import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneHistory2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M11.25 2a.75.75 0 0 1 .75-.75c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12a.75.75 0 0 1 1.5 0A9.25 9.25 0 1 0 12 2.75a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/><path fill="${color}" fill-rule="evenodd" d="M9.1 2.398a.75.75 0 0 1-.43.97 9 9 0 0 0-.42.174.75.75 0 1 1-.608-1.371q.24-.107.488-.203a.75.75 0 0 1 .97.43M5.648 4.241a.75.75 0 0 1-.026 1.06 9 9 0 0 0-.321.321.75.75 0 1 1-1.087-1.034q.183-.191.373-.373a.75.75 0 0 1 1.06.026M3.16 7.26a.75.75 0 0 1 .381.99q-.091.207-.174.42a.75.75 0 0 1-1.399-.54q.096-.248.202-.488a.75.75 0 0 1 .99-.381" clip-rule="evenodd" opacity=".5"/><path fill="${color}" d="M12 8.25a.75.75 0 0 1 .75.75v3.25H16a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneHistory2);
