import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneTuning4: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0m0 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m-2 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4"/><path fill="${color}" d="M13.855 12.75a2 2 0 0 0 0-1.5H19a.75.75 0 0 1 0 1.5zm-3.71-1.5a2 2 0 0 0 0 1.5H5a.75.75 0 0 1 0-1.5zm1.71 8a2 2 0 0 1 0 1.5H19a.75.75 0 0 0 0-1.5zm-3.71 0H5a.75.75 0 0 0 0 1.5h3.145a2 2 0 0 1 0-1.5m7.71-14.5a2 2 0 0 0 0-1.5H19a.75.75 0 0 1 0 1.5zm-3.71 0a2 2 0 0 1 0-1.5H5a.75.75 0 0 0 0 1.5z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneTuning4);
