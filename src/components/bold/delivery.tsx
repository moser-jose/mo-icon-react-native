import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDelivery: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="m9.564 8.73.515 1.863c.485 1.755.727 2.633 1.44 3.032.713.4 1.618.164 3.428-.306l1.92-.5c1.81-.47 2.715-.705 3.127-1.396.412-.692.17-1.57-.316-3.325l-.514-1.862c-.485-1.756-.728-2.634-1.44-3.033-.714-.4-1.619-.164-3.429.307l-1.92.498c-1.81.47-2.715.706-3.126 1.398-.412.691-.17 1.569.315 3.324"/><path fill="${color}" d="M2.277 5.247a.75.75 0 0 1 .924-.522l1.703.472A2.71 2.71 0 0 1 6.8 7.075l2.151 7.786.158.547a2.96 2.96 0 0 1 1.522 1.267l.31-.096 8.87-2.305a.75.75 0 1 1 .378 1.452l-8.837 2.296-.33.102c-.006 1.27-.883 2.432-2.21 2.776-1.59.414-3.225-.502-3.651-2.044s.518-3.129 2.108-3.542q.119-.03.237-.052L5.354 7.474a1.21 1.21 0 0 0-.85-.831L2.8 6.17a.75.75 0 0 1-.523-.923"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDelivery);
