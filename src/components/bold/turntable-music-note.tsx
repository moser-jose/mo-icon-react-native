import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldTurntableMusicNote: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M19.25 11.5a.75.75 0 0 1 .75.75 2.25 2.25 0 0 0 2.25 2.25.75.75 0 0 1 0 1.5 3.73 3.73 0 0 1-2.25-.75v5a2.75 2.75 0 1 1-1.5-2.45v-5.55a.75.75 0 0 1 .75-.75m-.75 8.75a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0" clip-rule="evenodd"/><path fill="${color}" d="M12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"/><path fill="${color}" fill-rule="evenodd" d="M2 12c0-4.714 0-7.071 1.172-8.536S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.464C22 4.93 22 7.286 22 12v.957a.75.75 0 0 1-.5-.707 2.25 2.25 0 0 0-4.5 0v3.757A4.25 4.25 0 0 0 13.376 22H10c-3.771 0-5.657 0-6.828-1.465C2 19.072 2 16.714 2 12m10-3.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldTurntableMusicNote };
export default React.memo(BoldTurntableMusicNote);
