import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneFigma: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M12 2H8.667a3.333 3.333 0 1 0 0 6.667H12z" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M12 8.667H8.667a3.333 3.333 0 0 0 0 6.667H12z"/><path stroke="${color}" stroke-width="1.5" d="M18.667 12A3.333 3.333 0 1 1 12 12a3.333 3.333 0 0 1 6.667 0Zm-10 3.333H12v3.333a3.333 3.333 0 1 1-3.333-3.333Z" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M12 2h3.333a3.333 3.333 0 1 1 0 6.667H12z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneFigma };
export default React.memo(OutlineDuotoneFigma);
