import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotonePills2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M13.465 20.536a5 5 0 1 0 7.07-7.071 5 5 0 0 0-7.07 7.07M3 7a5 5 0 1 0 10 0A5 5 0 0 0 3 7" opacity=".5"/><path fill="${color}" d="M12.056 17.75h9.888a5 5 0 0 0 0-1.5h-9.888a5 5 0 0 0 0 1.5M3.974 4.034l6.991 6.992a5 5 0 0 0 1.061-1.06L5.035 2.973a5 5 0 0 0-1.061 1.06"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotonePills2 };
export default React.memo(BoldDuotonePills2);
