import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneTextCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z" opacity=".5"/><path fill="${color}" d="M11.25 17a.75.75 0 0 0 1.5 0zm4-7.25a.75.75 0 0 0 1.5 0zm-8 0a.75.75 0 0 0 1.5 0zm8.457-2.425.558-.501zM9.5 16.25a.75.75 0 0 0 0 1.5zm5.5 1.5a.75.75 0 0 0 0-1.5zm-5-10h2v-1.5h-2zm2 0h2v-1.5h-2zm.75 9.25V7h-1.5v10zm2.5-7.778v.528h1.5v-.528zm-8 0v.528h1.5v-.528zM14 7.75c.495 0 .782.002.986.032.092.014.135.03.152.037.01.005.01.006.012.008l1.115-1.003c-.305-.339-.686-.47-1.057-.525-.34-.051-.76-.049-1.208-.049zm2.75 1.472c0-.504.001-.95-.042-1.31-.045-.371-.149-.761-.443-1.088L15.15 7.827c.002.003.01.012.023.045.014.038.032.105.046.221.03.247.031.586.031 1.13zM10 6.25c-.448 0-.868-.002-1.208.049-.371.055-.752.186-1.057.525L8.85 7.827c.002-.002.002-.003.012-.008a.6.6 0 0 1 .152-.037c.204-.03.491-.032.986-.032zM8.75 9.222c0-.543.001-.882.031-1.129a1 1 0 0 1 .046-.22c.012-.034.02-.043.023-.046L7.735 6.824c-.294.327-.398.717-.443 1.089-.043.358-.042.805-.042 1.31zm.75 8.528H15v-1.5H9.5z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneTextCircle };
export default React.memo(OutlineDuotoneTextCircle);
