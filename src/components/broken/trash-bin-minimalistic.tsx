import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenTrashBinMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M9.17 4a3.001 3.001 0 0 1 5.66 0m5.67 2h-17m14.874 9.4c-.177 2.654-.266 3.981-1.131 4.79s-2.195.81-4.856.81h-.774c-2.66 0-3.99 0-4.856-.81-.865-.809-.953-2.136-1.13-4.79l-.46-6.9m13.666 0-.2 3M9.5 11l.5 5m4.5-5-.5 5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenTrashBinMinimalistic };
export default React.memo(BrokenTrashBinMinimalistic);
