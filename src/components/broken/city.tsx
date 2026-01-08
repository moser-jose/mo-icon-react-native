import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenCity: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M3.75 18a.75.75 0 0 0-1.5 0zm-1.5-4a.75.75 0 0 0 1.5 0zM7 8.75c.964 0 1.612.002 2.095.067.461.062.659.169.789.3l1.06-1.062c-.455-.455-1.022-.64-1.65-.725-.606-.082-1.372-.08-2.294-.08zM11.75 12c0-.922.002-1.688-.08-2.294-.084-.628-.27-1.195-.726-1.65l-1.06 1.06c.13.13.237.328.3.79.064.482.066 1.13.066 2.094zM7 7.25c-.922 0-1.688-.002-2.294.08-.628.084-1.195.27-1.65.725l1.06 1.061c.13-.13.328-.237.79-.3.482-.064 1.13-.066 2.094-.066zM3.75 12c0-.964.002-1.612.067-2.095.062-.461.169-.659.3-.789l-1.062-1.06c-.455.455-.64 1.022-.725 1.65-.082.606-.08 1.372-.08 2.294zm0 10v-4h-1.5v4zm0-8v-2h-1.5v2z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M7 22v-6c0-1.886 0-2.828.586-3.414S9.114 12 11 12h2c1.886 0 2.828 0 3.414.586.472.471.564 1.174.582 2.414M17 22v-2.75m4-11.478c0-1.34 0-2.011-.356-2.525s-.984-.75-2.24-1.22c-2.455-.92-3.682-1.381-4.543-.785C13 3.84 13 5.15 13 7.772V12m8 10V12M4 8V6.5c0-.943 0-1.414.293-1.707S5.057 4.5 6 4.5h2c.943 0 1.414 0 1.707.293S10 5.557 10 6.5V8M7 4V2m15 20H2m8-7h.5m3.5 0h-1.5M10 18h4"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenCity };
export default React.memo(BrokenCity);
