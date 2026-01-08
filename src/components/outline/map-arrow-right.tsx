import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineMapArrowRight: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M1.987 2.953a2.55 2.55 0 0 1 2.816-.473l16.51 7.363a2.338 2.338 0 0 1 0 4.315L4.802 21.52a2.55 2.55 0 0 1-2.816-.473c-.69-.659-1.009-1.735-.458-2.767l3.152-5.904.662.354-.662-.354a.79.79 0 0 0 0-.752L1.53 5.72c-.55-1.031-.232-2.108.458-2.767m1.036 1.085c-.274.262-.36.62-.17.976l-.662.353.661-.353 3.153 5.904c.363.68.363 1.485 0 2.165l-3.153 5.904c-.19.356-.103.714.171.976.28.267.72.387 1.169.187l16.51-7.362c.73-.326.73-1.25 0-1.575L4.192 3.85a1.05 1.05 0 0 0-1.169.188" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineMapArrowRight };
export default React.memo(OutlineMapArrowRight);
