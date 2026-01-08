import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenAirbudsCharge: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M18 11.5v-.2a1 1 0 0 1 1-1 3 3 0 0 0 3-3V5.188c0-.175 0-.262-.004-.335a3 3 0 0 0-2.849-2.85C19.074 2 18.987 2 18.813 2c-.29 0-.436 0-.558.006a5 5 0 0 0-4.749 4.749c-.006.122-.006.267-.006.558V13.5m6-8.5v2.5M4.5 7v2.5M22 18a4 4 0 1 0-4 4"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 16.5 17 18h2l-1 1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M10.5 19v.75a2.25 2.25 0 0 1-4.5 0V19m4.5 0H6m4.5 0v-5M6 19v-5.7a1 1 0 0 0-1-1 3 3 0 0 1-3-3V7.187c0-.174 0-.26.004-.334a3 3 0 0 1 2.849-2.85C4.926 4 5.013 4 5.188 4c.29 0 .435 0 .557.006a5 5 0 0 1 4.749 4.749c.006.122.006.267.006.557V10"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenAirbudsCharge };
export default React.memo(BrokenAirbudsCharge);
