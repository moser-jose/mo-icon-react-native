import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenBug: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M14 21.71A7 7 0 0 1 5 15v-3.062A3.94 3.94 0 0 1 8.938 8h6.124A3.94 3.94 0 0 1 19 11.938V15a6.98 6.98 0 0 1-2 4.899"/><path fill="${color}" d="M8.25 7.5a.75.75 0 0 0-1.5 0zm-.615-2.917a.75.75 0 1 0 1.246.834zM17.25 8.5v-1h-1.5v1zm-10.5-1v1h1.5v-1zm10.5 0c0-2.9-2.35-5.25-5.25-5.25v1.5a3.75 3.75 0 0 1 3.75 3.75zM12 2.25a5.25 5.25 0 0 0-4.365 2.333l1.246.834A3.75 3.75 0 0 1 12 3.75z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M19 14h3M5 14H2M14.5 3.5 17 2M9.5 3.5 7 2m13.5 18-2-.8m2-11.2-2 .8M3.5 20l2-.8M3.5 8l2 .8M12 21.5V15"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenBug };
export default React.memo(BrokenBug);
