import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneGalleryCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="m11.182 15.362-4.29-4.29a2.3 2.3 0 0 0-3.14-.104l-1.001.894c-.017.013-.05.099-.05.338a9.3 9.3 0 0 0 17.025 5.179l-.117-.118-1.833-1.662a3 3 0 0 0-3.731-.225l-.299.21a2 2 0 0 1-2.564-.222" opacity=".5"/><path fill="${color}" d="M15 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/><path fill="${color}" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m19.73-2.23c.209.775.32 1.59.32 2.43A9.3 9.3 0 1 1 3.016 9.787C4.008 5.747 7.654 2.75 12 2.75c4.34 0 7.981 2.989 8.98 7.02" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneGalleryCircle);
