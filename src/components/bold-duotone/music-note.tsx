import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneMusicNote: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="m10.091 11.963 9.273-3.332L21 7.952v-.46c0-1.12 0-2.059-.088-2.807a7 7 0 0 0-.043-.31c-.084-.51-.234-.988-.522-1.386a2.2 2.2 0 0 0-.676-.617l-.009-.005c-.771-.461-1.639-.428-2.532-.224-.864.198-1.935.6-3.25 1.095l-2.284.859c-.615.231-1.137.427-1.546.63-.436.216-.811.471-1.093.851s-.398.79-.452 1.234c-.05.418-.05.926-.05 1.525v4.265z" clip-rule="evenodd"/><path fill="${color}" d="M8.455 16.131a3.8 3.8 0 0 0-1.91-.5C4.587 15.63 3 17.057 3 18.816S4.587 22 6.545 22c1.959 0 3.546-1.426 3.546-3.185v-6.852l-1.636.638zm10.909-7.499v5.54a3.8 3.8 0 0 0-1.91-.501c-1.958 0-3.545 1.426-3.545 3.185s1.587 3.185 3.545 3.185c1.959 0 3.546-1.426 3.546-3.185V7.953z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneMusicNote);
