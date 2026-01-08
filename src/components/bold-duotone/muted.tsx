import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneMuted: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M17 16c-1.886 0-2.828 0-3.414-.586S13 13.886 13 12s0-2.828.586-3.414S15.114 8 17 8s2.828 0 3.414.586S21 10.114 21 12s0 2.828-.586 3.414S18.886 16 17 16m-1.306-6.25a.667.667 0 0 0-.943.944L16.057 12l-1.306 1.306a.667.667 0 0 0 .943.943L17 12.943l1.306 1.306a.667.667 0 0 0 .943-.943L17.943 12l1.306-1.306a.667.667 0 0 0-.943-.943L17 11.057z" clip-rule="evenodd"/><path fill="${color}" d="M3.003 11.716c.038-1.843.057-2.764.678-3.552.113-.144.28-.315.42-.431.763-.636 1.771-.636 3.788-.636.72 0 1.081 0 1.425-.092a3 3 0 0 0 .211-.067c.336-.121.637-.33 1.238-.746 2.374-1.645 3.56-2.467 4.557-2.11.191.069.376.168.541.29.708.522.878 1.614.989 3.628-1.786 0-2.694.016-3.264.586C13 9.172 13 10.114 13 12s0 2.828.586 3.414c.57.57 1.478.586 3.264.586-.111 2.014-.281 3.106-.989 3.628a2.2 2.2 0 0 1-.54.29c-.997.357-2.184-.465-4.558-2.11-.601-.416-.902-.625-1.238-.746a3 3 0 0 0-.211-.067c-.344-.092-.704-.092-1.425-.092-2.017 0-3.025 0-3.789-.636a3 3 0 0 1-.419-.43c-.621-.79-.64-1.71-.678-3.552a14 14 0 0 1 0-.57" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneMuted };
export default React.memo(BoldDuotoneMuted);
