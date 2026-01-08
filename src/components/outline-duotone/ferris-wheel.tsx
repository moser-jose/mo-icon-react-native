import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneFerrisWheel: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="11" r="2" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-width="1.5" d="M20.5 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 8.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-15-8.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 8.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0 16a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m13.5 13 5 9m-8-9-5 9" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M10.564 3.783a3 3 0 0 1 2.872 0l4.794 2.614a3 3 0 0 1 1.564 2.634v4.938a3 3 0 0 1-1.564 2.634l-4.794 2.614a3 3 0 0 1-2.872 0L5.77 16.603a3 3 0 0 1-1.564-2.634V9.03A3 3 0 0 1 5.77 6.397z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneFerrisWheel };
export default React.memo(OutlineDuotoneFerrisWheel);
