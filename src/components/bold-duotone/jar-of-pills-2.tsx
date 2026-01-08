import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneJarOfPills2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M6 3.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C6.801 2 7.034 2 7.5 2h9c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54C17.199 5 16.966 5 16.5 5h-9c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C6 4.199 6 3.966 6 3.5" opacity=".5"/><path fill="${color}" fill-rule="evenodd" d="M12 11.25a.75.75 0 0 1 .75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V16a.75.75 0 0 1-1.5 0v-1.25H10a.75.75 0 0 1 0-1.5h1.25V12a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/><path fill="${color}" d="m15.878 15.667-2.21 2.211c-.917.916-.886 2.432.068 3.386s2.47.985 3.386.069l2.21-2.211c.917-.916.886-2.432-.068-3.386s-2.47-.985-3.386-.069" opacity=".5"/><path fill="${color}" d="M9 5 5.501 7.799A4 4 0 0 0 4.108 10h15.788a4 4 0 0 0-1.379-2.2L16.16 5.89 15.018 5zM4.927 20.113A4 4 0 0 1 4.025 18h7.78c-.56 1.31-.336 2.86.58 4H8.957c-.571 0-.857 0-1.127-.037a4 4 0 0 1-2.152-1.008c-.202-.184-.385-.404-.75-.842"/><path fill="${color}" d="M4 17.552v-6.63q0-.471.108-.922h15.787q.105.444.105.908v3.476c-1.511-1.215-3.747-1.213-5.182.222l-2.211 2.211c-.354.354-.62.756-.803 1.183H4.025A4 4 0 0 1 4 17.552" opacity=".5"/><path fill="${color}" d="M18.82 19.634a5 5 0 0 0-.168-.378 6.5 6.5 0 0 0-1.231-1.677 6.5 6.5 0 0 0-1.678-1.232 5 5 0 0 0-.377-.168l-1.226 1.226.47.1.01.002.085.026c.08.028.208.076.37.157.323.16.785.449 1.285.95s.789.962.95 1.284a3 3 0 0 1 .182.455l.003.01.1.47z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneJarOfPills2 };
export default React.memo(BoldDuotoneJarOfPills2);
