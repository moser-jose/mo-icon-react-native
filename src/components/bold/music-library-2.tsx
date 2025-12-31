import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldMusicLibrary2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M8.51 2h6.98c.232 0 .41 0 .566.015 1.108.109 2.015.775 2.4 1.672H5.544c.385-.897 1.292-1.563 2.4-1.672C8.098 2 8.276 2 8.51 2m-2.2 2.723c-1.39 0-2.53.84-2.91 1.954l-.024.07c.398-.12.813-.2 1.232-.253 1.08-.139 2.446-.139 4.032-.139h6.892c1.586 0 2.951 0 4.032.139.42.054.834.132 1.232.253l-.023-.07c-.38-1.114-1.52-1.954-2.911-1.954zM11.25 17a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0"/><path fill="${color}" fill-rule="evenodd" d="M8.672 7.542h6.656c3.374 0 5.062 0 6.01.987s.724 2.511.278 5.56l-.422 2.892c-.35 2.391-.525 3.587-1.422 4.303s-2.22.716-4.867.716h-5.81c-2.646 0-3.97 0-4.867-.716s-1.072-1.912-1.422-4.303l-.422-2.891c-.447-3.05-.67-4.574.278-5.561s2.636-.987 6.01-.987M12.75 10.5a.75.75 0 0 0-1.5 0v4.378A2.25 2.25 0 1 0 12.75 17v-3.68c.67.543 1.512.93 2.25.93a.75.75 0 0 0 0-1.5c-.305 0-.886-.219-1.416-.69-.519-.46-.834-1.021-.834-1.56" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldMusicLibrary2);
