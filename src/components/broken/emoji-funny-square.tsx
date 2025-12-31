import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenEmojiFunnySquare: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M8.913 15.934c1.258.315 2.685.315 4.122-.07s2.673-1.099 3.605-2.001"/><ellipse cx="14.509" cy="9.774" fill="${color}" rx="1" ry="1.5" transform="rotate(-15 14.51 9.774)"/><ellipse cx="8.714" cy="11.327" fill="${color}" rx="1" ry="1.5" transform="rotate(-15 8.714 11.327)"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20.796 9.643c1.111 4.147 1.667 6.22.724 7.853s-3.016 2.19-7.163 3.3c-4.147 1.111-6.22 1.667-7.853.724s-2.19-3.016-3.3-7.163c-1.112-4.147-1.667-6.22-.724-7.853s3.016-2.19 7.163-3.3c4.147-1.112 6.22-1.667 7.853-.724 1.009.582 1.606 1.595 2.177 3.26"/><path stroke="${color}" stroke-width="1.5" d="m13 16 .478.974a1.5 1.5 0 1 0 2.693-1.322l-.46-.935"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenEmojiFunnySquare);
