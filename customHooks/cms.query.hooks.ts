import { allBlogsAPICall } from "@/api/functions/allBlogs.api";
import { allCommentsAPICall } from "@/api/functions/allComments.api";
import { blogDetailsAPICall } from "@/api/functions/blogDetail.api";
import { addCommentProps, allServiceProps, allTestimonialProps, categoryPostProps, 
  IallBlogsProps, IblogDetailsProps, IcommentProps, IcoursesProps, latestPostProps, showAllCategoryProps, 
  TeamProps} from "@/typeScript/cms.interface";


import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";
import { useGlobalHooks } from "./globalHooks/globalHooks";
import { addCommentsAPICall } from "@/api/functions/addComments.api";
import { addLikesFn } from "@/api/functions/addLikes.api";
import { addUnlikesFn } from "@/api/functions/addUnlikes.api";
import { showAllCategoryAPICall } from "@/api/functions/showAllCategory.api";
import { categoryPostAPICall } from "@/api/functions/categoryPost.api";
import { latestPostsAPICall } from "@/api/functions/latestPost.api";
import { allServiceAPICall } from "@/api/functions/allService.api";
import { allTestimonialAPICall } from "@/api/functions/allTestimonials.api";
import { TeamAPICall } from "@/api/functions/team.api";
import { allCoursesAPICall } from "@/api/functions/allCourses.api";

//for all blogs
export const allBlogsQuery = (): UseQueryResult<IallBlogsProps, unknown> => {
    return useQuery({
      queryKey: ["BLOGS"],
      queryFn: allBlogsAPICall
    });
  };



    //for blog details
    export const blogDetailsQuery = (id : string ): UseQueryResult<IblogDetailsProps, unknown> => {
        return useQuery({
          queryKey: ["BLOG-DETAILS", id],
          queryFn: () => blogDetailsAPICall(id)
        });
      };
      




       // for show comments
  export const allCommentsQuery = (id : string ): UseQueryResult<IcommentProps, unknown> => {
    return useQuery({
      queryKey: ["BLOG-DETAILS", id, "COMMENTS"],
      queryFn: () => allCommentsAPICall(id)
    });
  };


  

  // for add comments//
  export const addCommentMutation = (id: string) => {
    const {queryClient} = useGlobalHooks();
    return useMutation({
      mutationFn: (payload: addCommentProps) => addCommentsAPICall(id, payload),
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["ADD-COMMENT"] });
        console.log("data", data);
      },
    });
  };




  // for add likes
  export const addLikesMutation = (id: string) => {
    const { queryClient } = useGlobalHooks();
    return useMutation({
      mutationFn: () => addLikesFn(id),
      onSuccess: data => {
        // queryClient.invalidateQueries({ queryKey: ["BLOGS"] });
        queryClient.invalidateQueries({ queryKey: ["ADD-LIKES"] });
        console.log(data.likes, "data of comments adding");
      }
    });
  };


  //for add unlikes//
export const addUnlikesMutation = (id: string) => {
    const { queryClient } = useGlobalHooks();
    return useMutation({
        mutationFn: () => addUnlikesFn(id),
        onSuccess: data => {
        // queryClient.invalidateQueries({ queryKey: ["BLOGS"] });
        queryClient.invalidateQueries({ queryKey: ["ADD-UNLIKES"] });
        console.log(data.unlikes, "data of unlikes adding");
        }
    });
};



//for show all category//
export const showAllCategoryQuery = (): UseQueryResult<showAllCategoryProps, unknown> => {
  return useQuery({
    queryKey: ["SHOW-ALL-CATEGORY"],
    queryFn: showAllCategoryAPICall
  });
};




//for  category Post//
export const categoryPostQuery = (id : string ): UseQueryResult<categoryPostProps, unknown> => {
  return useQuery({
    queryKey: ["CATEGORY-POST", id],
    queryFn: () => categoryPostAPICall(id)
  });
};



//for latest post//
export const latestPostQuery = (): UseQueryResult<latestPostProps, unknown> => {
  return useQuery({
    queryKey: ["LATEST-POST"],
    queryFn: latestPostsAPICall
  });
};



//for all service//
export const allServiceQuery = (): UseQueryResult<allServiceProps, unknown> => {
  return useQuery({
    queryKey: ["ALL-SERVICE"],
    queryFn: allServiceAPICall
  });
};


//for all testimonial//
export const allTestimonialQuery = (): UseQueryResult<allTestimonialProps, unknown> => {
  return useQuery({
    queryKey: ["ALL-TESTIMONIAL"],
    queryFn: allTestimonialAPICall
  });
};


//for team//
export const TeamQuery = (): UseQueryResult<TeamProps, unknown> => {
  return useQuery({
    queryKey: ["TEAM"],
    queryFn: TeamAPICall
  });
};



// for courses query
export const allCoursesQuery = (): UseQueryResult<IcoursesProps, unknown> => {
  return useQuery({
    queryKey: ["ALL-COURSES"],
    queryFn: allCoursesAPICall
  });
};



  





