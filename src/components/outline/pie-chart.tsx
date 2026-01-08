import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlinePieChart: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M14.254 1.365c-1.096-.306-2.122.025-2.851.695-.719.66-1.153 1.646-1.153 2.7v6.695a2.295 2.295 0 0 0 2.295 2.295h6.694c1.055 0 2.042-.434 2.701-1.152.67-.73 1.001-1.756.695-2.852a12.1 12.1 0 0 0-8.38-8.381M11.75 4.76c0-.651.27-1.232.668-1.597.386-.354.886-.507 1.433-.354a10.6 10.6 0 0 1 7.34 7.34c.153.547 0 1.047-.355 1.433-.365.397-.945.667-1.597.667h-6.694a.795.795 0 0 1-.795-.795z" clip-rule="evenodd"/><path fill="${color}" d="M8.672 4.716a.75.75 0 1 0-.45-1.431C4.183 4.554 1.25 8.328 1.25 12.789c0 5.502 4.46 9.961 9.96 9.961a9.96 9.96 0 0 0 9.505-6.973.75.75 0 1 0-1.43-.45A8.46 8.46 0 1 1 8.673 4.716"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlinePieChart };
export default React.memo(OutlinePieChart);
