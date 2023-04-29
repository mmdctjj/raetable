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

export interface EAnimationProps {index?: number, duration?: number, delay?: number}

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

export default {
  BottomToTop,
  RightToLeft,
  LeftToRight
}