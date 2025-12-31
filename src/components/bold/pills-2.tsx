import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldPills2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12.026 9.965a5 5 0 0 0-6.992-6.992zm-1.061 1.061a5 5 0 0 1-6.991-6.992zm10.979 5.224a5 5 0 0 0-9.887 0zm0 1.5h-9.888a5 5 0 0 0 9.888 0"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldPills2);
