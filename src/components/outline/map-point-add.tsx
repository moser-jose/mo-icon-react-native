import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineMapPointAdd: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M3.25 10.143C3.25 5.244 7.155 1.25 12 1.25s8.75 3.994 8.75 8.893c0 2.365-.674 4.905-1.866 7.099-1.19 2.191-2.928 4.095-5.103 5.112a4.2 4.2 0 0 1-3.562 0c-2.175-1.017-3.913-2.92-5.103-5.112-1.192-2.194-1.866-4.734-1.866-7.099M12 2.75c-3.992 0-7.25 3.297-7.25 7.393 0 2.097.603 4.392 1.684 6.383 1.082 1.993 2.612 3.624 4.42 4.469a2.7 2.7 0 0 0 2.291 0c1.809-.845 3.339-2.476 4.421-4.469 1.081-1.99 1.684-4.286 1.684-6.383 0-4.096-3.258-7.393-7.25-7.393m0 4a.75.75 0 0 1 .75.75v1.75h1.75a.75.75 0 0 1 0 1.5h-1.75v1.75a.75.75 0 0 1-1.5 0v-1.75H9.5a.75.75 0 0 1 0-1.5h1.75V7.5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineMapPointAdd);
