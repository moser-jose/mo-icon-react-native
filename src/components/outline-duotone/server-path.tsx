import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneServerPath: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 19h-8M2 19h8m2-2v-3" opacity=".5"/><circle cx="12" cy="19" r="2" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-width="1.5" d="M2 11a3 3 0 0 1 3-3h14a3 3 0 1 1 0 6H5a3 3 0 0 1-3-3Zm0-6a3 3 0 0 1 3-3h14a3 3 0 1 1 0 6H5a3 3 0 0 1-3-3Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M13 5h6m-6 6h6" opacity=".5"/><circle cx="6" cy="5" r="1" fill="${color}" opacity=".5"/><circle cx="6" cy="11" r="1" fill="${color}" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneServerPath };
export default React.memo(OutlineDuotoneServerPath);
