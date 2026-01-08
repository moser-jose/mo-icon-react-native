import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenBillFull: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M21 6V3.505A.676.676 0 0 0 19.875 3c-.642.57-1.608.57-2.25 0a1.693 1.693 0 0 0-2.25 0c-.642.57-1.608.57-2.25 0a1.693 1.693 0 0 0-2.25 0c-.642.57-1.608.57-2.25 0a1.693 1.693 0 0 0-2.25 0c-.642.57-1.608.57-2.25 0A.676.676 0 0 0 3 3.505V14m18-4v10.495c0 .583-.69.893-1.125.505a1.693 1.693 0 0 0-2.25 0c-.642.57-1.608.57-2.25 0a1.693 1.693 0 0 0-2.25 0c-.642.57-1.608.57-2.25 0a1.693 1.693 0 0 0-2.25 0c-.642.57-1.608.57-2.25 0a1.693 1.693 0 0 0-2.25 0A.676.676 0 0 1 3 20.495V18m4.5-2.5h4m5 0h-2m2-3.5h-4m-5 0h2m-2-3.5h9"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenBillFull };
export default React.memo(BrokenBillFull);
