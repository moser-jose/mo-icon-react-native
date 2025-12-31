import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneBag3: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M5.574 4.691c-.833.692-1.053 1.862-1.492 4.203l-.75 4c-.617 3.292-.925 4.938-.026 6.022C4.206 20 5.88 20 9.23 20h5.54c3.35 0 5.024 0 5.924-1.084s.59-2.73-.026-6.022l-.75-4c-.44-2.34-.659-3.511-1.492-4.203C17.593 4 16.402 4 14.02 4H9.98c-2.382 0-3.573 0-4.406.691" opacity=".5"/><path fill="${color}" d="M12 9.25a2.25 2.25 0 0 1-2.122-1.5.75.75 0 1 0-1.414.5 3.751 3.751 0 0 0 7.073 0 .75.75 0 1 0-1.414-.5A2.25 2.25 0 0 1 12 9.25"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneBag3);
