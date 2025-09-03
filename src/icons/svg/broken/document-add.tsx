import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenDocumentAdd: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none"><path stroke="${color}" stroke-width="1.5" d="m18.18 8.04.463-.464a1.966 1.966 0 1 1 2.781 2.78l-.463.464M18.18 8.04s.058.984.927 1.853 1.854.927 1.854.927M18.18 8.04l-4.26 4.26c-.29.288-.434.433-.558.592q-.22.282-.374.606c-.087.182-.151.375-.28.762l-.413 1.24-.134.401m8.8-5.081-4.26 4.26c-.29.29-.434.434-.593.558q-.282.22-.606.374c-.182.087-.375.151-.762.28l-1.24.413-.401.134m0 0-.401.134a.53.53 0 0 1-.67-.67l.133-.402m.938.938-.938-.938"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M8 13h2.5M8 9h6.5M8 17h1.5M3 14v-4c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172M21 14c0 3.771 0 5.657-1.172 6.828m-15.656 0C5.343 22 7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172m0 0c.944-.943 1.127-2.348 1.163-4.828"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenDocumentAdd);
