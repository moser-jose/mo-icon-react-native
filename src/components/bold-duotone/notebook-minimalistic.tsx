import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneNotebookMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M2 16.144V4.998c0-1.098.886-1.99 1.982-1.923.977.06 2.131.178 3.018.412 1.05.277 2.296.867 3.282 1.388a3.5 3.5 0 0 0 1.718.4v15.2a3.46 3.46 0 0 1-1.628-.406c-1-.533-2.29-1.15-3.372-1.436-.877-.231-2.016-.35-2.985-.41C2.906 18.153 2 17.255 2 16.143" clip-rule="evenodd" opacity=".5"/><path fill="${color}" d="M22 16.144V4.934c0-1.073-.846-1.954-1.918-1.916-1.129.04-2.535.156-3.582.47-.908.271-1.965.816-2.826 1.315A3.5 3.5 0 0 1 12 5.274v15.2a3.46 3.46 0 0 0 1.628-.405c1-.532 2.29-1.15 3.372-1.436.877-.231 2.016-.35 2.985-.41 1.109-.07 2.015-.968 2.015-2.08"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneNotebookMinimalistic };
export default React.memo(BoldDuotoneNotebookMinimalistic);
