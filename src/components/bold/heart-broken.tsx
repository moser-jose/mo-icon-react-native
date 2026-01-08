import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldHeartBroken: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M8.106 18.247C5.298 16.084 2 13.542 2 9.137c0-4.6 4.923-7.935 9.264-4.323L9.81 8.204a.75.75 0 0 0 .253.907l2.833 2.023-2.466 2.878a.75.75 0 0 0 .039 1.019l1.7 1.7-.91 3.64c-.756-.254-1.516-.843-2.298-1.46q-.417-.328-.856-.664"/><path fill="${color}" d="M12.812 20.346c.732-.266 1.469-.838 2.226-1.435q.417-.328.856-.664C18.702 16.084 22 13.542 22 9.137c0-4.515-4.741-7.81-9.02-4.518l-1.553 3.622 3.009 2.149a.75.75 0 0 1 .133 1.098l-2.548 2.973 1.51 1.509a.75.75 0 0 1 .197.712z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldHeartBroken };
export default React.memo(BoldHeartBroken);
