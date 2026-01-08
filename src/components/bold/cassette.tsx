import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldCassette: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M10 4h1.25v3.75h-.478c-.687 0-1.141-.001-1.49-.04-.33-.037-.49-.1-.608-.183-.118-.081-.235-.21-.385-.505-.159-.313-.319-.737-.56-1.38L7.125 4.03C7.939 4 8.887 4 10 4m5.75 8.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-9 1.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"/><path fill="${color}" fill-rule="evenodd" d="M3.172 5.172c.578-.579 1.33-.871 2.396-1.02l.77 2.054c.224.595.413 1.1.614 1.495.213.42.471.785.867 1.06.396.274.828.388 1.297.44.441.049.98.049 1.615.049h2.537c.636 0 1.174 0 1.615-.05.47-.051.901-.165 1.297-.44.396-.274.654-.638.868-1.06.2-.395.39-.899.613-1.494l.77-2.054c1.067.149 1.82.441 2.397 1.02C22 6.343 22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828m9.578 8.578a3 3 0 1 1 6 0 3 3 0 0 1-6 0m-4.5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clip-rule="evenodd"/><path fill="${color}" d="M16.875 4.03C16.061 4 15.112 4 14 4h-1.25v3.75h.478c.687 0 1.141-.001 1.49-.04.33-.037.49-.1.608-.183.118-.081.234-.21.384-.505.16-.313.32-.737.56-1.38z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldCassette };
export default React.memo(BoldCassette);
