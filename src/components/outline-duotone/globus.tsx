import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneGlobus: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 22v-2" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M4 16.562A10.3 10.3 0 0 0 11.687 20C17.383 20 22 15.383 22 9.687 22 6.633 20.672 3.888 18.562 2"/><path stroke="${color}" stroke-width="1.5" d="M7 4.553c.585.552 1.79 2.063 1.931 3.684.131 1.515 1.096 2.746 2.569 2.763.566.006 1.139-.418 1.137-1.005 0-.182-.03-.367-.074-.538a1.14 1.14 0 0 1 .062-.79c.457-.978 1.357-1.241 2.07-1.772.316-.236.604-.484.732-.684.35-.553.702-1.658.526-2.211m-2.662 13c-.22-.414-.527-1.49 0-2.483.659-1.241 2.854-1.241 2.854-1.241 1.692-.018 2.302-.782 2.588-1.462M19 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M10 22h4"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneGlobus);
