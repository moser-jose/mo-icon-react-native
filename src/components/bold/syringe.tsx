import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldSyringe: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M17.782 3.226a.771.771 0 1 0-1.091 1.09l.95.951-1.698 1.7-.868-.868c-.775-.776-1.163-1.163-1.603-1.324a2.12 2.12 0 0 0-1.448 0c-.44.16-.828.548-1.603 1.324l-.12.12 7.48 7.48.12-.12c.775-.775 1.163-1.163 1.323-1.603.17-.468.17-.98 0-1.448-.16-.44-.548-.828-1.323-1.603l-.867-.868 1.698-1.699.951.951a.771.771 0 0 0 1.091-1.09zM6.016 10.504 9.21 7.309l7.48 7.48-1.152 1.154-2.968-2.968a.771.771 0 1 0-1.091 1.091l2.968 2.968-.592.592-1.693-1.693a.772.772 0 0 0-1.091 1.091l1.62 1.621a5.29 5.29 0 0 1-6.09-.155l-2.284 2.284a.772.772 0 0 1-1.091-1.09l2.284-2.285a5.29 5.29 0 0 1 .506-6.895"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldSyringe };
export default React.memo(BoldSyringe);
