import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenBlackHole: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 10c5 0 4.6 12-3 12"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12.312 14c-5 0-4.6-12 3-12"/><path stroke="${color}" stroke-dasharray="2 2" stroke-linecap="round" stroke-width="1.5" d="M10.631 10.695c3.536-3.535 11.738 5.233 6.364 10.607"/><path stroke="${color}" stroke-dasharray="2 2" stroke-linecap="round" stroke-width="1.5" d="M13.68 13.305C10.145 16.84 1.942 8.072 7.316 2.698"/><path stroke="${color}" stroke-dasharray="2 2" stroke-linecap="round" stroke-width="1.5" d="M10.852 13.523C7.316 9.988 16.084 1.785 21.458 7.16"/><path stroke="${color}" stroke-dasharray="2 2" stroke-linecap="round" stroke-width="1.5" d="M13.46 10.477c3.535 3.535-5.233 11.738-10.607 6.364"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M10 12.313c0-5 12-4.6 12 3"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M14 12c0 5-12 4.6-12-3"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenBlackHole };
export default React.memo(BrokenBlackHole);
