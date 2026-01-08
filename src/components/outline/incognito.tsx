import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineIncognito: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M10.388 3.25h3.224c1.085 0 1.966 0 2.675.085.74.088 1.374.276 1.928.71.555.432.892 1.002 1.157 1.698.254.667.467 1.522.73 2.574l.484 1.933H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h1.414l.484-1.933c.263-1.052.476-1.907.73-2.574.266-.696.602-1.266 1.157-1.699.554-.433 1.189-.62 1.928-.71.709-.084 1.59-.084 2.675-.084m-5.427 7h14.078l-.38-1.523c-.278-1.11-.47-1.877-.69-2.45-.21-.555-.418-.848-.677-1.05s-.594-.332-1.183-.403c-.61-.073-1.4-.074-2.544-.074h-3.13c-1.144 0-1.935.001-2.544.074-.59.07-.924.2-1.183.403-.26.202-.466.495-.678 1.05-.218.573-.411 1.34-.689 2.45zm1.539 4.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M2.25 17.5a4.25 4.25 0 0 1 8.35-1.125 3.75 3.75 0 0 1 2.8 0 4.252 4.252 0 0 1 8.35 1.125 4.25 4.25 0 0 1-8.474.477l-.27-.135a2.25 2.25 0 0 0-2.012 0l-.27.135A4.25 4.25 0 0 1 2.25 17.5m15.25-2.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineIncognito };
export default React.memo(OutlineIncognito);
