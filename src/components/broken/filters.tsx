import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenFilters: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M12 20.283A6 6 0 1 0 17.5 10"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M9 2.803A6 6 0 1 1 6.341 6"/><path fill="${color}" d="M8 22v-.75zm-6-6h-.75zm.153 3.375a.75.75 0 1 0 1.299-.75zm4.097 1.576a.75.75 0 0 0-.5 1.415zm7-4.951c0 2.9-2.35 5.25-5.25 5.25v1.5A6.75 6.75 0 0 0 14.75 16zm-10.5 0a5.25 5.25 0 0 1 3.937-5.085l-.374-1.452A6.75 6.75 0 0 0 1.25 16zm10.156-1.874c.222.58.344 1.212.344 1.874h1.5c0-.848-.157-1.66-.443-2.41zm-9.454 4.498A5.2 5.2 0 0 1 2.75 16h-1.5c0 1.228.329 2.382.903 3.375zM8 21.25a5.2 5.2 0 0 1-1.75-.299l-.5 1.415A6.7 6.7 0 0 0 8 22.75z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenFilters);
