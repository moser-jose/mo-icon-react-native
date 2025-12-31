import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldExit: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M9.707 2.409C9 3.036 9 4.183 9 6.476v11.048c0 2.293 0 3.44.707 4.067s1.788.439 3.95.062l2.33-.406c2.394-.418 3.591-.627 4.302-1.505.711-.879.711-2.149.711-4.69V8.948c0-2.54 0-3.81-.71-4.689-.712-.878-1.91-1.087-4.304-1.504l-2.328-.407c-2.162-.377-3.243-.565-3.95.062M12 10.169c.414 0 .75.351.75.784v2.094c0 .433-.336.784-.75.784s-.75-.351-.75-.784v-2.094c0-.433.336-.784.75-.784" clip-rule="evenodd"/><path fill="${color}" d="M7.547 4.5c-2.058.003-3.131.048-3.815.732C3 5.964 3 7.142 3 9.5v5c0 2.357 0 3.535.732 4.268.684.683 1.757.729 3.815.732-.047-.624-.047-1.344-.047-2.123V6.623c0-.78 0-1.5.047-2.123"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldExit);
