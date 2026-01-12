import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneLinkBrokenMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m10 5.049.367-.343c2.432-2.275 6.376-2.275 8.809 0s2.432 5.961 0 8.235L16.974 15M14 18.928l-.366.35c-2.422 2.316-6.38 2.286-8.802-.03-2.398-2.293-2.456-6.033-.091-8.358l.905-.89" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M6.587 3 7.5 5.205m-3.998.882L9.05 8.795"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneLinkBrokenMinimalistic };
export default React.memo(OutlineDuotoneLinkBrokenMinimalistic);
