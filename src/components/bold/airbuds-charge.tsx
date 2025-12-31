import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldAirbudsCharge: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M18 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8m.416-6.124a.75.75 0 0 1 .208 1.04l-.223.334H19a.75.75 0 0 1 .624 1.166l-1 1.5a.75.75 0 1 1-1.248-.832l.223-.334H17a.75.75 0 0 1-.624-1.166l1-1.5a.75.75 0 0 1 1.04-.208M2 7.188V9.3c0 1.657 1.422 3 3.176 3 .585 0 1.06.448 1.06 1v4.95H11V9.313c0-.29 0-.436-.006-.558-.134-2.569-2.309-4.623-5.028-4.749C5.836 4 5.682 4 5.375 4c-.184 0-.277 0-.354.004-1.632.075-2.937 1.308-3.017 2.849C2 6.926 2 7.013 2 7.188M3.75 7a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-1.5 0z" clip-rule="evenodd"/><path fill="${color}" d="M8.618 22C9.933 22 11 20.993 11 19.75H6.235c0 1.243 1.067 2.25 2.383 2.25"/><path fill="${color}" fill-rule="evenodd" d="M22 7.3V5.188c0-.175 0-.262-.004-.335-.08-1.541-1.385-2.774-3.017-2.85C18.901 2 18.81 2 18.625 2c-.307 0-.46 0-.59.006-2.72.126-4.895 2.18-5.029 4.749-.006.122-.006.267-.006.558v8.393a5.5 5.5 0 0 1 4.765-3.201V11.3c0-.552.474-1 1.058-1 1.755 0 3.177-1.343 3.177-3m-2.5-3.05a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldAirbudsCharge);
