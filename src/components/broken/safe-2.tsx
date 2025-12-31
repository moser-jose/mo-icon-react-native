import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenSafe2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/><path stroke="${color}" stroke-width="1.5" d="M12 12V8m0 4 3.5 1.5M12 12l-3.5 1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M4.5 7v3m0 4v3M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 5C8.7 5 7.05 5 6.025 6.025S5 8.7 5 12s0 4.95 1.025 5.975S8.7 19 12 19s4.95 0 5.975-1.025S19 15.3 19 12s0-4.95-1.025-5.975c-.682-.681-1.64-.91-3.175-.986"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M10 8.535A4 4 0 1 1 8.126 11"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenSafe2);
