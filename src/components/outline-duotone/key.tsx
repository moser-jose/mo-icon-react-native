import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneKey: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linejoin="round" stroke-width="1.5" d="M15.68 14.587c3.49 0 6.32-2.818 6.32-6.294S19.17 2 15.68 2 9.363 4.818 9.363 8.293c0 1.61.734 2.781.734 2.781l-7.642 7.61c-.343.342-.823 1.23 0 2.05l.882.878c.343.293 1.205.703 1.91 0l1.03-1.024c1.028 1.024 2.204.439 2.645-.147.734-1.024-.147-2.049-.147-2.049l.294-.293c1.41 1.406 2.645.586 3.086 0 .735-1.024 0-2.049 0-2.049-.294-.585-.882-.585-.147-1.317l.882-.878c.705.585 2.155.732 2.792.732Z"/><path stroke="${color}" stroke-width="1.5" d="M17.885 8.293a2.2 2.2 0 0 1-2.204 2.195 2.2 2.2 0 0 1-2.205-2.195 2.2 2.2 0 0 1 2.205-2.195 2.2 2.2 0 0 1 2.204 2.195Z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneKey };
export default React.memo(OutlineDuotoneKey);
