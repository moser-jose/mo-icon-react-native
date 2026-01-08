import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenBicycling: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="15" cy="4" r="2" stroke="${color}" stroke-width="1.5"/><circle cx="6" cy="18" r="3" stroke="${color}" stroke-width="1.5"/><circle cx="18" cy="18" r="3" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M18.5 10h-2.026c-1.22 0-1.831 0-2.38-.227-.55-.227-.983-.657-1.85-1.518l-.576-.574c-.785-.78-1.178-1.17-1.642-1.127-.465.042-.78.497-1.411 1.406M12 18l.057-.359c.235-1.47.352-2.204.024-2.804s-1.01-.898-2.374-1.493L8.23 12.7c-1.032-.45-1.549-.675-1.678-1.13-.05-.18-.031-.36.05-.57"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenBicycling };
export default React.memo(BrokenBicycling);
