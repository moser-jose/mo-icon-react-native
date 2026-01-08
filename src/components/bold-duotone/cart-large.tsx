import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneCartLarge: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M1.288 2.763a.75.75 0 0 1 .95-.474l.264.088.04.013c.626.209 1.155.385 1.571.579.443.206.827.46 1.118.865s.412.849.467 1.333c.052.456.052 1.014.052 1.675V9.5c0 1.436.002 2.437.103 3.192.099.734.28 1.122.556 1.4.277.276.665.456 1.4.555.754.102 1.756.103 3.191.103h7a.75.75 0 0 1 0 1.5h-7.055c-1.367 0-2.47 0-3.337-.116-.9-.121-1.658-.38-2.26-.982s-.86-1.36-.982-2.26c-.116-.867-.116-1.97-.116-3.337V6.883c0-.713-.001-1.185-.042-1.546-.04-.341-.108-.506-.194-.626s-.221-.237-.533-.382c-.33-.153-.777-.304-1.453-.529l-.265-.088a.75.75 0 0 1-.475-.949" clip-rule="evenodd"/><path fill="${color}" d="M5.745 6q.006.39.005.841V9.5c0 1.435.002 2.437.103 3.192q.023.165.05.308h10.12c.959 0 1.439 0 1.814-.248.376-.248.565-.688.943-1.57l.428-1c.81-1.89 1.215-2.833.77-3.508S18.506 6 16.451 6z" opacity=".5"/><path fill="${color}" d="M7.25 9A.75.75 0 0 1 8 8.25h3a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 9m.25 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneCartLarge };
export default React.memo(BoldDuotoneCartLarge);
