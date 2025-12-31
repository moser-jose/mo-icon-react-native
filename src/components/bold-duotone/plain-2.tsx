import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotonePlain2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M5.796 18.204 21.512 2.488c-.988-.989-2.86-.364-6.606.884l-9.331 3.11c-2.082.694-3.123 1.041-3.439 1.804q-.112.271-.133.564c-.059.824.717 1.6 2.269 3.151l.283.283c.254.254.382.382.478.523.19.28.297.607.31.945.008.171-.019.35-.072.705-.196 1.304-.294 1.956-.179 2.458.114.495.362.938.704 1.289" clip-rule="evenodd"/><path fill="${color}" d="m17.498 18.486 3.13-9.392c1.249-3.745 1.873-5.617.884-6.606L5.796 18.204c.348.356.794.617 1.297.74.5.122 1.153.033 2.46-.144l.07-.01c.37-.05.553-.075.73-.064.321.02.631.124.898.303.147.099.279.23.542.493l.25.251c1.511 1.51 2.266 2.265 3.067 2.226a1.8 1.8 0 0 0 .64-.151c.735-.323 1.072-1.336 1.748-3.362" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotonePlain2);
