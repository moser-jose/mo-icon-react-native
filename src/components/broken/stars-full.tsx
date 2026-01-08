import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenStarsFull: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M5.367 10.242C4.29 8.422 3.752 7.512 4.11 6.788c.36-.724 1.379-.783 3.418-.9l.527-.03c.58-.034.869-.05 1.122-.185.252-.135.439-.372.813-.848l.34-.432c1.316-1.673 1.974-2.509 2.73-2.38s1.11 1.137 1.817 3.154M5.805 13.51c-.553 2.09-.83 3.134-.295 3.71s1.524.303 3.505-.245l.976-.474m7.057-8.99c1.89.786 2.835 1.18 2.942 1.983.092.686-.477 1.283-1.64 2.29"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M16.239 19.57c1.485.386 2.228.58 2.629.173s.193-1.144-.221-2.62l-.108-.38c-.117-.42-.176-.63-.147-.837.03-.208.145-.39.374-.756l.21-.332c.807-1.285 1.21-1.927.94-2.438-.269-.511-1.033-.553-2.562-.635l-.396-.022c-.434-.023-.652-.035-.841-.13-.19-.095-.33-.263-.61-.599l-.255-.305c-.987-1.18-1.48-1.77-2.048-1.68-.567.091-.832.803-1.362 2.227l-.138.368c-.15.405-.226.607-.373.756-.146.149-.348.228-.75.386l-.367.143c-1.417.555-2.126.833-2.207 1.4s.52 1.049 1.721 2.011l.31.25c.342.273.513.41.611.597.1.187.115.404.146.837l.029.394c.11 1.523.166 2.285.683 2.545s1.154-.155 2.427-.983"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenStarsFull };
export default React.memo(BrokenStarsFull);
