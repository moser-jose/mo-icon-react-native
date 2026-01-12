import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneSledgehammer: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M7.613 4.604C9.349 2.868 10.217 2 11.295 2c1.079 0 1.947.868 3.682 2.604l4.42 4.419C21.131 10.758 22 11.626 22 12.705s-.868 1.946-2.604 3.682-2.604 2.604-3.682 2.604c-1.079 0-1.947-.868-3.682-2.604l-4.42-4.419C5.878 10.233 5.01 9.365 5.01 8.286s.868-1.946 2.604-3.682Z"/><path stroke="${color}" stroke-width="1.5" d="m11.295 15.65-5.523 5.524c-.343.343-.514.514-.692.617a1.56 1.56 0 0 1-1.562 0c-.179-.103-.35-.274-.692-.617-.343-.342-.514-.513-.617-.691a1.56 1.56 0 0 1 0-1.563c.103-.178.274-.349.617-.692l5.523-5.523M18.66 8.286l.368-.368c.342-.342.514-.514.617-.692a1.56 1.56 0 0 0 0-1.562c-.103-.178-.275-.35-.617-.692s-.514-.513-.692-.616a1.56 1.56 0 0 0-1.562 0c-.178.103-.35.274-.692.616l-.368.369" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneSledgehammer };
export default React.memo(OutlineDuotoneSledgehammer);
