import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneServerSquare: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M14 21h-4c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13v-.25h20V13c0 3.771 0 5.657-1.172 6.828S17.771 21 14 21M10 3h4c3.771 0 5.657 0 6.828 1.172S22 7.229 22 11v.25H2V11c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3" opacity=".5"/><path fill="${color}" fill-rule="evenodd" d="M22 12.75H2v-1.5h20z" clip-rule="evenodd"/><path fill="${color}" d="M12.75 16.5a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75m0-9a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75M6 18.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75m0-9a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75m3 9a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75m0-9a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneServerSquare };
export default React.memo(BoldDuotoneServerSquare);
