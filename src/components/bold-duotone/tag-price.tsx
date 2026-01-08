import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneTagPrice: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="m17.967 6.558-1.83-1.83c-1.546-1.545-2.318-2.318-3.321-2.605-1.003-.288-2.068-.042-4.197.45l-1.228.283c-1.792.413-2.688.62-3.302 1.233S3.27 5.6 2.856 7.391l-.284 1.228c-.491 2.13-.737 3.194-.45 4.197.288 1.003 1.061 1.775 2.606 3.32l1.83 1.83C9.248 20.657 10.592 22 12.262 22c1.671 0 3.015-1.344 5.704-4.033 2.69-2.69 4.034-4.034 4.034-5.705 0-1.67-1.344-3.015-4.033-5.704" opacity=".5"/><path fill="${color}" d="M11.147 14.328c-.673-.672-.667-1.638-.265-2.403a.75.75 0 0 1 1.04-1.046c.34-.18.713-.276 1.085-.272a.75.75 0 0 1-.014 1.5.88.88 0 0 0-.609.277c-.387.387-.285.775-.177.884.11.109.497.21.884-.177.784-.784 2.138-1.044 3.006-.177.673.673.667 1.639.264 2.404a.75.75 0 0 1-1.04 1.045 2.2 2.2 0 0 1-1.472.232.75.75 0 1 1 .302-1.47c.177.037.463-.021.708-.266.388-.388.286-.775.177-.884s-.496-.21-.884.177c-.784.784-2.138 1.044-3.005.176m-1.126-4.035a2 2 0 1 0-2.828-2.828 2 2 0 0 0 2.828 2.828"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneTagPrice };
export default React.memo(BoldDuotoneTagPrice);
