import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneNotebookBookmark: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M14.25 4.48v3.057c0 .111 0 .27.021.406a.94.94 0 0 0 .444.683.96.96 0 0 0 .783.072c.13-.04.272-.108.378-.159L17 8.005l1.124.534c.106.05.249.119.379.16a.96.96 0 0 0 .782-.073.94.94 0 0 0 .444-.683c.022-.136.021-.295.021-.406V3.031q.17-.008.332-.013C21.154 2.98 22 3.86 22 4.933v11.21c0 1.112-.906 2.01-2.015 2.08-.97.06-2.108.179-2.985.41-1.081.286-1.99 1.068-3.372 1.436-.626.167-1.325.257-1.628.323V5.174c.321-.079 1.383-.203 1.674-.371q.277-.162.576-.323m5.478 8.338a.75.75 0 0 1-.546.91l-4 1a.75.75 0 0 1-.364-1.456l4-1a.75.75 0 0 1 .91.546" clip-rule="evenodd"/><path fill="${color}" d="M18.25 3.151c-.62.073-1.23.18-1.75.336a8 8 0 0 0-.75.27v3.182l.75-.356.008-.005a1.1 1.1 0 0 1 .492-.13q.072 0 .138.01c.175.029.315.1.354.12l.009.005.75.356V3.15"/><path fill="${color}" d="M12 5.214c-.334-.064-1.057-.161-1.718-.339C8.938 4.515 8.05 3.765 7 3.487c-.887-.234-2.041-.352-3.018-.412C2.886 3.007 2 3.9 2 4.998v11.146c0 1.11.906 2.01 2.015 2.079.97.06 2.108.179 2.985.41.486.129 1.216.431 1.873.726 1.005.451 2.052.797 3.127 1.034z" opacity=".5"/><path fill="${color}" d="M4.273 12.818a.75.75 0 0 1 .91-.545l4 1a.75.75 0 1 1-.365 1.455l-4-1a.75.75 0 0 1-.545-.91m.909-4.545a.75.75 0 1 0-.364 1.455l4 1a.75.75 0 0 0 .364-1.455z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneNotebookBookmark };
export default React.memo(BoldDuotoneNotebookBookmark);
