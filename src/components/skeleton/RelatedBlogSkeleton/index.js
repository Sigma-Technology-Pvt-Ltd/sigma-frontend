import React from 'react';
import {
   BlogCategoryItem,
   BlogRecentImage,
   BlogRecentInfo,
   BlogRecentItem
} from '../../../frontend/BlogDetail/styles';
import { Skeleton } from '@mui/material';

const RelatedBlogSkeleton = () => {
   return (
      <>
         <BlogCategoryItem>
            <BlogRecentItem className="d-flex align-items-center  justify-content-between gap-2">
               <Skeleton height={100} width={100} />
               <div className="w-75">
                  <Skeleton variant="text" height={40} width="100%" />
                  <Skeleton variant="text" height={20} width="100" />
               </div>
            </BlogRecentItem>
         </BlogCategoryItem>
      </>
   );
};

export default RelatedBlogSkeleton;
