import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneTuning3: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4m6 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0m8 2a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/><path fill="${color}" d="M12.75 10.145a2 2 0 0 0-1.5 0V5a.75.75 0 0 1 1.5 0zm-1.5 3.71a2 2 0 0 0 1.5 0V19a.75.75 0 0 1-1.5 0zm8-1.71a2 2 0 0 1 1.5 0V5a.75.75 0 0 0-1.5 0zm0 3.71V19a.75.75 0 0 0 1.5 0v-3.145a2 2 0 0 1-1.5 0m-14.5-7.71a2 2 0 0 0-1.5 0V5a.75.75 0 0 1 1.5 0zm0 3.71a2 2 0 0 1-1.5 0V19a.75.75 0 0 0 1.5 0z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneTuning3);
