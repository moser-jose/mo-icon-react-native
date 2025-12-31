import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenTicketSale: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m9 15 6-6"/><path fill="${color}" d="M15.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-5-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M14.004 4H9.996C6.218 4 4.33 4 3.156 5.172c-.88.877-1.1 2.154-1.156 4.322-.007.278.221.5.49.571A2 2 0 0 1 3.986 12c0 .929-.634 1.71-1.494 1.935-.27.07-.498.292-.49.57.055 2.17.276 3.446 1.154 4.323M18 4.1c1.309.128 2.189.417 2.845 1.072.878.877 1.1 2.154 1.155 4.322.007.278-.221.5-.49.571A2 2 0 0 0 20.014 12c0 .929.634 1.71 1.494 1.935.27.07.498.292.49.57-.055 2.17-.276 3.446-1.154 4.323C19.67 20 17.782 20 14.004 20H9.996C8.83 20 7.841 20 7 19.965"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenTicketSale);
