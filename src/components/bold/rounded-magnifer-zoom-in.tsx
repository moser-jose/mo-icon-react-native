import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldRoundedMagniferZoomIn: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M20.128 11.143c0 5.05-4.058 9.143-9.064 9.143S2 16.192 2 11.143 6.058 2 11.064 2s9.064 4.093 9.064 9.143"/><path fill="${color}" fill-rule="evenodd" d="M11.064 8.35c.417 0 .755.34.755.761v1.27h1.26c.416 0 .754.341.754.762 0 .42-.338.762-.755.762H11.82v1.27c0 .42-.338.762-.755.762a.76.76 0 0 1-.755-.762v-1.27H9.05a.76.76 0 0 1-.755-.762.76.76 0 0 1 .756-.762h1.259v-1.27c0-.42.338-.762.755-.762" clip-rule="evenodd"/><path fill="${color}" fill-rule="evenodd" d="M17.82 19.7a1.77 1.77 0 0 1 1.9-1.917c.189.016.414.084.643.154l.066.02.06.018c.211.063.42.126.58.212a1.786 1.786 0 0 1 .638 2.55c-.1.151-.255.307-.41.464l-.045.044-.044.045c-.156.157-.31.313-.46.414a1.754 1.754 0 0 1-2.528-.643 3.3 3.3 0 0 1-.21-.585l-.018-.06-.02-.067c-.07-.232-.137-.459-.153-.648" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldRoundedMagniferZoomIn };
export default React.memo(BoldRoundedMagniferZoomIn);
