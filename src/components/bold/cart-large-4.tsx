import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldCartLarge4: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M3.04 2.293a.75.75 0 1 0-.497 1.415l.261.092c.668.234 1.107.39 1.43.548.303.149.436.27.524.398.09.132.16.314.2.677.04.38.042.876.042 1.616V9.64c0 2.942.063 3.913.93 4.826.866.914 2.26.914 5.05.914h5.302c1.561 0 2.342 0 2.893-.45.552-.449.71-1.213 1.025-2.742l.5-2.425c.347-1.74.52-2.609.076-3.186S18.816 6 17.131 6H6.492a9 9 0 0 0-.043-.738c-.054-.497-.17-.95-.452-1.362-.284-.416-.662-.682-1.103-.898-.412-.203-.936-.387-1.552-.603zm7.2 6.582a.75.75 0 0 0-1.48.25l.529 3.118a.75.75 0 0 0 1.479-.25zm5.414-.614a.75.75 0 0 0-.865.614l-.528 3.118a.75.75 0 0 0 1.479.25l.528-3.117a.75.75 0 0 0-.614-.865M7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldCartLarge4 };
export default React.memo(BoldCartLarge4);
