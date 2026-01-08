import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldMapPointSchool: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M13.463 21.674a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.606 4 10.144 4 5.645 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531M10.967 5.932a3.03 3.03 0 0 1 2.066 0l2.342.855c.541.198.875.68.875 1.213s-.334 1.015-.875 1.213l-.125.045V11.7c0 .673-.394 1.329-1.08 1.582-.526.194-1.391.468-2.17.468s-1.644-.274-2.17-.468c-.686-.253-1.08-.909-1.08-1.582V9.258l-.125-.045C8.084 9.015 7.75 8.533 7.75 8s.334-1.015.875-1.213z" clip-rule="evenodd"/><path fill="${color}" fill-rule="evenodd" d="M11.481 7.34a1.53 1.53 0 0 1 1.038 0l1.804.66-1.804.66a1.53 1.53 0 0 1-1.038 0L9.677 8z" clip-rule="evenodd"/><path fill="${color}" d="M10.25 11.7V9.806l.717.262a3.03 3.03 0 0 0 2.066 0l.717-.262V11.7c0 .105-.057.159-.1.175-.501.185-1.154.375-1.65.375s-1.149-.19-1.65-.375c-.043-.016-.1-.07-.1-.175"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldMapPointSchool };
export default React.memo(BoldMapPointSchool);
