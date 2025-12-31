import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineRuble: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m9.912-5.75H13.5a3.25 3.25 0 0 1 0 6.5h-2.75v.5H12a.75.75 0 0 1 0 1.5h-1.25V17a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h.25v-.5H9a.75.75 0 0 1 0-1.5h.25V8.162c0-.146 0-.297.022-.436a1.75 1.75 0 0 1 1.454-1.454c.139-.022.29-.022.435-.022m-.412 5h2.75a1.75 1.75 0 1 0 0-3.5h-2.3l-.24.003a.25.25 0 0 0-.207.206l-.002.043-.001.198z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineRuble);
