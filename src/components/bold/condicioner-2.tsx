import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldCondicioner2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M2.879 5.879C2 6.757 2 8.172 2 11c0 3.771 0 5.657 1.172 6.828.518.52 1.177.808 2.078.97 0-.832.004-1.531.08-2.092.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08h4.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.726.456.455.642 1.022.726 1.65.075.56.08 1.26.08 2.091.9-.16 1.56-.45 2.078-.969C22 16.657 22 14.771 22 11c0-2.828 0-4.243-.879-5.121C20.243 5 18.828 5 16 5H8c-2.828 0-4.243 0-5.121.879M5.25 11.5a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75M6 8.25a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/><path fill="${color}" d="M17.25 18.953c0-.938-.003-1.572-.067-2.048-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066h-4c-.964 0-1.612.002-2.095.066-.461.063-.659.17-.789.3s-.237.328-.3.79c-.063.475-.066 1.109-.066 2.047C7.645 19 8.712 19 10 19h4c1.288 0 2.355 0 3.25-.047"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldCondicioner2 };
export default React.memo(BoldCondicioner2);
