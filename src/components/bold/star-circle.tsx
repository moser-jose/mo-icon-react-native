import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldStarCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M10.861 9.363l-.13.235c-.145.259-.217.388-.329.473s-.252.117-.532.18l-.254.058c-.984.222-1.476.334-1.593.71-.117.377.218.769.889 1.553l.174.203c.19.223.285.334.328.472s.029.287 0 .584l-.026.27c-.102 1.047-.152 1.57.154 1.803s.767.02 1.688-.403l.239-.11c.261-.12.392-.181.531-.181s.27.06.531.18l.239.11c.92.425 1.382.637 1.688.404s.256-.756.154-1.802l-.026-.271c-.029-.297-.043-.446 0-.584s.138-.25.328-.472l.174-.203c.67-.784 1.006-1.176.889-1.553-.117-.376-.609-.488-1.593-.71l-.254-.058c-.28-.063-.42-.095-.532-.18s-.184-.214-.328-.473l-.131-.235C12.632 8.454 12.379 8 12 8s-.632.454-1.139 1.363" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldStarCircle };
export default React.memo(BoldStarCircle);
