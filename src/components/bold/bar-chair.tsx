import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldBarChair: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M8.755 2.308A4 4 0 0 0 5.46 6.733l.017.14a1 1 0 0 0 .992.879h1.764L5.267 21.595a.75.75 0 0 0 1.467.314l.944-4.407h8.644l.945 4.407a.75.75 0 0 0 1.467-.314L15.766 7.752h1.764a1 1 0 0 0 .993-.88l.017-.139a4 4 0 0 0-3.295-4.425l-.373-.064a17 17 0 0 0-5.745 0zm5.495 5.444h-4.5a1 1 0 0 1-.016.157l-1.735 8.093h8.002l-1.734-8.093a1 1 0 0 1-.017-.157" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldBarChair);
