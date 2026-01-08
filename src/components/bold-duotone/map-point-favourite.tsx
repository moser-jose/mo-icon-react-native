import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneMapPointFavourite: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M10.537 21.674a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.606 20 10.144 20 5.645 16.418 2 12 2s-8 3.646-8 8.143c0 4.462 2.553 9.67 6.537 11.531" opacity=".5"/><path fill="${color}" d="M10.724 13.33C9.554 12.396 8 10.888 8 9.46c0-2.426 2.2-3.332 4-1.458 1.8-1.874 4-.968 4 1.458 0 1.428-1.553 2.936-2.724 3.87-.56.447-.84.67-1.276.67s-.716-.223-1.276-.67"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneMapPointFavourite };
export default React.memo(BoldDuotoneMapPointFavourite);
