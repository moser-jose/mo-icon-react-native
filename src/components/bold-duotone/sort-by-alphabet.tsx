import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneSortByAlphabet: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M17.184 6.692a.75.75 0 0 0-1.368 0l-4.5 10a.75.75 0 1 0 1.368.616l1.437-3.194h4.758l1.437 3.194a.75.75 0 0 0 1.368-.616zM16.5 8.828l-1.704 3.786h3.408z" clip-rule="evenodd"/><path fill="${color}" fill-rule="evenodd" d="M2.25 7A.75.75 0 0 1 3 6.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 7" clip-rule="evenodd" opacity=".5"/><path fill="${color}" d="M2.25 12a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneSortByAlphabet };
export default React.memo(BoldDuotoneSortByAlphabet);
