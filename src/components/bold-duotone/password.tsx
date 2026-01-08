import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotonePassword: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12" opacity=".5"/><path fill="${color}" d="M12.75 10a.75.75 0 0 0-1.5 0v.701l-.607-.35a.75.75 0 1 0-.75 1.298l.607.35-.607.351a.75.75 0 1 0 .75 1.3l.607-.351V14a.75.75 0 1 0 1.5 0v-.7l.607.35a.75.75 0 0 0 .75-1.3L13.5 12l.607-.35a.75.75 0 0 0-.75-1.3l-.607.35zm-6.017-.75a.75.75 0 0 1 .75.75v.7l.606-.35a.75.75 0 0 1 .75 1.3l-.607.35.607.35a.75.75 0 1 1-.75 1.3l-.606-.35v.7a.75.75 0 0 1-1.5 0v-.701l-.608.35a.75.75 0 0 1-.75-1.298L5.232 12l-.607-.35a.75.75 0 1 1 .75-1.3l.608.351V10a.75.75 0 0 1 .75-.75m11.285.75a.75.75 0 0 0-1.5 0v.701l-.607-.35a.75.75 0 1 0-.75 1.298l.607.35-.607.351a.75.75 0 0 0 .75 1.3l.607-.351V14a.75.75 0 0 0 1.5 0v-.7l.607.35a.75.75 0 0 0 .75-1.3l-.607-.35.607-.35a.75.75 0 1 0-.75-1.3l-.607.35z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotonePassword };
export default React.memo(BoldDuotonePassword);
