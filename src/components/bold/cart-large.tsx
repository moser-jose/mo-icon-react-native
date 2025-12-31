import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldCartLarge: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M1.289 2.763a.75.75 0 0 1 .948-.474l.305.101c.626.209 1.155.385 1.572.579.442.206.826.46 1.117.865s.412.849.467 1.333q.04.372.047.833h10.706c2.055 0 3.082 0 3.527.674.444.675.04 1.62-.77 3.508l-.428 1c-.378.882-.567 1.323-.943 1.57s-.855.248-1.815.248H5.903c.105.54.271.856.506 1.091.277.277.666.457 1.4.556.755.102 1.756.103 3.191.103h7a.75.75 0 0 1 0 1.5h-7.055c-1.367 0-2.47 0-3.337-.116-.9-.121-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337V6.883c0-.713 0-1.185-.042-1.546-.04-.341-.107-.506-.194-.626-.086-.12-.221-.237-.533-.382-.33-.153-.777-.304-1.453-.529l-.265-.088a.75.75 0 0 1-.474-.949M8 8.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/><path fill="${color}" d="M7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldCartLarge);
