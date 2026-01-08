import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenRouting3: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="5" cy="5" r="3" stroke="${color}" stroke-width="1.5"/><circle cx="19" cy="19" r="3" stroke="${color}" stroke-width="1.5"/><path fill="${color}" d="M11 4.25a.75.75 0 0 0 0 1.5zM13 19l.53.53a.75.75 0 0 0 0-1.06zm4.206-10.313.402.633zM6.794 15.313l.403.632zm5.236 1.657a.75.75 0 0 0-1.06 1.06zm-1.06 3a.75.75 0 0 0 1.06 1.06zm-.567-6.064a.75.75 0 0 0-.806-1.266zm2.797-3.559a.75.75 0 0 0 .806 1.266zm2.932-6.097H11v1.5h5.132zM13 18.25H7.868v1.5H13zm.53.22-1.5-1.5-1.06 1.06 1.5 1.5zm-1.06 0-1.5 1.5 1.06 1.06 1.5-1.5zm-4.602-.22c-1.25 0-1.726-1.633-.671-2.305l-.805-1.265c-2.321 1.477-1.275 5.07 1.476 5.07zm8.264-12.5c1.25 0 1.726 1.633.671 2.305l.805 1.265c2.321-1.477 1.275-5.07-1.476-5.07zm-6.535 6.89-3.205 2.04.805 1.265 3.206-2.04zm7.206-4.585L13.2 10.347l.806 1.266 3.602-2.293z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenRouting3 };
export default React.memo(BrokenRouting3);
