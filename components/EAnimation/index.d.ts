import { FC, ReactNode } from "react";
export interface EAnimationProps {
    index?: number;
    children?: ReactNode;
    duration?: number;
    delay?: number;
    direction?: 'BT' | 'RL' | 'LR';
}
export declare const RightToLeft: import("styled-components").StyledComponent<"div", any, EAnimationProps, never>;
export declare const LeftToRight: import("styled-components").StyledComponent<"div", any, EAnimationProps, never>;
export declare const BottomToTop: import("styled-components").StyledComponent<"div", any, EAnimationProps, never>;
export declare const EAnimation: FC<EAnimationProps>;
export default EAnimation;
