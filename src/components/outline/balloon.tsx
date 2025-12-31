import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineBalloon: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12.506 5.25a.75.75 0 0 0-.012 1.5 2.285 2.285 0 0 1 2.256 2.256.75.75 0 0 0 1.5-.012 3.785 3.785 0 0 0-3.744-3.744"/><path fill="${color}" fill-rule="evenodd" d="M3.81 9.685c-.036-4.671 3.612-8.473 8.196-8.435 4.573.038 8.268 3.885 8.304 8.548.03 3.908-2.625 7.634-6.245 8.67q.064.128.102.247c.332 1.062-.356 2.131-1.417 2.347V22.5a.75.75 0 0 1-1.5 0v-1.438c-1.06-.216-1.75-1.285-1.417-2.347q.043-.133.116-.277c-3.592-1.09-6.108-4.871-6.138-8.753m8.184-6.935c-3.7-.03-6.714 3.044-6.683 6.923.03 3.969 3.058 7.547 6.695 7.577 3.655.03 6.835-3.511 6.804-7.44-.03-3.888-3.105-7.029-6.816-7.06m0 16q.259.002.514-.014l.026.052.165.3.037.077c.05.168-.05.38-.286.427 0 0-.023.004-.096.006L12 19.6c-.165 0-.273 0-.354-.002-.073-.002-.096-.006-.096-.006-.237-.047-.336-.26-.286-.427.002-.005.01-.026.037-.077.036-.069.086-.16.165-.3l.03-.06q.246.02.498.022" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineBalloon);
