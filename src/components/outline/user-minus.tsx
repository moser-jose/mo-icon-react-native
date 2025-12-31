import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineUserMinus: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M12 1.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5M8.75 6a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0" clip-rule="evenodd"/><path fill="${color}" d="M17 15.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"/><path fill="${color}" fill-rule="evenodd" d="M12 12.25c.969 0 1.902.092 2.775.263a4.75 4.75 0 1 1 5.596 7.604c-.374.81-1.072 1.453-2.251 1.892-1.31.487-3.252.741-6.12.741-2.026 0-3.58-.127-4.774-.369-1.19-.24-2.07-.605-2.7-1.117-1.279-1.042-1.277-2.5-1.276-3.662V17.5c0-1.634 1.17-2.96 2.725-3.836 1.58-.888 3.711-1.414 6.025-1.414M4.75 17.5c0-.851.621-1.775 1.96-2.528 1.317-.74 3.185-1.222 5.29-1.222q.911.001 1.756.115A4.75 4.75 0 0 0 17.31 20.7c-1.07.337-2.733.55-5.311.55-1.974 0-3.42-.125-4.476-.339-1.06-.214-1.68-.509-2.05-.81-.684-.557-.724-1.293-.724-2.601M18 12.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineUserMinus);
