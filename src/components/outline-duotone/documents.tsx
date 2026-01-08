import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneDocuments: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16z"/><path stroke="${color}" stroke-width="1.5" d="M5 4.076c-.975.096-1.631.313-2.121.803C2 5.757 2 7.172 2 10v4c0 2.828 0 4.243.879 5.121.49.49 1.146.707 2.121.803M19 4.076c.975.096 1.631.313 2.121.803C22 5.757 22 7.172 22 10v4c0 2.828 0 4.243-.879 5.121-.49.49-1.146.707-2.121.803" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M9 13h6" opacity=".7"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M9 9h6"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M9 17h3" opacity=".4"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneDocuments };
export default React.memo(OutlineDuotoneDocuments);
