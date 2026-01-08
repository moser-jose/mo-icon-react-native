import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineLinkBrokenMinimalistic: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M6.3 2.307a.75.75 0 0 1 .98.406l.913 2.206a.75.75 0 0 1-1.386.573l-.913-2.205a.75.75 0 0 1 .407-.98m13.387 1.851c-2.72-2.544-7.112-2.544-9.833 0l-.367.343a.75.75 0 0 0 1.024 1.096l.367-.343c2.144-2.005 5.64-2.005 7.784 0 2.116 1.977 2.116 5.162 0 7.14l-2.202 2.058a.75.75 0 0 0 1.025 1.096l2.202-2.059c2.75-2.57 2.75-6.76 0-9.331M6.172 10.535a.75.75 0 1 0-1.052-1.07l-.905.89c-2.672 2.628-2.6 6.854.099 9.435 2.707 2.59 7.122 2.628 9.839.03l.365-.35a.75.75 0 0 0-1.036-1.084l-.366.35c-2.127 2.034-5.629 2.014-7.766-.03-2.097-2.006-2.14-5.258-.083-7.281zM3.831 5.413a.75.75 0 0 0-.658 1.348l5.548 2.708A.75.75 0 1 0 9.38 8.12z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineLinkBrokenMinimalistic };
export default React.memo(OutlineLinkBrokenMinimalistic);
