import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneDocuments: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none"><path fill="${color}" fill-rule="evenodd" d="M5.879 2.879C5 3.757 5 5.172 5 8v8c0 2.828 0 4.243.879 5.121C6.757 22 8.172 22 11 22h2c2.828 0 4.243 0 5.121-.879C19 20.243 19 18.828 19 16V8c0-2.828 0-4.243-.879-5.121C17.243 2 15.828 2 13 2h-2c-2.828 0-4.243 0-5.121.879M8.25 17a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75M9 12.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM8.25 9A.75.75 0 0 1 9 8.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 9" clip-rule="evenodd"/><path fill="${color}" d="M5.235 4.058C5 4.942 5 6.178 5 8v8c0 1.823 0 3.059.235 3.942L5 19.924c-.975-.096-1.631-.313-2.121-.802C2 18.242 2 16.829 2 14v-4c0-2.828 0-4.242.879-5.121.49-.49 1.146-.707 2.121-.803zm13.53 15.884C19 19.059 19 17.823 19 16V8c0-1.823 0-3.058-.235-3.942l.235.018c.975.096 1.631.313 2.121.803C22 5.758 22 7.172 22 10v4c0 2.829 0 4.243-.879 5.122-.49.49-1.146.706-2.121.802z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneDocuments);
