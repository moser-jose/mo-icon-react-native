import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneLetterOpened: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="m6.72 10.6 1.439 1.2c1.837 1.53 2.755 2.295 3.841 2.295s2.005-.765 3.841-2.296l1.44-1.2c.353-.294.53-.442.625-.643.094-.202.094-.432.094-.893V7q0-.48-.002-.898c-.012-1.771-.098-2.737-.73-3.37C16.536 2 15.358 2 13 2h-2c-2.357 0-3.535 0-4.268.732-.632.633-.72 1.599-.732 3.37Q5.998 6.519 6 7v2.063c0 .46 0 .691.095.893.094.201.27.349.625.644M9.25 6a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 6m1 3a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/><path fill="${color}" d="m8.159 11.8-1.44-1.2c-.353-.295-.53-.442-.625-.644S6 9.524 6 9.064V6.102c-1.3.128-2.175.417-2.828 1.07C2 8.343 2 10.23 2 14.002c0 3.77 0 5.656 1.172 6.827S6.229 22.002 10 22.002h4c3.771 0 5.657 0 6.828-1.172S22 17.773 22 14.002s0-5.658-1.172-6.83c-.653-.653-1.529-.942-2.83-1.07q.002.42.002.9v2.063c0 .46 0 .69-.095.892-.094.202-.27.35-.625.644l-1.44 1.2c-1.836 1.53-2.754 2.295-3.84 2.295S9.995 13.33 8.159 11.8" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneLetterOpened };
export default React.memo(BoldDuotoneLetterOpened);
