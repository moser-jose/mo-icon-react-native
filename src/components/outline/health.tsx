import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineHealth: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M17.25 7a.75.75 0 0 0-1.5 0v1.25H14.5a.75.75 0 0 0 0 1.5h1.25V11a.75.75 0 0 0 1.5 0V9.75h1.25a.75.75 0 0 0 0-1.5h-1.25z"/><path fill="${color}" fill-rule="evenodd" d="M22.75 9.317c0-3.325-1.482-5.808-3.79-6.71-2.135-.837-4.698-.211-6.96 1.906C9.738 2.396 7.175 1.77 5.04 2.606c-2.308.903-3.79 3.386-3.79 6.711 0 2.118 1.13 4.202 2.537 5.997 1.422 1.812 3.21 3.436 4.702 4.647l.134.109c1.2.975 2.068 1.68 3.377 1.68 1.31 0 2.176-.705 3.377-1.68l.134-.11c1.492-1.21 3.28-2.834 4.702-4.646 1.407-1.795 2.537-3.879 2.537-5.997M12.548 6.086c2.112-2.259 4.301-2.696 5.866-2.083 1.568.614 2.836 2.41 2.836 5.314 0 1.612-.88 3.364-2.218 5.071-1.324 1.689-3.016 3.231-4.466 4.408-1.393 1.13-1.843 1.454-2.566 1.454s-1.173-.324-2.566-1.454c-1.45-1.177-3.142-2.72-4.466-4.408-1.339-1.707-2.218-3.46-2.218-5.07 0-2.905 1.268-4.701 2.836-5.315 1.565-.613 3.754-.176 5.866 2.083a.75.75 0 0 0 1.096 0" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineHealth);
