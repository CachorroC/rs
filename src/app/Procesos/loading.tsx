import CardSkeleton from "../../components/card-skeleton";
import layout from "#@/styles/css/layout.module.css";

export default function Loading () {
  return (
    <div className={ layout.procesos }>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}
