import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneEndCall: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M8 12.862v.617c0 .852-.577 1.604-1.42 1.85l-2 .587C3.296 16.292 2 15.363 2 14.065v-1.923c0-.49.125-.971.44-1.353m18.93-.933c.446.399.63.976.63 1.563v2.124c0 1.184-1.09 2.09-2.3 1.913l-2-.293c-.977-.143-1.7-.956-1.7-1.913v-.388"/><path fill="${color}" d="M7.25 12.862a.75.75 0 0 0 1.5 0zM12 7v.75zm3.25 5.862a.75.75 0 0 0 1.5 0zM12 11.396v-.75zm-8.982-.129C3.902 10.201 6.513 7.75 12 7.75v-1.5c-6.01 0-9.021 2.714-10.137 4.06zM12 7.75c5.233 0 7.865 1.767 8.87 2.665l1-1.118C20.594 8.157 17.609 6.25 12 6.25zm4 5.112c.75 0 .75-.001.75-.002v-.016l-.004-.067a1.5 1.5 0 0 0-.126-.455 2.06 2.06 0 0 0-.677-.798c-.686-.503-1.873-.878-3.943-.878v1.5c1.93 0 2.743.358 3.057.588.149.11.19.192.198.21q.007.016.001-.002a.3.3 0 0 1-.006-.065v-.013c0-.001 0-.002.75-.002m-4-2.216c-2.07 0-3.257.375-3.943.878-.351.257-.56.54-.677.798a1.5 1.5 0 0 0-.126.455l-.004.076v.007s0 .002.75.002.75 0 .75.002v.006l-.006.072q-.005.018.001.001a.6.6 0 0 1 .198-.209c.314-.23 1.127-.588 3.057-.588z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneEndCall);
