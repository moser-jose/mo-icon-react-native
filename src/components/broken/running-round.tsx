import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenRunningRound: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="18.5" cy="4.5" r="2.5" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M14.4 22v-.959a7 7 0 0 0-2.837-5.554c-.04-.03-.06-.045-.075-.058a2 2 0 0 1-.136-3.022l.07-.064 1.04-.946c1.628-1.479 1.133-4.153-.916-4.95a2.96 2.96 0 0 0-2.271.05l-.522.23M5.44 8.61 4 9.636M9 17l-.26.311A7.47 7.47 0 0 1 3 20m13-8a8.25 8.25 0 0 0 4 0"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenRunningRound);
