import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldGalleryMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M16 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-9.68 3.104a1.55 1.55 0 0 1 2.184.073l2.648 2.81a2.294 2.294 0 0 0 3.042.266 1.57 1.57 0 0 1 2.02.123l2.268 2.166a.75.75 0 0 0 1.036-1.084L17.25 15.29a3.07 3.07 0 0 0-3.953-.24.795.795 0 0 1-1.054-.093l-2.647-2.81a3.05 3.05 0 0 0-4.296-.143l-.81.752a.75.75 0 1 0 1.02 1.1z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldGalleryMinimalistic);
