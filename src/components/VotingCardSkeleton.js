import { Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
const VotingCardSkeleton = () => {
  return (
    <>
      <Grid item sm={4}>
        <Skeleton width={"100%"} height={210} variant="rect" />
        <div className="d-flex align-items-center p-1">
          <Skeleton className="mr-1" width={40} height={40} variant="circle" />
          <Skeleton width={"100%"} height={50} variant="text" />
        </div>
      </Grid>
      <Grid item sm={4}>
        <Skeleton width={"100%"} height={210} variant="rect" />
        <div className="d-flex align-items-center p-1">
          <Skeleton className="mr-1" width={40} height={40} variant="circle" />
          <Skeleton width={"100%"} height={50} variant="text" />
        </div>
      </Grid>
      <Grid item sm={4}>
        <Skeleton width={"100%"} height={210} variant="rect" />
        <div className="d-flex align-items-center p-1">
          <Skeleton className="mr-1" width={40} height={40} variant="circle" />
          <Skeleton width={"100%"} height={50} variant="text" />
        </div>
      </Grid>
    </>
  );
};

export default VotingCardSkeleton;
