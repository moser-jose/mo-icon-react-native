import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenScooter: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M11 16v-1.5c0-1.886 0-2.828-.586-3.414S8.886 10.5 7 10.5h-.6c-.371 0-.557 0-.714.012a4 4 0 0 0-1.254.307M11 16h5m-5 0H3.1c-.093 0-.14 0-.178-.003a1 1 0 0 1-.919-.918C2 15.039 2 14.993 2 14.9c0-.371 0-.557.012-.714a4 4 0 0 1 .219-1.027M9.5 16a3 3 0 1 1-6 0M12 5h.528c1.203 0 1.804 0 2.287.299.484.298.753.836 1.29 1.912L19 13m-.857-2 .681-.502c.263-.194.395-.29.486-.417a1 1 0 0 0 .143-.282c.047-.149.047-.312.047-.638 0-.618 0-.926-.132-1.157a1 1 0 0 0-.372-.372c-.23-.132-.54-.132-1.157-.132H16.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M18 18.83A3 3 0 1 0 16.17 17"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenScooter);
