import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneHighQuality: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity=".5"/><path fill="${color}" d="M6 7.25a.75.75 0 0 1 .75.75v3.25h3.315V8a.75.75 0 0 1 1.5 0v7.62a.75.75 0 0 1-1.5 0v-2.87H6.75v2.87a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 6 7.25"/><path fill="${color}" fill-rule="evenodd" d="M16.111 7.25h-.064c-.385 0-.664 0-.91.038-.972.153-1.879.782-2.124 1.756-.06.24-.06.508-.06.792v3.947c0 .284 0 .552.06.792.245.975 1.152 1.603 2.124 1.756.246.038.525.038.91.038h.128c.385 0 .665 0 .91-.038.28-.044.555-.128.81-.248l.64.505a.75.75 0 0 0 .93-1.176l-.445-.353q.124-.225.189-.484c.06-.24.06-.508.06-.792V9.836c0-.284 0-.552-.06-.792-.245-.974-1.151-1.603-2.124-1.756-.245-.038-.525-.038-.91-.038zm1.428 6.638.227.179c.002-.072.003-.18.003-.353v-3.81c0-.398-.006-.46-.015-.495-.059-.234-.347-.551-.902-.639-.114-.018-.265-.02-.74-.02-.477 0-.628.002-.741.02-.556.088-.844.405-.903.64-.009.034-.014.096-.014.495v3.81c0 .398.005.46.014.495.06.234.347.551.902.639.114.018.265.02.741.02h.323a.75.75 0 0 1 1.105-.981" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneHighQuality };
export default React.memo(BoldDuotoneHighQuality);
