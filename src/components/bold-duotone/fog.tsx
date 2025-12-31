import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneFog: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M8 21.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"/><path fill="${color}" d="M12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765c0 .522.096 1.023.271 1.485h18.92A5.57 5.57 0 0 0 22 12.353c0-2.472-1.607-4.573-3.845-5.338C17.837 4.194 15.415 2 12.476 2" opacity=".5"/><path fill="${color}" d="M2 15.248a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5z"/><path fill="${color}" d="M5 18.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneFog);
