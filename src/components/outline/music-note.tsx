import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineMusicNote: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M18.673 3.668c-.637.113-1.476.39-2.7.799l-4 1.333c-.677.226-1.124.376-1.454.53-.312.144-.447.261-.533.381s-.155.285-.194.627c-.04.36-.042.833-.042 1.546v2.076l10.5-3.5c0-1.242-.004-2.1-.096-2.725-.091-.623-.248-.847-.423-.974-.175-.126-.438-.204-1.058-.093M21.74 6c-.012-.564-.04-1.06-.102-1.482-.116-.793-.375-1.501-1.03-1.974-.655-.472-1.409-.493-2.198-.353-.758.135-1.702.45-2.854.834L11.458 4.39c-.626.21-1.155.386-1.571.58-.443.205-.827.46-1.118.864s-.412.849-.467 1.334A9 9 0 0 0 8.255 8H8.25v8a3.75 3.75 0 1 0 1.5 3v-6.459l10.5-3.5v4.96a3.75 3.75 0 1 0 1.5 3V6zm-1.49 11a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0m-12 2a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineMusicNote);
