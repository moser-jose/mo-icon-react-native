import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneCup: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M1.25 21a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"/><path fill="${color}" fill-rule="evenodd" d="M3.002 13Q3 12.532 3 12V7c0-1.886 0-2.828.586-3.414S5.114 3 7 3h6c1.886 0 2.828 0 3.414.586.235.235.376.527.46.914H18c2.526 0 4.75 1.812 4.75 4.25S20.526 13 18 13zm13.994-7Q17 6.449 17 7v4.5h1c1.892 0 3.25-1.322 3.25-2.75S19.892 6 18 6z" clip-rule="evenodd"/><path fill="${color}" d="M9 18h2c2.829 0 4.243 0 5.122-.879.768-.768.864-1.946.877-4.121H3.002c.012 2.175.109 3.353.877 4.121C4.758 18 6.172 18 9 18" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneCup };
export default React.memo(BoldDuotoneCup);
