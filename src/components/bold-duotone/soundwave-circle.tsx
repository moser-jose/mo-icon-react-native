import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneSoundwaveCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><g fill="${color}" opacity=".5"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m.75 5a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0zm-5 2a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zm10 1a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"/><path d="M12 6.25a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75m-5 2a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 7 8.25m10 1a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75"/></g><path fill="${color}" d="M12 6.25a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75m-5 2a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 7 8.25m10 1a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneSoundwaveCircle);
