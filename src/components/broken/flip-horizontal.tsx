import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenFlipHorizontal: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M2 8V5.886c0-1.702 0-2.553.542-2.832.543-.28 1.235.215 2.62 1.205l1.582 1.13c.616.439.924.659 1.09.982S8 7.073 8 7.83v8.341c0 .757 0 1.135-.166 1.458-.166.324-.474.544-1.09.983l-1.582 1.13c-1.385.99-2.077 1.484-2.62 1.205C2 20.666 2 19.816 2 18.113V12m20 0V5.886c0-1.702 0-2.553-.542-2.832-.543-.28-1.235.215-2.62 1.205l-1.582 1.13c-.616.439-.924.659-1.09.982S16 7.073 16 7.83v8.341c0 .757 0 1.135.166 1.458.166.324.474.544 1.09.983l1.581 1.13c1.386.99 2.078 1.484 2.62 1.205.543-.28.543-1.13.543-2.833v-2.056M12 14v-4m0-4V2m0 20v-4"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenFlipHorizontal };
export default React.memo(BrokenFlipHorizontal);
