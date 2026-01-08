import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldFerrisWheel: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M13.698 3.073a1.75 1.75 0 0 0-3.396 0l-.097.052L5.41 5.739a4 4 0 0 0-.241.143 1.75 1.75 0 0 0-1.711 3.023l-.002.126v4.938q0 .301.047.593a1.75 1.75 0 1 0 2.095 2.801l1.307.713-2.054 3.548a.75.75 0 0 0 1.298.752l2.074-3.581 1.982 1.08.097.052a1.75 1.75 0 0 0 3.396 0l.097-.052 1.983-1.08 2.073 3.58a.75.75 0 0 0 1.298-.75l-2.054-3.549 1.307-.713a1.75 1.75 0 1 0 2.095-2.801q.047-.293.047-.593V9.03l-.002-.125a1.75 1.75 0 0 0-1.711-3.024 4 4 0 0 0-.242-.143l-4.794-2.614zm-3.061 1.524a1.747 1.747 0 0 0 2.726 0l4.452 2.428a1.75 1.75 0 0 0 1.229 2.165v4.779q0 .177-.027.349A1.75 1.75 0 0 0 17.75 16v.01l-1.407.767-2.691-4.649a2 2 0 1 0-3.303 0l-2.692 4.65-1.407-.767V16c0-.8-.536-1.473-1.267-1.683a2 2 0 0 1-.027-.348V9.19a1.75 1.75 0 0 0 1.229-2.165zM8.974 17.496l1.663.907a1.747 1.747 0 0 1 2.726 0l1.663-.907L12.4 12.96a2 2 0 0 1-.8 0z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldFerrisWheel };
export default React.memo(BoldFerrisWheel);
