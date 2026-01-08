import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineTrashBinMinimalistic2: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M9.878 4.25a2.251 2.251 0 0 1 4.244 0 .75.75 0 1 0 1.414-.5 3.751 3.751 0 0 0-7.072 0 .75.75 0 1 0 1.414.5M2.75 6a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5h-17A.75.75 0 0 1 2.75 6m2.367 1.752a.75.75 0 0 1 .798.698l.46 6.9c.09 1.347.154 2.285.294 2.99.137.685.327 1.047.6 1.303.274.256.648.422 1.34.512.713.093 1.653.095 3.004.095h.774c1.35 0 2.29-.002 3.004-.095.692-.09 1.066-.256 1.34-.512.273-.256.463-.618.6-1.303.14-.705.204-1.643.294-2.99l.46-6.9a.75.75 0 1 1 1.497.1l-.464 6.952c-.085 1.282-.154 2.318-.316 3.132-.169.845-.455 1.551-1.047 2.104s-1.315.793-2.17.904c-.822.108-1.86.108-3.146.108h-.878c-1.286 0-2.324 0-3.146-.108-.855-.111-1.579-.35-2.17-.904-.592-.553-.878-1.26-1.047-2.104-.162-.814-.23-1.85-.316-3.132L4.418 8.55a.75.75 0 0 1 .699-.798"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineTrashBinMinimalistic2 };
export default React.memo(OutlineTrashBinMinimalistic2);
