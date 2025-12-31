import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneUserHandUp: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M1.818 5.273a.75.75 0 0 1 .91.545l.382 1.528a6.71 6.71 0 0 0 4.974 4.904H16a4.124 4.124 0 0 1 4.095 3.642l.65 5.52a.75.75 0 0 1-1.49.176l-.65-5.52A2.624 2.624 0 0 0 16 13.75H7.918l-.08-.018A8.21 8.21 0 0 1 1.653 7.71l-.382-1.528a.75.75 0 0 1 .546-.91" clip-rule="evenodd"/><path fill="${color}" d="M8 13.75V18c0 1.886 0 2.828.586 3.414S10.114 22 12 22s2.828 0 3.414-.586S16 19.886 16 18v-4.25z" opacity=".5"/><circle cx="12" cy="6" r="4" fill="${color}"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneUserHandUp);
