import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineLinkBroken: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M19.99 3.99c-1.553-1.52-3.682-1.578-4.765-.517l-3.7 3.625a.75.75 0 0 1-1.05-1.071l3.7-3.625c1.836-1.8 4.914-1.393 6.864.517 1.953 1.914 2.379 4.956.529 6.768l-2.907 2.849a.75.75 0 1 1-1.05-1.072l2.907-2.848c1.07-1.048 1.021-3.107-.528-4.625M6.624 3.584a.75.75 0 0 0-1.248.832l2 3a.75.75 0 0 0 1.248-.832zM2.237 7.288a.75.75 0 1 0-.474 1.423l6 2a.75.75 0 1 0 .474-1.423zm4.491 5.218a.75.75 0 0 0-1.108-1.012l-1.26 1.38c-1.727 1.889-1.35 5.053.504 7.081 1.865 2.04 4.87 2.504 6.655.552l4.035-4.415a.75.75 0 0 0-1.108-1.012l-4.034 4.415c-1.001 1.095-2.964 1.064-4.441-.552-1.488-1.629-1.563-3.9-.504-5.058z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineLinkBroken };
export default React.memo(OutlineLinkBroken);
