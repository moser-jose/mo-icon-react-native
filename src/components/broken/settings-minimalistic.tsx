import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenSettingsMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7.843 20.198C9.872 21.399 10.886 22 12 22s2.128-.6 4.157-1.802l.686-.407c2.029-1.2 3.043-1.802 3.6-2.791.557-.99.557-2.19.557-4.594M20.815 8a3.6 3.6 0 0 0-.372-1c-.557-.99-1.571-1.59-3.6-2.792l-.686-.406C14.128 2.601 13.114 2 12 2s-2.128.6-4.157 1.802l-.686.406C5.128 5.41 4.114 6.011 3.557 7 3 7.99 3 9.19 3 11.594v.812c0 2.403 0 3.605.557 4.594.226.402.528.74.943 1.08"/><circle cx="12" cy="12" r="3" stroke="${color}" stroke-width="1.5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenSettingsMinimalistic);
