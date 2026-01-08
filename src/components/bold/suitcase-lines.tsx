import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldSuitcaseLines: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M12.052 1.25h-.104c-.899 0-1.648 0-2.242.08-.628.084-1.195.27-1.65.725-.456.456-.642 1.023-.726 1.65-.08.595-.08 1.345-.08 2.243v.078c-2.021.066-3.235.302-4.078 1.146-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078-.843-.844-2.057-1.08-4.078-1.146v-.078c0-.898 0-1.648-.08-2.242-.084-.628-.27-1.195-.726-1.65-.455-.456-1.022-.642-1.65-.726-.594-.08-1.344-.08-2.242-.08m3.198 4.752V6c0-.964-.002-1.612-.066-2.095-.063-.461-.17-.659-.3-.789s-.328-.237-.79-.3c-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788C8.753 4.388 8.75 5.036 8.75 6v.002Q9.337 6 10 6h4q.662 0 1.25.002" clip-rule="evenodd"/><path fill="${color}" d="M2 14c0-.839 0-1.585.013-2.25h19.974C22 12.415 22 13.161 22 14s0 1.585-.013 2.25H2.013C2 15.585 2 14.839 2 14m.08 3.75c.115 1.44.397 2.384 1.092 3.078C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172.695-.694.977-1.639 1.093-3.078z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldSuitcaseLines };
export default React.memo(BoldSuitcaseLines);
