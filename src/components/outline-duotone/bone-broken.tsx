import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneBoneBroken: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.137 2.738c-.743.743-1.128 2.038-.848 3.052.149.536.173 1.185-.22 1.579l-1.28 1.28a.14.14 0 0 0 .044.226 6.27 6.27 0 0 1 3.292 3.292.14.14 0 0 0 .227.044l1.28-1.28c.393-.393 1.042-.369 1.578-.22 1.014.28 2.309-.105 3.052-.848A2.519 2.519 0 0 0 17.7 6.3a2.519 2.519 0 0 0-3.563-3.562M2.738 17.7a2.52 2.52 0 0 0 3.562 0 2.519 2.519 0 0 0 3.563 3.562c.743-.743 1.128-2.038.848-3.052-.149-.536-.173-1.185.22-1.579l1.28-1.28a.14.14 0 0 0-.044-.226 6.27 6.27 0 0 1-3.292-3.292.14.14 0 0 0-.227-.044l-1.28 1.28c-.393.393-1.042.369-1.578.22-1.014-.28-2.309.105-3.052.848a2.52 2.52 0 0 0 0 3.563"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m17.657 17.656 1.414 1.415M6.343 6.343 4.93 4.929M15 19v1M5 9H4m15 6h1M9 5V4" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneBoneBroken };
export default React.memo(OutlineDuotoneBoneBroken);
