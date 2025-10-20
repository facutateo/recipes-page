declare module '*.svg?react' {
    import * as React from 'react';
    const svgComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export default svgComponent;
}