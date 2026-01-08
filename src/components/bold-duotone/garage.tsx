import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneGarage: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="m10.007 3.771-6 5.334A3 3 0 0 0 3 11.347v9.903H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-1v-9.903a3 3 0 0 0-1.007-2.242l-6-5.334a3 3 0 0 0-3.986 0M10 8.25a.75.75 0 1 0 0 1.5h4a.75.75 0 0 0 0-1.5zm4.052 3c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.08.595.08 1.344.08 2.243v5.302H5.25v-5.302c0-.899 0-1.648.08-2.243.084-.627.27-1.194.725-1.65.456-.455 1.023-.64 1.65-.725.595-.08 1.345-.08 2.243-.08z" clip-rule="evenodd"/><path fill="${color}" d="M14.052 11.25H9.948c-.898 0-1.648 0-2.242.08-.628.084-1.195.27-1.65.726-.456.455-.642 1.022-.726 1.65-.08.594-.08 1.344-.08 2.242v5.302h13.5v-5.302c0-.898 0-1.648-.08-2.242-.084-.628-.27-1.195-.726-1.65-.455-.456-1.022-.642-1.65-.726-.594-.08-1.344-.08-2.242-.08" opacity=".5"/><path fill="${color}" d="M9 14.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneGarage };
export default React.memo(BoldDuotoneGarage);
