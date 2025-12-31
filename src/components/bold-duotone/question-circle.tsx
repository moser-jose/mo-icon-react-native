import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneQuestionCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10" opacity=".5"/><path fill="${color}" d="M12 7.75c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 1-1.5 0 2.625 2.625 0 1 1 4.508 1.829q-.138.142-.264.267a7 7 0 0 0-.571.617c-.22.282-.298.489-.298.662V13a.75.75 0 0 1-1.5 0v-.75c0-.655.305-1.186.614-1.583.229-.294.516-.58.75-.814q.106-.105.193-.194A1.125 1.125 0 0 0 12 7.75M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneQuestionCircle);
