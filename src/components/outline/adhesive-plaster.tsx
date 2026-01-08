import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineAdhesivePlaster: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M9.345 8.23A.788.788 0 1 0 8.23 9.346.788.788 0 0 0 9.345 8.23m2.784.929a.787.787 0 1 0-1.114 1.114.787.787 0 0 0 1.114-1.114m3.712 3.712a.788.788 0 1 1-1.114 1.114.788.788 0 0 1 1.114-1.114m.929 3.899a.787.787 0 1 0-1.114-1.114.787.787 0 0 0 1.114 1.114m-3.713-3.713a.787.787 0 1 0-1.113-1.114.787.787 0 0 0 1.113 1.114m.928 1.671a.788.788 0 1 1-1.114 1.113.788.788 0 0 1 1.114-1.113m-4.826-3.713a.787.787 0 1 1 1.114 1.114.787.787 0 0 1-1.114-1.114"/><path fill="${color}" fill-rule="evenodd" d="M14.399 2.683A4.892 4.892 0 1 1 21.317 9.6L18.92 12l2.398 2.399a4.892 4.892 0 1 1-6.918 6.918L12 18.92l-2.399 2.398A4.892 4.892 0 0 1 2.683 14.4L5.08 12 2.683 9.601A4.892 4.892 0 0 1 9.6 2.683L12 5.08zm5.858 12.776a3.392 3.392 0 0 1-4.798 4.797L3.744 8.542A3.392 3.392 0 0 1 8.54 3.744zm0-6.918-2.4 2.398-4.796-4.797 2.398-2.398a3.392 3.392 0 1 1 4.797 4.797M3.743 15.459l2.398-2.398 4.797 4.797-2.398 2.398a3.392 3.392 0 0 1-4.797-4.797" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineAdhesivePlaster };
export default React.memo(OutlineAdhesivePlaster);
