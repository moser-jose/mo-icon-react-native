import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenRollingPin: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M17.013 13.157c1.454-1.454 2.18-2.181 2.18-3.085 0-.605-.326-1.131-.978-1.85m-9.993 9.993-1.963 2.748a4 4 0 0 1-.156.213 2.18 2.18 0 0 1-3.169.262 6 6 0 0 1-.188-.184c-.098-.098-.147-.147-.184-.188A2.18 2.18 0 0 1 2.085 19m6.137-.785a38 38 0 0 1-1.234-1.203c-.48-.48-.881-.88-1.203-1.234m2.437 2.437c.719.652 1.245.979 1.85.979.904 0 1.63-.727 3.085-2.181l.843-.844m-8.215-.391c-.652-.719-.979-1.245-.979-1.85 0-.904.727-1.63 2.182-3.085l3.855-3.855c1.454-1.455 2.181-2.182 3.085-2.182.605 0 1.131.327 1.85.98m-9.993 9.992-1.374.982m13.804-8.538 2.748-1.963c.113-.08.169-.12.213-.156a2.18 2.18 0 0 0 .262-3.169 6 6 0 0 0-.184-.188c-.098-.098-.147-.147-.188-.184a2.18 2.18 0 0 0-3.17.262 6 6 0 0 0-.155.213l-1.963 2.748m2.437 2.437a38 38 0 0 0-1.203-1.234c-.48-.48-.88-.881-1.234-1.203"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenRollingPin);
