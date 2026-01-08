import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneTrashBinMinimalistic: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M9.17 4a3.001 3.001 0 0 1 5.66 0" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20.5 6h-17m15.333 2.5-.46 6.9c-.177 2.654-.265 3.981-1.13 4.79s-2.195.81-4.856.81h-.774c-2.66 0-3.99 0-4.856-.81-.865-.809-.953-2.136-1.13-4.79l-.46-6.9"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m9.5 11 .5 5m4.5-5-.5 5" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneTrashBinMinimalistic };
export default React.memo(OutlineDuotoneTrashBinMinimalistic);
