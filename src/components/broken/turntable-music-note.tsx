import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenTurntableMusicNote: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m19.995-2c-.03-3.413-.219-5.295-1.46-6.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464c-.973.974-1.3 2.343-1.409 4.536M19 20v-8"/><circle cx="17" cy="20" r="2" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 15a3 3 0 0 1-3-3"/><path stroke="${color}" stroke-width="1.5" d="M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenTurntableMusicNote };
export default React.memo(BrokenTurntableMusicNote);
