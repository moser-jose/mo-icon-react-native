import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineGarage: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M13.495 4.332a2.25 2.25 0 0 0-2.99 0l-6 5.333a2.25 2.25 0 0 0-.755 1.682v9.903h1.5v-5.302c0-.899 0-1.648.08-2.243.084-.627.27-1.194.725-1.65.456-.455 1.023-.64 1.65-.725.595-.08 1.345-.08 2.243-.08h4.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.08.595.08 1.344.08 2.243v5.302h1.5v-9.903a2.25 2.25 0 0 0-.755-1.682zM21.75 21.25v-9.903a3.75 3.75 0 0 0-1.259-2.803l-6-5.333a3.75 3.75 0 0 0-4.982 0l-6 5.333a3.75 3.75 0 0 0-1.259 2.803v9.903H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5zm-4.5 0V16c0-.964-.002-1.612-.067-2.095-.062-.461-.169-.659-.3-.79-.13-.13-.327-.237-.788-.299-.483-.065-1.131-.066-2.095-.066h-4c-.964 0-1.612.001-2.095.066-.461.062-.659.17-.789.3s-.237.328-.3.79c-.064.482-.066 1.13-.066 2.094v5.25zM9.25 9a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 9m-1 6.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineGarage };
export default React.memo(OutlineGarage);
