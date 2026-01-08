import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldTrophyMusic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M11.316 11.267a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path fill="${color}" fill-rule="evenodd" d="M12 2c1.784 0 3.253.157 4.377.347 1.139.192 1.708.288 2.184.874s.45 1.219.4 2.485c-.172 4.349-1.11 9.78-6.211 10.26V19.5h1.43a1 1 0 0 1 .98.804l.19.946H18a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h2.65l.19-.946a1 1 0 0 1 .98-.804h1.43v-3.534c-5.1-.48-6.038-5.912-6.21-10.26-.051-1.266-.076-1.9.4-2.485.475-.586 1.044-.682 2.183-.874A26.4 26.4 0 0 1 12 2m1.5 2.75a.75.75 0 0 0-1.5 0v3.378a2.25 2.25 0 1 0 1.5 2.122V7.2c.375.192.8.3 1.25.3a.75.75 0 0 0 0-1.5c-.69 0-1.25-.56-1.25-1.25" clip-rule="evenodd"/><path fill="${color}" d="M2 8.162v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98l.794.44c-.547-1.848-.73-3.834-.797-5.532l-.01-.221-.001-.052c-.652.226-1.018.395-1.246.711C2 6.597 2 7.12 2 8.162m20 0v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98l-.793.44c.546-1.848.729-3.834.796-5.532l.01-.221.002-.052c.651.226 1.017.395 1.245.711.283.393.283.915.283 1.958"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldTrophyMusic };
export default React.memo(BoldTrophyMusic);
