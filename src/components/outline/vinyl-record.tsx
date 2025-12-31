import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineVinylRecord: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M18.54 5.46A9.25 9.25 0 1 0 5.46 18.54 9.25 9.25 0 0 0 18.54 5.46M4.4 4.398C8.597.2 15.403.2 19.6 4.399s4.198 11.004 0 15.202-11.004 4.198-15.202 0S.2 8.597 4.399 4.4m3.535 2.474a.75.75 0 0 1 0 1.061 5.75 5.75 0 0 0 0 8.132.75.75 0 1 1-1.06 1.06 7.25 7.25 0 0 1 0-10.253.75.75 0 0 1 1.06 0m8.132 0a.75.75 0 0 1 1.06 0 7.25 7.25 0 0 1 0 10.253.75.75 0 1 1-1.06-1.06 5.75 5.75 0 0 0 0-8.132.75.75 0 0 1 0-1.06M12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineVinylRecord);
