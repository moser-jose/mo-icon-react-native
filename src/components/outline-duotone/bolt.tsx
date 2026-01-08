import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneBolt: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M13.926 9.705c-.379-.371-.379-.963-.379-2.148v-.31c0-3.285 0-4.927-.923-5.21s-1.913 1.056-3.892 3.734L5.67 9.914c-1.285 1.739-1.928 2.608-1.574 3.291l.018.034c.375.673 1.485.673 3.704.673 1.233 0 1.85 0 2.236.363"/><path stroke="${color}" stroke-width="1.5" d="m13.926 9.705.02.02c.387.363 1.003.363 2.236.363 2.22 0 3.329 0 3.703.673l.019.034c.354.683-.289 1.552-1.574 3.29l-3.062 4.143c-1.98 2.678-2.969 4.017-3.892 3.734-.924-.282-.924-1.925-.923-5.21v-.31c0-1.184 0-1.776-.379-2.148l-.02-.019" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneBolt };
export default React.memo(OutlineDuotoneBolt);
