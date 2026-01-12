import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneClapperboardEdit: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 2c1.845 0 3.33 0 4.54.088L13.1 7.25H8.4L11.9 2zM3.465 3.464c1.252-1.252 3.157-1.433 6.63-1.46L6.6 7.25H2.104c.147-1.764.503-2.928 1.36-3.786M21.896 7.25c-.147-1.764-.503-2.928-1.36-3.786-.598-.597-1.344-.95-2.337-1.16L14.9 7.25z"/><path fill="${color}" fill-rule="evenodd" d="M17.5 22c-2.121 0-3.182 0-3.841-.659S13 19.621 13 17.5s0-3.182.659-3.841S15.379 13 17.5 13s3.182 0 3.841.659S22 15.379 22 17.5s0 3.182-.659 3.841S19.621 22 17.5 22m2.212-6.712a.983.983 0 0 1 0 1.39l-.058.058a.24.24 0 0 1-.211.067 1.6 1.6 0 0 1-.81-.436 1.6 1.6 0 0 1-.436-.81.24.24 0 0 1 .067-.211l.058-.058a.983.983 0 0 1 1.39 0M17.35 19.04a3 3 0 0 1-.296.279 1.6 1.6 0 0 1-.303.187 3 3 0 0 1-.381.14l-1.021.34a.265.265 0 0 1-.335-.335l.34-1.02c.064-.194.097-.291.14-.382q.077-.163.187-.303c.062-.08.134-.152.279-.296l1.799-1.799c.043-.043.118-.023.138.035a1.98 1.98 0 0 0 1.217 1.217c.058.02.078.095.035.138z" clip-rule="evenodd"/><path fill="${color}" d="M2.026 8.75C2 9.689 2 10.763 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c1.358 0 2.52 0 3.522-.035-.884-.058-1.452-.213-1.863-.624C13 20.682 13 19.621 13 17.5s0-3.182.659-3.841S15.379 13 17.5 13s3.182 0 3.841.659c.411.411.566.979.624 1.863C22 14.52 22 13.358 22 12c0-1.237 0-2.311-.026-3.25z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneClapperboardEdit };
export default React.memo(BoldDuotoneClapperboardEdit);
