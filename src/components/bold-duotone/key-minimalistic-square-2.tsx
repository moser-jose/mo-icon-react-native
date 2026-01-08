import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneKeyMinimalisticSquare2: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"/><path fill="${color}" fill-rule="evenodd" d="M21.963 8.412a5.73 5.73 0 0 1-1.649 3.413 5.75 5.75 0 0 1-5.507 1.505.9.9 0 0 0-.864.215l-1.53 1.53-.002-.003-1.458-1.442a.75.75 0 1 0-1.055 1.067l1.455 1.438-.503.503a1.23 1.23 0 0 1-1.009.354l-1.74-.193a.82.82 0 0 1-.49-.236l-.174-.173a.82.82 0 0 1-.236-.491l-.193-1.74a1.23 1.23 0 0 1 .353-1.009l3.094-3.093a.9.9 0 0 0 .215-.865 5.75 5.75 0 0 1 1.505-5.506 5.73 5.73 0 0 1 3.413-1.649c.906.033 1.68.096 2.348.216a5.7 5.7 0 0 1 2.378 1.433 5.7 5.7 0 0 1 1.433 2.378c.12.667.182 1.441.216 2.348m-6.975-1.757a1.667 1.667 0 1 1 2.357 2.357 1.667 1.667 0 0 1-2.357-2.357" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneKeyMinimalisticSquare2 };
export default React.memo(BoldDuotoneKeyMinimalisticSquare2);
