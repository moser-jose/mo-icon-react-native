import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineUserHands: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M12 1.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5M8.75 6a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M8 12.25a4.124 4.124 0 0 0-4.095 3.642l-.65 5.52a.75.75 0 0 0 1.49.176l.65-5.52a2.62 2.62 0 0 1 1.855-2.209v4.193c0 .899 0 1.648.08 2.242.084.628.27 1.195.725 1.65.456.456 1.023.642 1.65.726.595.08 1.345.08 2.243.08h.104c.899 0 1.648 0 2.242-.08.628-.084 1.195-.27 1.65-.726.456-.455.642-1.022.726-1.65.08-.594.08-1.343.08-2.242v-4.193a2.63 2.63 0 0 1 1.856 2.208l.65 5.52a.75.75 0 0 0 1.489-.175l-.65-5.52A4.124 4.124 0 0 0 16 12.25zM8.75 18v-4.25h6.5V18c0 .964-.002 1.612-.066 2.095-.063.461-.17.659-.3.789s-.328.237-.79.3c-.482.064-1.13.066-2.094.066s-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3s-.237-.327-.3-.788c-.064-.483-.066-1.131-.066-2.095" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineUserHands);
