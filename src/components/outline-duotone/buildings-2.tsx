import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneBuildings2: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 22H2"/><path stroke="${color}" stroke-width="1.5" d="M17 22V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v16"/><path stroke="${color}" stroke-width="1.5" d="M21 22V11.5c0-1.405 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C19.607 8 18.904 8 17.5 8M3 22V11.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C4.393 8 5.096 8 6.5 8" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 22v-3"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M10 5h4m-4 3h4m-4 3h4m-4 3h4" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneBuildings2 };
export default React.memo(OutlineDuotoneBuildings2);
