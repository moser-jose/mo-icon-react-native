import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotonePaperBin: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M3.034 8.89c-.48-3.204-.721-4.805.176-5.848C4.108 2 5.728 2 8.967 2h6.066c3.24 0 4.86 0 5.757 1.042s.657 2.644.177 5.848l-1.2 8c-.366 2.438-.549 3.656-1.393 4.383S16.298 22 13.833 22h-3.666c-2.465 0-3.697 0-4.541-.727s-1.027-1.945-1.392-4.383z" opacity=".5"/><path fill="${color}" fill-rule="evenodd" d="m3.517 12.115-.29-1.933 1.845-2.05L3.689 6.75h-.96a15 15 0 0 1-.122-1.5h18.787c-.01.437-.054.933-.123 1.5h-.96l-1.383 1.382 1.845 2.05-.29 1.933-1.6 1.707 1.169 1.169-.277 1.845-1.919-1.92-1.877 2.003 1.332 1.331h2.245c-.098.59-.195 1.083-.314 1.5H4.758c-.119-.417-.216-.91-.314-1.5H6.69l1.332-1.331-1.877-2.002-1.918 1.918-.277-1.844 1.169-1.17zm2.56-5.099L5.81 6.75h.505zm1.062 1.062L8.334 6.75H9.69L10.94 8 9 9.94zM12 6.94l-.19-.189h.38zM13.06 8l1.25-1.25h1.356l1.195 1.328-1.86 1.861zm4.864-.984-.24-.266h.505zM16.06 11l1.805-1.805 1.616 1.795-1.66 1.77zM15 12.06l1.794 1.795-1.877 2.002L13.061 14zm-3 3 1.89 1.892-1.216 1.298h-1.35l-1.217-1.298zm3.188 3.19h-.458l.222-.236zm-6.142-.236.222.236H8.81zM10.94 14l-1.857 1.857-1.877-2.001L9 12.06zm-3-3-1.76 1.76-1.66-1.77 1.615-1.795zM12 12.94 10.06 11 12 9.06 13.94 11z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotonePaperBin };
export default React.memo(BoldDuotonePaperBin);
