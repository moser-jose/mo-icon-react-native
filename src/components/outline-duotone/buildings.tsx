import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneBuildings: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 22H2"/><path stroke="${color}" stroke-width="1.5" d="M21 22V6c0-1.886 0-2.828-.586-3.414S18.886 2 17 2h-2c-1.886 0-2.828 0-3.414.586-.472.471-.564 1.174-.582 2.414" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M15 22V9c0-1.886 0-2.828-.586-3.414S12.886 5 11 5H7c-1.886 0-2.828 0-3.414.586S3 7.114 3 9v13"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M9 22v-3"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M6 8h6m-6 3h6m-6 3h6" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneBuildings };
export default React.memo(OutlineDuotoneBuildings);
