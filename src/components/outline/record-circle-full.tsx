import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineRecordCircleFull: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M13.26 13.75a3.25 3.25 0 1 1 2.74 1.5H8a3.25 3.25 0 1 1 2.74-1.5zm.99-1.75a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M8 13.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5" clip-rule="evenodd"/><path fill="${color}" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineRecordCircleFull };
export default React.memo(OutlineRecordCircleFull);
