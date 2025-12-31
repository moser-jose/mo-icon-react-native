import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneVideoFrame: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M6.25 2.22c-1.223.195-2.101.56-2.786 1.244-.684.684-1.048 1.562-1.242 2.785H6.25zM2.069 7.75c-.059.98-.067 2.133-.069 3.5h4.25v-3.5zm-.069 5c.002 1.365.01 2.518.069 3.5H6.25v-3.5zm.222 5c.194 1.222.558 2.1 1.242 2.785.685.684 1.563 1.048 2.786 1.242V17.75zm15.528 4.027c1.223-.194 2.102-.558 2.785-1.242.685-.684 1.05-1.563 1.243-2.786H17.75zm4.181-5.527c.059-.982.067-2.135.069-3.5h-4.25v3.5zm.069-5c-.002-1.367-.01-2.52-.069-3.5H17.75v3.5zm-.222-5c-.194-1.224-.558-2.102-1.242-2.786S18.973 2.415 17.75 2.22v4.028z"/><path fill="${color}" d="M7.75 21.931C8.906 22 10.3 22 12 22s3.094 0 4.25-.069V12.75h-8.5zm8.5-19.862C15.094 2 13.7 2 12 2s-3.094 0-4.25.069v9.181h8.5z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneVideoFrame);
