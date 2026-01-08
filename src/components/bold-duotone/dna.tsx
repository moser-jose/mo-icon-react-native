import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneDna: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M15.03 1.47a.75.75 0 0 1 0 1.06c-2.558 2.558-3.523 6.113-2.591 9.031 2.918.932 6.473-.033 9.03-2.591a.75.75 0 1 1 1.061 1.06c-2.622 2.623-6.264 3.854-9.556 3.213.75 3.175-.4 6.744-2.944 9.287a.75.75 0 1 1-1.06-1.06c2.416-2.417 3.3-5.788 2.36-8.516l-.072-.212-.212-.072c-2.727-.94-6.099-.056-8.516 2.36a.75.75 0 0 1-1.06-1.06c2.543-2.544 6.112-3.693 9.287-2.944-.64-3.292.59-6.934 3.213-9.556a.75.75 0 0 1 1.06 0" clip-rule="evenodd"/><path fill="${color}" d="M20.085 10.136 16.809 6.86a.75.75 0 0 0-1.061 1.061l3.008 3.008q.684-.34 1.329-.793M13.109 5.17l.948.947a.75.75 0 1 0 1.06-1.06L13.911 3.85q-.457.639-.802 1.32m-2.212 13.554L9.835 17.66a.75.75 0 0 0-1.06 1.06l1.353 1.354a9.4 9.4 0 0 0 .77-1.351m-7.041-4.805 3.113 3.113a.75.75 0 0 0 1.06-1.061L5.2 13.139a9.4 9.4 0 0 0-1.343.78M6.5 12.64l4.813 4.812q.023.023.048.044a8.2 8.2 0 0 0 .322-1.795l-3.384-3.384a8.2 8.2 0 0 0-1.798.323m11.048-1.209a1 1 0 0 0-.096-.118l-4.879-4.878a9 9 0 0 0-.406 1.714l3.683 3.683a9 9 0 0 0 1.698-.4" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneDna };
export default React.memo(BoldDuotoneDna);
