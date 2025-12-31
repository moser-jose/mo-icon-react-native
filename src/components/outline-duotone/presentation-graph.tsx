import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotonePresentationGraph: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M2 2h20M9 10.5l1.293-1.293c.333-.333.5-.5.707-.5s.374.167.707.5l.586.586c.333.333.5.5.707.5s.374-.167.707-.5L15 8.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 21v-4m0 4-2 1m2-1 2 1" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M20 2v8.5c0 3.064 0 4.596-1.004 5.548s-2.62.952-5.853.952h-2.286c-3.232 0-4.849 0-5.853-.952S4 13.564 4 10.5V2"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotonePresentationGraph);
