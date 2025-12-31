import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldUserHands: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8m-4 2.25a4.124 4.124 0 0 0-4.095 3.642l-.65 5.52a.75.75 0 0 0 1.49.176l.65-5.52a2.62 2.62 0 0 1 1.855-2.209v4.193c0 .899 0 1.648.08 2.242.084.628.27 1.195.726 1.65.455.456 1.022.642 1.65.726.594.08 1.344.08 2.242.08h.104c.899 0 1.648 0 2.243-.08.627-.084 1.194-.27 1.65-.726s.64-1.022.725-1.65c.08-.594.08-1.343.08-2.242v-4.193a2.62 2.62 0 0 1 1.856 2.208l.65 5.52a.75.75 0 1 0 1.489-.175l-.65-5.52A4.124 4.124 0 0 0 16 12.25z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldUserHands);
