import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenBagMusic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M9 6V5a3 3 0 1 1 6 0v1"/><path stroke="${color}" stroke-width="1.5" d="M12 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 0v-5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m14.058 9.97-1.316.66h0a2.3 2.3 0 0 0-.35.194 1 1 0 0 0-.374.606c-.018.093-.018.195-.018.4 0 .485 0 .727.06.893a1 1 0 0 0 1.056.652c.174-.02.391-.129.826-.346l1.316-.658a2 2 0 0 0 .35-.195 1 1 0 0 0 .374-.606c.018-.093.018-.195.018-.4 0-.485 0-.727-.06-.893a1 1 0 0 0-1.056-.652c-.174.02-.391.129-.826.346Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20.224 12.526c-.586-3.121-.878-4.682-1.99-5.604C17.125 6 15.537 6 12.36 6h-.72c-3.176 0-4.764 0-5.875.922s-1.403 2.483-1.989 5.604c-.823 4.389-1.234 6.583-.034 8.029S7.174 22 11.639 22h.722c4.465 0 6.698 0 7.897-1.445.696-.84.85-1.93.696-3.555"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenBagMusic);
