import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneRugby: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M13.457 2.11c-2.883.277-5.947 1.141-8.076 3.27s-2.994 5.193-3.271 8.077l8.433 8.433c2.883-.278 5.948-1.142 8.076-3.271 2.13-2.129 2.994-5.193 3.271-8.077z" opacity=".5"/><path fill="${color}" d="M18.069 2.087a27 27 0 0 0-4.612.023l8.433 8.433c.16-1.67.125-3.28.023-4.612a4.136 4.136 0 0 0-3.844-3.844M5.931 21.913a27 27 0 0 0 4.612-.023L2.11 13.457c-.16 1.67-.125 3.28-.023 4.612a4.136 4.136 0 0 0 3.844 3.844"/><path fill="${color}" fill-rule="evenodd" d="M11.943 8.161a.75.75 0 0 1 1.06 0l.888.888.889-.888a.75.75 0 1 1 1.06 1.06l-.888.889.888.888a.75.75 0 0 1-1.06 1.06l-.889-.887-.83.83.888.888a.75.75 0 1 1-1.06 1.06L12 13.063l-.83.83.888.888a.75.75 0 0 1-1.061 1.061l-.888-.888-.888.888a.75.75 0 1 1-1.06-1.06l.887-.889-.888-.888a.75.75 0 1 1 1.06-1.06l.889.888.83-.83-.888-.889a.75.75 0 0 1 1.061-1.06l.888.887.83-.83-.887-.888a.75.75 0 0 1 0-1.06" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneRugby);
