import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneSatellite: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M13.086 5.042 2.332 10.36a.75.75 0 1 1-.665-1.345L14.095 2.87l.145 1.01a1 1 0 0 0 .04.134c.042.124.126.334.284.624.318.58.937 1.484 2.127 2.673s2.093 1.808 2.673 2.126c.29.159.5.243.624.285q.093.03.123.037l.01.002 1.01.145-6.146 12.428a.75.75 0 1 1-1.344-.665l5.318-10.754a7 7 0 0 1-.316-.162c-.619-.34-1.45-.908-2.474-1.86L5.53 19.53a.75.75 0 0 1-1.06-1.06L15.109 7.83c-.953-1.023-1.521-1.855-1.86-2.474a7 7 0 0 1-.163-.315" clip-rule="evenodd" opacity=".5"/><path fill="${color}" d="m20.824 10.527.307-.622-1.01-.145-.01-.002a1 1 0 0 1-.123-.037 4 4 0 0 1-.624-.285c-.58-.318-1.484-.937-2.673-2.126-1.19-1.19-1.809-2.093-2.126-2.673a4 4 0 0 1-.285-.624 2 2 0 0 1-.037-.124l-.002-.01-.145-1.01-.626.31a5.225 5.225 0 0 1 7.354 7.348m-2.51 1.69.645-1.303a7 7 0 0 1-.316-.162c-.618-.34-1.45-.908-2.473-1.86l-2.52 2.519a5.23 5.23 0 0 0 4.664.806M12.59 10.35l2.519-2.519c-.953-1.023-1.521-1.855-1.86-2.474a7 7 0 0 1-.163-.315l-1.304.645a5.23 5.23 0 0 0 .808 4.663"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneSatellite);
