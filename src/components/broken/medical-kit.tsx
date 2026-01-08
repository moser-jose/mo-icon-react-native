import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenMedicalKit: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172.654.653.943 1.528 1.07 2.828M22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172-.654-.653-.943-1.528-1.07-2.828"/><path stroke="${color}" stroke-width="1.5" d="M16 6c0-1.886 0-2.828-.586-3.414S13.886 2 12 2s-2.828 0-3.414.586S8 4.114 8 6"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M13.5 14h-3m1.5-1.5v3"/><circle cx="12" cy="14" r="4" stroke="${color}" stroke-width="1.5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenMedicalKit };
export default React.memo(BrokenMedicalKit);
