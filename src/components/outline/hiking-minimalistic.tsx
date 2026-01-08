import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineHikingMinimalistic: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M11.5 3.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M8.25 5.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M19 6.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0V10.994a5.88 5.88 0 0 1-5.636.15 1.098 1.098 0 0 0-1.658.832l-.069.686a1.54 1.54 0 0 0 .715 1.455l.333.208a6.59 6.59 0 0 1 3.07 5.001l.142 1.607a.75.75 0 0 1-1.494.134l-.143-1.608a5.09 5.09 0 0 0-2.37-3.862l-.333-.208a3.04 3.04 0 0 1-1.412-2.876l.069-.687c.188-1.885 2.264-2.938 3.894-1.986a4.38 4.38 0 0 0 4.738-.563l.154-.128V7a.75.75 0 0 1 .75-.75m-9.81 9.525a.75.75 0 0 1 .535.916L9 16.5l.725.19v.003l-.002.005-.004.016-.016.058q-.02.076-.06.207c-.05.174-.125.415-.219.686-.181.525-.456 1.223-.796 1.745-.357.548-.918 1.101-1.351 1.493a16 16 0 0 1-.75.637l-.05.039-.014.01-.004.004S6.456 21.595 6 21l.458.594a.75.75 0 0 1-.916-1.188l.003-.002.01-.008.04-.032.157-.126c.133-.11.317-.265.518-.447.417-.377.856-.823 1.102-1.2.234-.36.46-.912.635-1.417a14 14 0 0 0 .25-.803l.014-.048.003-.011v-.003a.75.75 0 0 1 .917-.534" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineHikingMinimalistic };
export default React.memo(OutlineHikingMinimalistic);
