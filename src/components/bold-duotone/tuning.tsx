import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneTuning: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M13.752 14.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m-10-5a3 3 0 1 0 6 0 3 3 0 0 0-6 0"/><path fill="${color}" d="M7.462 6.583a3 3 0 0 0-1.5.022V1.999a.75.75 0 0 1 1.5 0zm-1.5 5.811a3 3 0 0 0 1.5.02V22a.75.75 0 0 1-1.5 0zm10 5v4.605a.75.75 0 0 0 1.5 0v-4.584a3 3 0 0 1-1.5-.021m1.5-5.811V2a.75.75 0 0 0-1.5 0v9.606a3 3 0 0 1 1.5-.022" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneTuning };
export default React.memo(BoldDuotoneTuning);
