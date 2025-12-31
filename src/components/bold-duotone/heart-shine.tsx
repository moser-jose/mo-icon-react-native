import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneHeartShine: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M1.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m18 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75M12 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" clip-rule="evenodd" opacity=".8"/><path fill="${color}" d="M5.47 5.47a.75.75 0 0 1 1.06 0l.344.343a.75.75 0 0 1-1.061 1.06L5.47 6.53a.75.75 0 0 1 0-1.06m13.06 0a.75.75 0 0 1 0 1.06l-.343.344a.75.75 0 0 1-1.06-1.061l.343-.343a.75.75 0 0 1 1.06 0M6.873 17.127a.75.75 0 0 1 0 1.06l-.343.343a.75.75 0 0 1-1.06-1.06l.343-.343a.75.75 0 0 1 1.06 0m10.254 0a.75.75 0 0 1 1.06 0l.343.343a.75.75 0 1 1-1.06 1.06l-.343-.343a.75.75 0 0 1 0-1.06" opacity=".5"/><path fill="${color}" d="M7 11.06c0 2.542 2.01 3.897 3.48 5.11.52.427 1.02.83 1.52.83s1-.403 1.52-.83c1.47-1.213 3.48-2.568 3.48-5.11s-2.75-4.346-5-1.902c-2.25-2.444-5-.64-5 1.902"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneHeartShine);
