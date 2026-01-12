import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenEmojiFunnyCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M8.913 15.934c1.258.315 2.685.315 4.122-.07s2.673-1.099 3.605-2.001"/><ellipse cx="14.509" cy="9.774" fill="${color}" rx="1" ry="1.5" transform="rotate(-15 14.51 9.774)"/><ellipse cx="8.714" cy="11.327" fill="${color}" rx="1" ry="1.5" transform="rotate(-15 8.714 11.327)"/><path stroke="${color}" stroke-width="1.5" d="m13 16 .478.974a1.5 1.5 0 1 0 2.693-1.322l-.46-.935"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M4.928 4.928A9.95 9.95 0 0 1 9.412 2.34C14.746.911 20.23 4.078 21.659 9.412c1.43 5.335-1.736 10.818-7.07 12.248S3.77 19.923 2.34 14.589a9.95 9.95 0 0 1-.002-5.176"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenEmojiFunnyCircle };
export default React.memo(BrokenEmojiFunnyCircle);
