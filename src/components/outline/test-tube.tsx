import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineTestTube: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M9.294 1.354a.75.75 0 0 0-.763 1.292l.196.116L2.002 14.37a5.577 5.577 0 0 0 2.051 7.632 5.61 5.61 0 0 0 7.652-2.045l6.728-11.614.193.11a.75.75 0 0 0 .748-1.3l-.84-.483-8.408-4.824zM3.3 15.122l6.723-11.606 7.11 4.08-1.505 2.597-1.91-1.098a.75.75 0 1 0-.748 1.3l1.906 1.096-.961 1.66-3.555-2.045a.75.75 0 1 0-.748 1.3l3.55 2.043-.885 1.528-1.965-1.13a.75.75 0 0 0-.748 1.3l1.961 1.128-1.118 1.93A4.11 4.11 0 0 1 4.8 20.701a4.077 4.077 0 0 1-1.501-5.58m17.876-3.019a1.61 1.61 0 0 0-2.35 0 9 9 0 0 0-.986 1.214c-.285.43-.589 1.008-.589 1.6 0 1.536 1.203 2.834 2.75 2.834s2.75-1.298 2.75-2.833c0-.593-.304-1.17-.589-1.601a9 9 0 0 0-.986-1.214m-1.262 1.031c.03-.03.06-.04.087-.04s.057.01.087.04c.278.294.587.653.822 1.01.254.383.341.646.341.774 0 .765-.588 1.333-1.25 1.333s-1.25-.568-1.25-1.333c0-.128.087-.39.34-.775a8 8 0 0 1 .823-1.009" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineTestTube);
