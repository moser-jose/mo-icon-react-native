import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneFloorLamp: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 7a3 3 0 0 0 2.835-2.018C15.016 4.46 14.552 4 14 4h-4c-.552 0-1.017.46-.836.982A3 3 0 0 0 12 7"/><path fill="${color}" d="M12 2a2 2 0 0 1 2 2h-4a2 2 0 0 1 2-2" opacity=".5"/><path fill="${color}" d="m6.455 10.98.067-.09a3.12 3.12 0 0 0 .107-3.497c-.305-.48-.968-.398-1.318.05L2.78 10.684c-.35.448-.274 1.118.26 1.305 1.2.42 2.585.055 3.416-1.01"/><path fill="${color}" d="M2.439 7.786a2.033 2.033 0 0 1 2.872-.343L2.78 10.684a2.076 2.076 0 0 1-.34-2.898" opacity=".5"/><path fill="${color}" d="m17.545 10.98-.067-.09a3.12 3.12 0 0 1-.107-3.497c.305-.48.968-.398 1.318.05l2.532 3.241c.35.448.274 1.118-.26 1.305-1.2.42-2.585.055-3.416-1.01"/><path fill="${color}" d="M21.561 7.786a2.033 2.033 0 0 0-2.872-.343l2.532 3.241a2.076 2.076 0 0 0 .34-2.898" opacity=".5"/><path fill="${color}" fill-rule="evenodd" d="M8.25 22a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/><path fill="${color}" d="M12 7q.387 0 .745-.093.005.046.005.093v6.407q.184-.176.387-.334l.012-.009 3.94-2.892a3.1 3.1 0 0 0 .856 1.232l-3.9 2.863a3.39 3.39 0 0 0-1.294 2.67v4.313h-1.5v-4.346a3.39 3.39 0 0 0-1.296-2.637l-3.9-2.863a3.1 3.1 0 0 0 .856-1.232l3.941 2.892.012.01q.203.157.386.333V7a1 1 0 0 1 .006-.093Q11.614 7 12 7m-.002 15.75h.005z" opacity=".55"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneFloorLamp };
export default React.memo(BoldDuotoneFloorLamp);
