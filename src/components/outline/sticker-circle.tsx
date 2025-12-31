import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineStickerCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 0 0-.75 18.47c.002-2.257.034-3.633.435-4.78a7.75 7.75 0 0 1 4.755-4.755c1.147-.401 2.523-.433 4.78-.435A9.25 9.25 0 0 0 12 2.75m9.04 10.001c-2.188.006-3.249.05-4.104.35a6.25 6.25 0 0 0-3.835 3.835c-.3.855-.344 1.916-.35 4.104q.226-.128.427-.328l7.534-7.534q.2-.2.328-.427M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12c0 .884-.408 1.669-.977 2.239l-7.534 7.534c-.57.57-1.355.977-2.239.977-5.937 0-10.75-4.813-10.75-10.75" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineStickerCircle);
