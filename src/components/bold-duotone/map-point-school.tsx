import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneMapPointSchool: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M10.537 21.674a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.606 20 10.144 20 5.645 16.418 2 12 2s-8 3.646-8 8.143c0 4.462 2.553 9.67 6.537 11.531" opacity=".5"/><path fill="${color}" fill-rule="evenodd" d="M13.033 5.932a3.03 3.03 0 0 0-2.066 0l-2.342.855c-.541.198-.875.68-.875 1.213s.334 1.015.875 1.213l.125.045V11.7c0 .673.394 1.329 1.08 1.582.526.194 1.391.468 2.17.468s1.644-.274 2.17-.468c.686-.253 1.08-.909 1.08-1.582V9.258l.125-.045c.541-.198.875-.68.875-1.213s-.334-1.015-.875-1.213zM10.25 9.806V11.7c0 .105.057.159.1.175.501.185 1.154.375 1.65.375s1.149-.19 1.65-.375c.043-.016.1-.07.1-.175V9.806l-.717.262a3.03 3.03 0 0 1-2.066 0zm2.269-2.465a1.53 1.53 0 0 0-1.038 0L9.677 8l1.804.66c.332.12.707.12 1.038 0L14.323 8z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneMapPointSchool);
