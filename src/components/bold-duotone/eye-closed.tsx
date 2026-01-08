import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneEyeClosed: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M2.919 6.605a1 1 0 0 0-1.838.79v.001l.002.003.003.006.01.022.032.071q.04.091.12.25c.105.21.262.506.47.857.41.688 1.027 1.6 1.872 2.52l-.797.797a1 1 0 1 0 1.414 1.414l.84-.84a12 12 0 0 0 1.897 1.256l-.782 1.203a1 1 0 1 0 1.676 1.09l.985-1.514a10.6 10.6 0 0 0 2.177.425V16.5a1 1 0 0 0 1 1V13c-2.748 0-4.819-1.198-6.304-2.589l-.024-.023a12 12 0 0 1-.564-.568 13.4 13.4 0 0 1-1.67-2.237 12 12 0 0 1-.516-.969zm-1.838.79L2 7c-.92.394-.919.395-.919.395" clip-rule="evenodd"/><path fill="${color}" d="M15.22 12.398A8.7 8.7 0 0 1 12 13v4.5a1 1 0 0 0 1-1v-1.544c.772-.07 1.497-.217 2.176-.425l.986 1.515a1 1 0 0 0 1.676-1.091l-.782-1.203c.701-.37 1.332-.8 1.897-1.256l.84.84a1 1 0 1 0 1.414-1.414l-.797-.798a15.4 15.4 0 0 0 2.302-3.296 10 10 0 0 0 .19-.395l.011-.026.004-.008.002-.005a1 1 0 1 0-1.838-.788l-.005.011a5 5 0 0 1-.146.302 13 13 0 0 1-2.614 3.48c-.841.79-1.87 1.517-3.095 2" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneEyeClosed };
export default React.memo(BoldDuotoneEyeClosed);
