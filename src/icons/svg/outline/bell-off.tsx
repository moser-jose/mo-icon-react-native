import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineBellOff: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none"><path fill="${color}" d="M10 9.75a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .53 1.28l-2.72 2.72H14a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.53-1.28l2.72-2.72z"/><path fill="${color}" fill-rule="evenodd" d="M4.25 9a7.75 7.75 0 0 1 15.5 0v.704c0 .697.206 1.378.593 1.958l1.148 1.723c1.334 2 .316 4.718-2.003 5.35q-1.133.309-2.284.523l-.002.005c-.769 2.052-2.824 3.487-5.202 3.487s-4.433-1.435-5.202-3.487l-.002-.005a29 29 0 0 1-2.284-.523c-2.319-.632-3.336-3.35-2.003-5.35l1.148-1.723a3.53 3.53 0 0 0 .593-1.958zm4.374 10.537c.71 1.021 1.947 1.713 3.376 1.713s2.665-.692 3.377-1.713a28.5 28.5 0 0 1-6.753 0M12 2.75A6.25 6.25 0 0 0 5.75 9v.704a5.03 5.03 0 0 1-.845 2.79l-1.148 1.723a2.02 2.02 0 0 0 1.15 3.071 26.96 26.96 0 0 0 14.187 0 2.02 2.02 0 0 0 1.15-3.07l-1.15-1.724a5.03 5.03 0 0 1-.844-2.79V9A6.25 6.25 0 0 0 12 2.75" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineBellOff);
