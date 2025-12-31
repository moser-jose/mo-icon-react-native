import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldRugby: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M21.913 5.931a4.136 4.136 0 0 0-3.844-3.844 28 28 0 0 0-3.624-.05l7.519 7.518a28 28 0 0 0-.051-3.624M2.087 18.069a4.136 4.136 0 0 0 3.844 3.844c1.068.081 2.313.12 3.625.05l-7.52-7.52c-.07 1.313-.03 2.558.051 3.626"/><path fill="${color}" fill-rule="evenodd" d="M2.222 12.509c.369-2.593 1.262-5.232 3.159-7.128 1.896-1.897 4.536-2.79 7.128-3.159l9.269 9.269c-.369 2.592-1.262 5.232-3.159 7.128-1.896 1.897-4.535 2.79-7.128 3.159zm9.72-4.349a.75.75 0 0 1 1.061 0l.888.888.889-.888a.75.75 0 1 1 1.06 1.06l-.888.889.888.888a.75.75 0 1 1-1.06 1.06l-.889-.888-.83.831.888.888a.75.75 0 0 1-1.06 1.06L12 13.062l-.83.83.888.889a.75.75 0 1 1-1.061 1.06l-.888-.888-.888.888a.75.75 0 0 1-1.06-1.06l.887-.889-.888-.888a.75.75 0 1 1 1.06-1.06l.889.888.83-.83-.888-.889a.75.75 0 0 1 1.061-1.06l.888.887.83-.83-.887-.888a.75.75 0 0 1 0-1.06" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldRugby);
