import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneLaptop: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M4.939 3.586c-.586.586-.586 1.528-.586 3.414v7h15.294V7c0-1.886 0-2.828-.586-3.414C18.476 3 17.533 3 15.647 3H8.353c-1.886 0-2.828 0-3.414.586" opacity=".5"/><path fill="${color}" fill-rule="evenodd" d="m21.391 16.336.088.092a2 2 0 0 1 .52 1.284l.001.127c0 .15 0 .224-.004.287a2 2 0 0 1-1.87 1.87 5 5 0 0 1-.287.004H4.161c-.15 0-.224 0-.287-.004a2 2 0 0 1-1.87-1.87C2 18.063 2 17.988 2 17.84l.001-.127a2 2 0 0 1 .52-1.284l.088-.092L3.903 15h16.194zM8.75 18a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/><path fill="${color}" d="M12.75 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneLaptop);
