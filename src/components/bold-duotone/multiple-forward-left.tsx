import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneMultipleForwardLeft: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12.475 5.183 7.497 9.608c-.93.827-1.396 1.24-1.567 1.73a2 2 0 0 0 0 1.324c.171.489.637.902 1.567 1.73l4.978 4.424c.422.376.633.563.813.57a.5.5 0 0 0 .404-.182c.114-.138.114-.42.114-.986v-2.79c2.429 0 4.993.78 6.866 2.165.975.72 1.462 1.08 1.648 1.067a.45.45 0 0 0 .39-.24c.096-.16.01-.658-.16-1.653-1.104-6.467-5.554-8.196-8.744-8.196v-2.79c0-.565 0-.847-.114-.986a.5.5 0 0 0-.404-.181c-.18.006-.39.194-.813.57"/><path fill="${color}" fill-rule="evenodd" d="M9.818 3.99a.75.75 0 0 0-1.06-.04L3.54 8.794a4.647 4.647 0 0 0 .15 6.944l5.09 4.333a.75.75 0 1 0 .973-1.142l-5.09-4.333a3.147 3.147 0 0 1-.102-4.703L9.778 5.05a.75.75 0 0 0 .04-1.06" clip-rule="evenodd" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneMultipleForwardLeft };
export default React.memo(BoldDuotoneMultipleForwardLeft);
