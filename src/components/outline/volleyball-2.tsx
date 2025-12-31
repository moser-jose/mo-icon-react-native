import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineVolleyball2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M7.162 2.398A10.7 10.7 0 0 1 12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75a10.7 10.7 0 0 1-6.738-2.373A10.73 10.73 0 0 1 1.25 12a10.75 10.75 0 0 1 5.912-9.602m.925 1.218a14.67 14.67 0 0 0-.762 8.24.75.75 0 1 1-1.472.289 16.1 16.1 0 0 1 .24-7.264A9.23 9.23 0 0 0 2.75 12c0 1.335.283 2.604.791 3.75a9.47 9.47 0 0 0 7.437-3.657l.117-.152a9.88 9.88 0 0 1-.473-8.584l.223-.536a9.2 9.2 0 0 0-2.758.795m4.408-.853-.488 1.171a8.38 8.38 0 0 0 .423 7.321c3.211.1 6.204 1.617 8.183 4.125a9.2 9.2 0 0 0 .635-3.562l-.536-.545-.002-.002a13.74 13.74 0 0 0-6.865-3.723.75.75 0 1 1 .31-1.468 15.24 15.24 0 0 1 6.72 3.303 9.26 9.26 0 0 0-8.38-6.62m7.36 14.123a9.36 9.36 0 0 0-7.491-4.132l-.202.26a10.97 10.97 0 0 1-7.802 4.202A9.3 9.3 0 0 0 6 19.04c3.003-.061 6.044-1.155 8.567-2.942a.75.75 0 1 1 .866 1.225c-2.186 1.548-4.748 2.631-7.391 3.04A9.2 9.2 0 0 0 12 21.25a9.24 9.24 0 0 0 7.856-4.364" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineVolleyball2);
