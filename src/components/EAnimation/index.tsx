import React, { FC, ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

const noAnimation = keyframes`
  100% {
    transform: translateX(0);
    opacity: 1
  }
`;

const rightToLeft = keyframes`
  0% {
    transform: translateX(50%);
  }
  80% {
    transform: translateX(-2%)
  }
  100% {
    transform: translateX(0);
    opacity: 1
  }
`;

const rlefTotight = keyframes`
  0% {
    transform: translateX(-50%);
  }
  80% {
    transform: translateX(2%)
  }
  100% {
    transform: translateX(0);
    opacity: 1
  }
`;

const bottomToTop = keyframes`
  0% {
    transform: translateY(50%);
  }

  80% {
    transform: translateY(-10%);
  }

  100% {
    transform: translateY(0);
    opacity: 1
  }
`;

export interface EAnimationProps {
  /**
   * 渲染顺序
   */
  index?: number;
  /**
   * 子组件，可以忽略这个属性
   */
  children?: ReactNode;
  /**
   * 动画持续时间
   * @default 300ms
   */
  duration?: number;
  /**
   * 动画延时执行时间
   * @default 130ms
   */
  delay?: number;
  /**
   * 动画的方向
   * @default BT
   */
  direction?: 'BT' | 'RL' | 'LR';
  /**
   * 是否开启动画
   * @default true
   */
  animation?: boolean;
}

export const RightToLeft = styled.div<EAnimationProps>`
  transform: ${(props) =>
    props.animation === false ? `translateX(0%)` : `translateX(50%)`};
  opacity: 0;
  animation: ${(props) =>
      props.animation === false ? noAnimation : rightToLeft}
    ${(props) => props.duration ?? 300}ms;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-delay: ${(props) => (props.index ?? 0) * (props.delay ?? 130)}ms;
`;

export const LeftToRight = styled.div<EAnimationProps>`
  transform: ${(props) =>
    props.animation === false ? `translateX(0)` : `translateX(-100%)`};
  opacity: 0;
  animation: ${(props) =>
      props.animation === false ? noAnimation : rlefTotight}
    ${(props) => props.duration ?? 300}ms;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-delay: ${(props) => (props.index ?? 0) * (props.delay ?? 130)}ms;
`;
export const BottomToTop = styled.div<EAnimationProps>`
  transform: ${(props) =>
    props.animation === false ? `translateY(0)` : `translateY(50%)`};
  opacity: 0;
  animation: ${(props) =>
      props.animation === false ? noAnimation : bottomToTop}
    ${(props) => props.duration ?? 300}ms;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-delay: ${(props) => (props.index ?? 0) * (props.delay ?? 130)}ms;
`;

export const EAnimation: FC<EAnimationProps> = ({
  direction = 'BT',
  animation = true,
  ...eAnimationProps
}) => {
  const Animation: { [key in string]: JSX.Element } = {
    BT: <BottomToTop animation={animation} {...eAnimationProps} />,
    RL: <RightToLeft animation={animation} {...eAnimationProps} />,
    LR: <LeftToRight animation={animation} {...eAnimationProps} />,
  };

  return Animation[direction];
};

export default EAnimation;
