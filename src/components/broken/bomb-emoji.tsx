import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenBombEmoji: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M10 16h2"/><path fill="${color}" d="M14 12.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5"/><ellipse cx="9" cy="12.5" fill="${color}" rx="1" ry="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m17 7-2 2"/><path stroke="${color}" stroke-width="1.5" d="M17.981 2.353a.558.558 0 0 1 1.038 0l.654 1.66c.057.143.17.257.315.314l1.659.654c.47.186.47.852 0 1.038l-1.66.654a.56.56 0 0 0-.314.315l-.654 1.659a.558.558 0 0 1-1.038 0l-.654-1.66a.56.56 0 0 0-.315-.314l-1.659-.654a.558.558 0 0 1 0-1.038l1.66-.654a.56.56 0 0 0 .314-.315z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M5.75 8.003a7.5 7.5 0 1 1-2.747 2.747"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenBombEmoji);
