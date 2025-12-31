import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldGarage: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="m4.007 9.105 6-5.334a3 3 0 0 1 3.986 0l6 5.334A3 3 0 0 1 21 11.347v9.903h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h1v-9.903a3 3 0 0 1 1.007-2.242M9.25 9a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 9m4.802 2.25c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.08.595.08 1.344.08 2.243v5.302h-1.5V16c0-.964-.002-1.612-.067-2.095-.062-.461-.169-.659-.3-.79-.13-.13-.327-.237-.788-.299-.483-.065-1.131-.066-2.095-.066h-4c-.964 0-1.612.001-2.095.066-.461.062-.659.17-.789.3s-.237.328-.3.79c-.064.482-.066 1.13-.066 2.094v5.25h-1.5v-5.302c0-.899 0-1.648.08-2.243.084-.627.27-1.194.725-1.65.456-.455 1.023-.64 1.65-.725.595-.08 1.345-.08 2.243-.08zM8.25 15.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldGarage);
