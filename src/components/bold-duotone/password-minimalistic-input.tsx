import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotonePasswordMinimalisticInput: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M3.172 18.828C4.343 20 6.229 20 10 20l5.75-.006c2.636-.027 4.104-.191 5.078-1.166C22 17.658 22 15.771 22 12s0-5.657-1.172-6.828c-.974-.975-2.454-1.144-5.09-1.172H10C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828" opacity=".5"/><path fill="${color}" d="M13 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path fill="${color}" fill-rule="evenodd" d="M15 1.25a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotonePasswordMinimalisticInput);
