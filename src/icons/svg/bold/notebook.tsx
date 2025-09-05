import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldNotebook: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M2 16.144V4.998c0-1.098.886-1.99 1.982-1.923.977.06 2.131.179 3.018.412 1.05.277 2.296.867 3.282 1.388.307.163.634.275.968.339v15.179a3.4 3.4 0 0 1-.878-.324c-1-.532-2.29-1.15-3.372-1.436-.877-.231-2.016-.35-2.985-.41C2.906 18.153 2 17.255 2 16.143m3.182-7.872a.75.75 0 1 0-.364 1.456l4 1a.75.75 0 0 0 .364-1.456zm0 4a.75.75 0 1 0-.364 1.456l4 1a.75.75 0 0 0 .364-1.456zm7.568 8.122q.456-.1.878-.324c1-.532 2.29-1.15 3.372-1.436.877-.231 2.016-.35 2.985-.41 1.109-.07 2.015-.968 2.015-2.08V4.934c0-1.072-.846-1.953-1.918-1.915-1.129.04-2.535.156-3.582.47-.908.271-1.965.816-2.826 1.315a3.5 3.5 0 0 1-.924.37zm6.432-10.665a.75.75 0 0 0-.364-1.456l-4 1a.75.75 0 1 0 .364 1.456zm0 4a.75.75 0 0 0-.364-1.456l-4 1a.75.75 0 1 0 .364 1.456z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldNotebook);
