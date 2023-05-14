import styled from "styled-components";

export const SkeletonOuter = styled.div`
    position: relative;
    overflow: hidden;
    background-color: rgb(229 231 235);
    margin-bottom: 0.625rem;
    height: 80px;
    width: 100%;
`

export const SkeletonInner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #eee 4%, #ddd 25%, #eee 36%);
    animation: shimmer-animation 1.5s linear infinite;

    @keyframes shimmer-animation {
      0% {
        background-position: -200px 0;
      }
      100% {
        background-position: 200px 0;
      }
    }
`