import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneStretchingRound: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M17 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/><path fill="${color}" fill-rule="evenodd" d="M15.507 14.464c2.217-.357 4.243 1.34 4.243 3.585v3.947a.75.75 0 0 1-1.5 0v-3.947c0-1.307-1.184-2.317-2.504-2.104a.75.75 0 0 1-.239-1.481" clip-rule="evenodd"/><path fill="${color}" d="M13.363 10.347c.475.748.732 1.765.732 3.089 0 5.082-3.961 9.315-9.095 9.315a.75.75 0 0 1 0-1.5c4.255 0 7.595-3.51 7.595-7.816 0-1.143-.224-1.851-.498-2.284a1.6 1.6 0 0 0-.981-.728c-.39-.104-.83-.087-1.237.003-.416.09-.727.24-.852.33-.32.226-.646.654-.781 1.102-.128.424-.065.76.198 1.015l.025.024a.75.75 0 1 1-1.042 1.078l-.025-.024c-.778-.752-.833-1.729-.593-2.527a3.73 3.73 0 0 1 1.35-1.892c.329-.233.839-.449 1.399-.572.568-.124 1.26-.169 1.944.014.703.187 1.377.61 1.861 1.373" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneStretchingRound };
export default React.memo(BoldDuotoneStretchingRound);
