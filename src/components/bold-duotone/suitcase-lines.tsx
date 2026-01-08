import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneSuitcaseLines: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12.052 1.25h-.104c-.899 0-1.648 0-2.242.08-.628.084-1.195.27-1.65.725-.456.456-.642 1.023-.726 1.65-.08.595-.08 1.345-.08 2.243v.078q.684-.021 1.5-.024V6c0-.964.002-1.612.067-2.095.062-.461.169-.659.3-.789s.327-.237.788-.3c.483-.064 1.131-.066 2.095-.066s1.612.002 2.095.067c.461.062.659.169.789.3s.237.327.3.788c.064.483.066 1.131.066 2.095v.002a55 55 0 0 1 1.5.024v-.078c0-.898 0-1.648-.08-2.242-.084-.628-.27-1.195-.726-1.65-.455-.456-1.022-.642-1.65-.726-.594-.08-1.344-.08-2.242-.08"/><path fill="${color}" d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14" opacity=".5"/><path fill="${color}" d="M2.08 17.75c-.037-.45-.056-.947-.067-1.5h19.974c-.01.553-.03 1.05-.066 1.5zm19.84-7.5c.037.45.056.947.067 1.5H2.013c.01-.553.03-1.05.066-1.5z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneSuitcaseLines };
export default React.memo(BoldDuotoneSuitcaseLines);
