import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineRadar2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M14.394 3.066a9.22 9.22 0 0 0-6.939.878.75.75 0 0 1-.737-1.306 10.72 10.72 0 0 1 8.064-1.021c5.735 1.536 9.138 7.431 7.602 13.166-1.537 5.735-7.431 9.138-13.166 7.601S.08 14.953 1.616 9.218A10.7 10.7 0 0 1 3.01 6.103c.574-.875 1.732-.943 2.465-.35l6.998 5.665a.75.75 0 1 1-.944 1.166l-4.04-3.27a5.25 5.25 0 1 0 2.851-2.296.75.75 0 1 1-.473-1.423 6.75 6.75 0 1 1-3.553 2.768L4.53 6.919a.23.23 0 0 0-.168-.052.13.13 0 0 0-.099.059 9.2 9.2 0 0 0-1.198 2.68 9.25 9.25 0 1 0 11.33-6.54" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineRadar2);
