import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenShield: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="m3 11 9-3 9 3m-9-9v19.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M3.193 14c.857 4.298 4.383 6.513 6.706 7.527.721.315 1.082.473 2.101.473 1.02 0 1.38-.158 2.101-.473.579-.252 1.231-.58 1.899-.994m3-2.629c1.163-1.476 2-3.408 2-5.913v-1.574c0-3.198 0-4.797-.378-5.335-.377-.537-1.88-1.052-4.887-2.081l-.573-.196C13.595 2.268 12.812 2 12 2s-1.595.268-3.162.805L8.265 3c-3.007 1.03-4.51 1.545-4.887 2.082C3 5.62 3 7.22 3 10.417V11"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenShield);
