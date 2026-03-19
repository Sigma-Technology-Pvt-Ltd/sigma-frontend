import { Skeleton } from '@mui/material';
import React from 'react';
import { BlogSkeletonContent } from '../BlogSkeleton/styles';

const ParentSkeleton = () => {
      return (
            <>
                  <Skeleton
                        variant="rectangular"
                        height={226}
                        animation="wave"
                  />
                  <BlogSkeletonContent>
                        <Skeleton variant="text" height={20} animation="wave" />
                        <Skeleton variant="text" height={20} animation="wave" />
                  </BlogSkeletonContent>
            </>
      );
};

export default ParentSkeleton;
