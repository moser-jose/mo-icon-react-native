import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldPointOnMap: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M21 16.828v-5.666c0-1.044 0-1.566-.283-1.959-.229-.317-.596-.486-1.25-.713-.134 1.606-.666 3.247-1.501 4.682-.973 1.672-2.418 3.166-4.269 3.974a4.26 4.26 0 0 1-3.394 0c-1.851-.808-3.296-2.302-4.269-3.974A11.5 11.5 0 0 1 4.7 9.657c-.383-.057-.676-.028-.93.113a1.5 1.5 0 0 0-.28.203C3 10.419 3 11.248 3 12.907v4.93c0 1.044 0 1.565.283 1.958s.778.558 1.768.888l.384.128c1.577.526 2.365.788 3.172.79q.364 0 .726-.052c.798-.115 1.548-.49 3.048-1.24 1.149-.575 1.724-.862 2.334-.995q.321-.07.65-.098c.623-.052 1.25.052 2.507.262 1.273.212 1.91.318 2.375.051a1.5 1.5 0 0 0 .413-.35c.34-.414.34-1.06.34-2.35"/><path fill="${color}" fill-rule="evenodd" d="M12 2C8.686 2 6 4.552 6 7.7c0 3.124 1.915 6.769 4.903 8.072a2.76 2.76 0 0 0 2.194 0C16.085 14.47 18 10.824 18 7.7 18 4.552 15.314 2 12 2m0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldPointOnMap);
