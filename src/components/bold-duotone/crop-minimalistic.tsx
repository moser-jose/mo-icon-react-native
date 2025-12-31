import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneCropMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-4c0-3.771 0-5.657-1.172-6.828S17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.172" opacity=".5"/><path fill="${color}" d="M8.75 6a.75.75 0 0 0-1.5 0v1.25H6a.75.75 0 0 0 0 1.5h1.25v3.302c0 .899 0 1.648.08 2.242.084.628.27 1.195.725 1.65.456.456 1.023.642 1.65.726.595.08 1.345.08 2.243.08h3.302V18a.75.75 0 0 0 1.5 0v-1.25H18a.75.75 0 0 0 0-1.5h-6c-.964 0-1.612-.002-2.095-.066-.461-.063-.659-.17-.789-.3s-.237-.328-.3-.79c-.064-.482-.066-1.13-.066-2.094z"/><path fill="${color}" d="M12 8.75c.964 0 1.612.002 2.095.067.461.062.659.169.789.3s.237.327.3.788c.064.483.066 1.131.066 2.095v1.47a.75.75 0 0 0 1.5 0v-1.522c0-.899 0-1.648-.08-2.242-.084-.628-.27-1.195-.726-1.65-.455-.456-1.022-.642-1.65-.726-.594-.08-1.344-.08-2.242-.08h-1.523a.75.75 0 0 0 0 1.5z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneCropMinimalistic);
