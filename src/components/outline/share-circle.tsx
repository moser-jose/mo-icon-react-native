import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineShareCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M15.75 6a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0M12 3.75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5M9.25 18a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0M5.5 15.75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5m13-1.5a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5M20.75 18a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0" clip-rule="evenodd"/><path fill="${color}" d="M7.205 7.562a.75.75 0 0 0-.993-1.124A8.73 8.73 0 0 0 3.25 13a.75.75 0 0 0 1.5 0 7.23 7.23 0 0 1 2.455-5.438m10.583-1.124a.75.75 0 0 0-.993 1.124A7.23 7.23 0 0 1 19.25 13a.75.75 0 0 0 1.5 0 8.73 8.73 0 0 0-2.962-6.562m-7.601 13.584a.75.75 0 1 0-.374 1.452 8.8 8.8 0 0 0 4.374 0 .75.75 0 1 0-.374-1.452A7.3 7.3 0 0 1 12 20.25a7.3 7.3 0 0 1-1.813-.228"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineShareCircle };
export default React.memo(OutlineShareCircle);
