import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineUserBlock: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M7.25 6a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0M12 2.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5m2.775 9.763A14.5 14.5 0 0 0 12 12.25c-2.314 0-4.445.526-6.025 1.414C4.42 14.54 3.25 15.866 3.25 17.5v.102c-.001 1.162-.003 2.62 1.276 3.662.63.512 1.51.877 2.7 1.117 1.193.242 2.748.369 4.774.369 2.868 0 4.81-.254 6.12-.741 1.178-.44 1.877-1.082 2.25-1.892a4.748 4.748 0 0 0 .989-7.476A4.74 4.74 0 0 0 18 11.25c-1.245 0-2.378.48-3.225 1.263M6.71 14.972c-1.34.753-1.961 1.677-1.961 2.528 0 1.308.04 2.044.724 2.6.37.302.99.597 2.05.811 1.057.214 2.502.339 4.476.339 2.578 0 4.24-.213 5.311-.55a4.74 4.74 0 0 1-2.67-1.341A4.74 4.74 0 0 1 13.25 16c0-.768.182-1.493.506-2.135A13 13 0 0 0 12 13.75c-2.105 0-3.973.482-5.29 1.222M14.75 16a3.25 3.25 0 0 1 4.956-2.767l-4.473 4.473A3.23 3.23 0 0 1 14.75 16m1.544 2.767 4.473-4.473a3.25 3.25 0 0 1-4.473 4.473" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineUserBlock };
export default React.memo(OutlineUserBlock);
