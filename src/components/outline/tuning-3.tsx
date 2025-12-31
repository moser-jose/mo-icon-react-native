import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineTuning3: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 8.75a.75.75 0 0 1-.75-.75V5a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75"/><path fill="${color}" fill-rule="evenodd" d="M4 7.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5M5.25 10a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0m9.5 2a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0M12 13.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m10.75.75a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0M20 15.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5" clip-rule="evenodd"/><path fill="${color}" d="M19.25 10a.75.75 0 0 0 1.5 0V5a.75.75 0 0 0-1.5 0zM4 13.25a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-.75-.75M11.25 19a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm8.75.75a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-.75.75M3.25 5a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineTuning3);
