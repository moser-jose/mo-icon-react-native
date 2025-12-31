import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineEyeClosed: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M22.295 6.31a.75.75 0 0 1 .394.986L22 7l.69.296-.001.001-.002.003-.003.007-.01.024-.039.084a14 14 0 0 1-.727 1.321 15 15 0 0 1-1.846 2.394l.968.969a.75.75 0 0 1-1.06 1.06l-1-1a11.6 11.6 0 0 1-2.275 1.497l.934 1.435a.75.75 0 1 1-1.258.818l-1.089-1.674c-.78.255-1.623.428-2.532.49V16.5a.75.75 0 0 1-1.5 0v-1.775a10.5 10.5 0 0 1-2.46-.466l-1.074 1.65a.75.75 0 1 1-1.257-.818l.912-1.402a11.5 11.5 0 0 1-2.293-1.49l-.96.96a.75.75 0 0 1-1.061-1.06l.924-.924A15 15 0 0 1 1.514 7.72a10 10 0 0 1-.188-.388l-.01-.025-.004-.007v-.003H1.31L2 7l-.689.296a.75.75 0 0 1 1.378-.592v.002l.007.014.029.063q.04.086.125.255a13.3 13.3 0 0 0 2.706 3.584c.866.805 1.927 1.546 3.196 2.034A9 9 0 0 0 12 13.25a9 9 0 0 0 3.313-.619c1.26-.497 2.315-1.243 3.174-2.049a13.3 13.3 0 0 0 2.789-3.8l.028-.063.006-.013v-.001m.985-.394a.75.75 0 0 0-.984.394zM2.69 6.704" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineEyeClosed);
