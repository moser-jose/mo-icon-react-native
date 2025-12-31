import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineFerrisWheel: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M13.698 3.073a1.75 1.75 0 0 0-3.396 0l-.097.052L5.41 5.739a4 4 0 0 0-.242.143 1.75 1.75 0 0 0-1.711 3.024l-.002.125v4.938q0 .3.047.593a1.75 1.75 0 1 0 2.095 2.801l1.243.678-1.997 3.595a.75.75 0 1 0 1.312.728l2.002-3.605 2.047 1.116.097.052a1.75 1.75 0 0 0 3.396 0l.097-.052 2.047-1.116 2.002 3.605a.75.75 0 1 0 1.312-.728l-1.997-3.595 1.244-.678a1.75 1.75 0 1 0 2.095-2.801q.046-.293.046-.593V9.03l-.002-.125a1.75 1.75 0 0 0-1.711-3.024 4 4 0 0 0-.241-.143l-4.795-2.614zm-3.061 1.525a1.747 1.747 0 0 0 2.726 0l4.452 2.427a1.75 1.75 0 0 0 1.23 2.165v4.779q0 .177-.028.349A1.75 1.75 0 0 0 17.75 16v.01l-1.32.72-2.251-4.052a2.75 2.75 0 1 0-4.358 0L7.57 16.73l-1.32-.72V16a1.75 1.75 0 0 0-1.267-1.682 2 2 0 0 1-.027-.35V9.19a1.75 1.75 0 0 0 1.229-2.165zm4.476 12.85-2.15-3.871a2.75 2.75 0 0 1-1.925 0l-2.151 3.871 1.75.954a1.747 1.747 0 0 1 2.726 0zM10.75 11a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineFerrisWheel);
