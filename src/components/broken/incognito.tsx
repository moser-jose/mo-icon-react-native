import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenIncognito: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M21 17.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M2 11h12m8 0h-4M4 11l.614-2.455c.545-2.183.818-3.274 1.632-3.91.76-.593 1.79-.632 3.754-.635m10 7-.614-2.455c-.546-2.183-.818-3.274-1.632-3.91-.76-.593-1.79-.632-3.754-.635"/><path stroke="${color}" stroke-width="1.5" d="M10 17.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m10 17.5.658-.329a3 3 0 0 1 2.684 0l.658.33"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenIncognito };
export default React.memo(BrokenIncognito);
