import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneTurntableMinimalistic: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m14 10.5 2.555-1.703A1 1 0 0 0 17 7.965V2.5" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M17 12a5 5 0 1 1-3.5-4.771"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 14a2 2 0 0 1-2-2" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneTurntableMinimalistic };
export default React.memo(OutlineDuotoneTurntableMinimalistic);
