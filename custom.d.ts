declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.png' {
  const value: string;
  export default value;
}
declare module '*.gif' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}
declare module '*.mp4' {
  const value: string;
  export default value;
}

declare module 'ejs';
declare module '@/emails/merchant';
declare module 'lottie-react';
declare module '@azure/communication-email';
declare module '@/lib/azureMailConnection';
