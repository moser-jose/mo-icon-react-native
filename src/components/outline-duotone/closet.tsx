import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneCloset: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M19 22v-.5M5 22v-.5" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 21V2"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M15 8v2" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v3c0 3.771 0 5.657-1.172 6.828S17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M2 8h10" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M2 15h20"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M15 18h2M7 18h2" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneCloset };
export default React.memo(OutlineDuotoneCloset);
