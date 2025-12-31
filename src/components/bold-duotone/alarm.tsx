import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneAlarm: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 22c4.836 0 8.757-3.884 8.757-8.675 0-4.79-3.92-8.675-8.757-8.675s-8.757 3.884-8.757 8.675C3.243 18.115 7.163 22 12 22" opacity=".5"/><path fill="${color}" d="M12 8.747c.403 0 .73.324.73.723v3.556l2.218 2.198a.72.72 0 0 1 0 1.022.734.734 0 0 1-1.032 0l-2.432-2.41a.72.72 0 0 1-.214-.51V9.47c0-.4.327-.723.73-.723"/><path fill="${color}" fill-rule="evenodd" d="M8.24 2.34a.72.72 0 0 1-.232.996l-3.891 2.41a.734.734 0 0 1-1.006-.23.72.72 0 0 1 .232-.996l3.892-2.41a.734.734 0 0 1 1.006.23m7.519 0a.734.734 0 0 1 1.005-.23l3.892 2.41a.72.72 0 0 1 .232.996.734.734 0 0 1-1.006.23l-3.891-2.41a.72.72 0 0 1-.233-.996" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneAlarm);
