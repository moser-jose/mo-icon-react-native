import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneRoundedMagniferZoomIn: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M17.82 19.701c-.09-1.094.816-2.008 1.9-1.918.189.016.414.084.643.154l.067.02.06.018c.21.064.42.127.58.213a1.786 1.786 0 0 1 .637 2.549c-.1.152-.255.308-.41.464l-.045.045-.044.045c-.155.157-.31.313-.46.414a1.754 1.754 0 0 1-2.527-.643c-.086-.161-.148-.373-.211-.585l-.018-.06-.02-.068c-.07-.231-.137-.458-.152-.648" clip-rule="evenodd"/><path fill="${color}" d="M11.157 20.313a9.157 9.157 0 1 0 0-18.313 9.157 9.157 0 0 0 0 18.313" opacity=".5"/><path fill="${color}" fill-rule="evenodd" d="M11.156 8.023c.4 0 .723.324.723.723v1.687h1.687a.723.723 0 1 1 0 1.446h-1.687v1.687a.723.723 0 0 1-1.446 0v-1.687H8.746a.723.723 0 0 1 0-1.446h1.687V8.746c0-.399.324-.723.723-.723" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneRoundedMagniferZoomIn);
