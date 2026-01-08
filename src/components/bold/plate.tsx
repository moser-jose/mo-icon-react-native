import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldPlate: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12.75 3a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"/><path fill="${color}" fill-rule="evenodd" d="M22.75 12.057c0 1.837 0 3.293-.153 4.432-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153H9.944c-1.837 0-3.293 0-4.432-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433v-.926q.001-.575.008-1.096c.014-.975.05-1.81.145-2.523.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238.716-.096 1.558-.132 2.541-.145l.697-.005a1 1 0 0 1 1.001.999V5a2.25 2.25 0 0 0 4.5 0v-.75c0-.552.448-1 1-.998 1.29.006 2.359.033 3.239.151 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433zM8 9.75a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 3.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldPlate };
export default React.memo(BoldPlate);
