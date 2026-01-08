import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneBroom: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M22.53 2.53a.75.75 0 0 0-1.06-1.06l-2.402 2.402a4.5 4.5 0 0 1 1.06 1.06zM2.449 11.412l.74 1.218a24.45 24.45 0 0 0 8.181 8.18l1.219.742c1.898.969 4.353.346 5.414-1.662.5-.948.977-2.012 1.279-3.069.488-1.707.659-3.26.712-4.331.033-.64.049-.96-.104-1.356-.152-.396-.416-.66-.944-1.188L14.12 5.122c-.491-.492-.737-.737-1.107-.89-.37-.152-.664-.15-1.253-.148a17.2 17.2 0 0 0-4.581.634c-1.057.302-2.12.779-3.069 1.28-2.008 1.06-2.63 3.515-1.661 5.414" opacity=".5"/><path fill="${color}" d="M19.643 4.358a4.445 4.445 0 0 0-6.287 0l-.037.037c.231.156.455.38.801.726l4.826 4.825c.301.302.517.517.675.72l.022-.022a4.445 4.445 0 0 0 0-6.286"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneBroom };
export default React.memo(BoldDuotoneBroom);
