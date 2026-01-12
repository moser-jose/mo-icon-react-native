import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotonePenNewRound: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="${color}" opacity=".5"/><path fill="${color}" d="M13.927 14.302c.245-.191.467-.413.911-.858l5.54-5.54c.134-.134.073-.365-.106-.427a6.1 6.1 0 0 1-2.3-1.449 6.1 6.1 0 0 1-1.449-2.3c-.062-.18-.293-.24-.427-.106l-5.54 5.54c-.444.444-.667.667-.858.912a5 5 0 0 0-.576.932c-.134.28-.233.579-.432 1.175l-.257.77-.408 1.226-.383 1.148a.817.817 0 0 0 1.033 1.033l1.149-.383 1.225-.408.77-.257c.596-.199.894-.298 1.175-.432q.497-.237.933-.576m8.186-8.132a3.028 3.028 0 1 0-4.282-4.283l-.178.178a.73.73 0 0 0-.207.651c.027.15.077.37.168.633a4.9 4.9 0 0 0 1.174 1.863 4.9 4.9 0 0 0 1.863 1.174c.262.09.482.141.633.168.24.043.48-.035.651-.207z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotonePenNewRound };
export default React.memo(BoldDuotonePenNewRound);
