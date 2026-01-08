import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenVideoFrameCut: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M17 3.5v17"/><path stroke="${color}" stroke-dasharray="3 3" stroke-linecap="round" stroke-width="1.5" d="M12 2v20"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7 3.5v17m-4-12h4m14 0h-4m-14 7h4m14 0h-4"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.5 3.004c2.794.02 4.324.163 5.328 1.168C20.892 5.235 20.99 6.886 21 10.001m-6.5 10.996c2.794-.02 4.324-.163 5.328-1.168C20.892 18.766 20.99 17.115 21 14M9.5 20.997c-2.793-.02-4.323-.163-5.327-1.168C3 18.657 3 16.772 3 13v-2c0-3.772 0-5.657 1.172-6.829C5.176 3.167 6.706 3.024 9.5 3.004"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenVideoFrameCut };
export default React.memo(BrokenVideoFrameCut);
