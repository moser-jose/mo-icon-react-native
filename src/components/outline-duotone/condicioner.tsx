import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneCondicioner: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M2 7.571c0-2.414 0-3.62.655-4.441q.21-.264.475-.475C3.95 2 5.157 2 7.57 2h8.858c2.414 0 3.62 0 4.442.655q.263.21.475.475C22 3.95 22 5.157 22 7.57c0 3.22 0 4.829-.873 5.923q-.28.352-.633.633C19.4 15 17.79 15 14.571 15H9.43c-3.22 0-4.829 0-5.923-.873a4 4 0 0 1-.633-.633C2 12.4 2 10.79 2 7.571Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m7 17.5-.307.46A1.32 1.32 0 0 0 7 19.75c.561.42.696 1.206.307 1.79L7 22m5-4.5-.306.46c-.39.584-.255 1.37.306 1.79s.696 1.206.307 1.79L12 22m5-4.5-.306.46c-.39.584-.255 1.37.306 1.79s.696 1.206.307 1.79L17 22m1-7.5c0-.465 0-.697-.038-.89a2 2 0 0 0-1.572-1.572C16.197 12 15.965 12 15.5 12H9c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.122.295-.146.653-.15 1.265" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M6 8.5h12M6 6h12"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneCondicioner };
export default React.memo(OutlineDuotoneCondicioner);
