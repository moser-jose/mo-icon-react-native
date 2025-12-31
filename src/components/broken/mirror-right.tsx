import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenMirrorRight: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 21c4.243 0 6.364 0 7.682-1.318S21 16.242 21 12m-9-9c4.243 0 6.364 0 7.682 1.318.816.816 1.127 1.939 1.245 3.682"/><path stroke="${color}" stroke-dasharray="2.5 3" stroke-linecap="round" stroke-width="1.5" d="M13 21H9c-2.828 0-4.243 0-5.121-.879C3 19.243 3 17.828 3 15V9c0-2.828 0-4.243.879-5.121C4.757 3 6.172 3 9 3h4"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 22V2"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenMirrorRight);
