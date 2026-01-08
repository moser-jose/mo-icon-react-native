import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneMirrorRight: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M12 21h1c3.771 0 5.657 0 6.828-1.172S21 16.771 21 13v-2c0-3.771 0-5.657-1.172-6.828S16.771 3 13 3h-1"/><path stroke="${color}" stroke-dasharray="2.5 3" stroke-linecap="round" stroke-width="1.5" d="M13 21H9c-2.828 0-4.243 0-5.121-.879C3 19.243 3 17.828 3 15V9c0-2.828 0-4.243.879-5.121C4.757 3 6.172 3 9 3h4" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 22V2"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneMirrorRight };
export default React.memo(OutlineDuotoneMirrorRight);
