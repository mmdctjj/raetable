import React, { FC, ReactNode } from "react";
import styled, { keyframes } from "styled-components";

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
`

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
`

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
`

export interface EAnimationProps {
  index?: number
  children?: ReactNode
  duration?: number
  delay?: number
  direction?: 'BT' | 'RL' | 'LR'
}

export const RightToLeft = styled.div<EAnimationProps>`
  transform: translateX(50%);
  opacity: 0;
  animation: ${rightToLeft} ${props => props.duration ?? 300}ms;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-delay: ${props => (props.index ?? 0) * (props.delay ?? 130)}ms
`

export const LeftToRight = styled.div<EAnimationProps>`
  transform: translateX(-100%);
  opacity: 0;
  animation: ${rlefTotight} ${props => props.duration ?? 300}ms;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-delay: ${props => (props.index ?? 0) * (props.delay ?? 130)}ms;
`
export const BottomToTop = styled.div<EAnimationProps>`
  transform: translateY(50%);
  opacity: 0;
  animation: ${bottomToTop} ${props => props.duration ?? 300}ms;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-delay: ${props => (props.index ?? 0) * (props.delay ?? 130)}ms
`

export const EAnimation: FC<EAnimationProps> = ({direction = 'BT', ...eAnimationProps}) => {

  const Animation: {[key in string]: JSX.Element} = {
    'BT': <BottomToTop {...eAnimationProps} />,
    'RL': <RightToLeft {...eAnimationProps} />,
    'LR': <LeftToRight {...eAnimationProps} />
  }

  return Animation[direction]
}

export default EAnimation