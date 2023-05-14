import { SkeletonOuter, SkeletonInner } from "./skeleton.styles";


const Skeleton = () => {
    const boxes = Array(4)
    .fill(0)
    .map((_, i) => {
      return (
        <SkeletonOuter key={i}>
          <SkeletonInner />
        </SkeletonOuter>
      );
    });

  return <>{boxes}</>;
}

export default Skeleton