import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneDisplay: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M2.879 3.844C2 4.687 2 6.044 2 8.76v.96c0 2.715 0 4.073.879 4.916.878.844 2.293.844 5.121.844h8c2.828 0 4.243 0 5.121-.844.879-.843.879-2.2.879-4.916v-.96c0-2.715 0-4.073-.879-4.916C20.243 3 18.828 3 16 3H8c-2.828 0-4.243 0-5.121.844" clip-rule="evenodd"/><path fill="${color}" d="m18.237 19.597-5.487-1.756v-2.36h-1.5v2.36l-5.487 1.756a.714.714 0 0 0-.474.911.76.76 0 0 0 .948.456L12 19.119l5.763 1.845a.76.76 0 0 0 .949-.456.714.714 0 0 0-.475-.91" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneDisplay };
export default React.memo(BoldDuotoneDisplay);
