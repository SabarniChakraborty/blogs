// for all blogs//
interface photo {
    data: string,
    contentType: string,
}

export interface IallBlogsProps {
    _id: number,
    title: string,
    postText: string,
    photo: photo,
    comments: string[],
    category: string,
    createdAt: string,
    comment_count: number,

}
export interface allBlogsProps extends IallBlogsProps {
    data: IallBlogsProps
}






// for blogs details//
export interface IblogDetailsProps {
    _id: number,
    title: string,
    postText: string,
    photo: photo,
    comments: string[] | null | undefined,
    category: string,
    createdAt: string | number | Date,
    updatedAt: string | number | Date,
    unlikes: number,
    likes: number,

}
export interface blogDetailsProps extends IblogDetailsProps {
    data: IblogDetailsProps
}




// show comments //
export interface IcommentProps {
    comment: object,
    post: {
        comment: {
            _id: number,
            title: string,
            postText: string,
            category: string,
            status: string,
            likes: number,
            comments: [
                {
                    _id: string,
                    name: string,
                    email: string,
                    comment: string,
                    createdAt: string,
                    updatedAt: string,

                }

            ],
            createdAt: string,
            updatedAt: string,
            unlikes: number,
        }
    }

}
export interface commentProps extends IcommentProps {
    data: IcommentProps
}




// for adding comments //
export interface IaddCommentProps {
    name: string,
    email: string,
    comment: string,
    blog: string,
    _id: string,
    createdAt: string,
    updatedAt: string,
    status: number,
    message: string,
    user: {
        name: string,
        email: string,
    },
}
export interface addCommentProps extends IaddCommentProps {
    data: IaddCommentProps
}



//for likes //
export interface IAddLikesProps extends blogDetailsProps {
    data: blogDetailsProps
}



//for unlikes //
export interface IAddUnlikesProps extends blogDetailsProps {
    data: blogDetailsProps
}


//for show category//
export interface IshowAllCategoryProps {
    data: [
        {
            _id: string,
            category: string,
        }
    ]

    status: string,
}
export interface showAllCategoryProps extends Omit<IshowAllCategoryProps, 'data'> {
    data: IshowAllCategoryProps['data']
}




 // for category post//
 export interface IAllCategoryPostProps {
    _id: string;
  }
  
  export interface ICategoryPostProps {
    status: string;
    data: [
      {
        _id: string;
        title: string;
        postText: string;
        photo: {
          data: Array<Array<number>>;
          contentType: string;
        };
        likes: number;
        unlikes: number;
        createdAt: string;
        updatedAt: string;
        
      }
    ]
  }
  export interface categoryPostProps extends ICategoryPostProps {
    categoryWiseNewData: ICategoryPostProps;
  }



  //for latest post//
 export interface IlatestPostProps {
    _id: string;
    title: string;
    postText: string;
    photo: photo;
    category: string;
    comments: string[];
    createdAt: string;
    updatedAt: string;
    likes: number;
    unlikes: number;
    status: boolean;
  }
  export interface latestPostProps extends IlatestPostProps {
    data: IlatestPostProps;
  }

  

  // for services
  export interface IallServiceProps {
    status: boolean;
    data: [
      {
        _id: string;
        name: string;
        slug: string;
        details: string;
        createdAt: string;  
        updatedAt: string;
      }
    ]
  }
  export interface allServiceProps extends IallServiceProps {
    data: IallServiceProps["data"]
  }



  //for testimonial//
  export interface IallTestimonialProps {
    success: boolean,
    countotal: string,
    message: string,
    testimonials: [
      {
        _id: string;
        name: string;
        slug: string;
        position: string,
        talk: string,
        createdAt: string;  
        updatedAt: string;
      }
    ]
  }
  export interface allTestimonialProps extends IallTestimonialProps {
    data: IallTestimonialProps
  }



  //for team//
  export interface ITeamProps {
    success: boolean,
    countotal: number,
    message: string,
    TeamMember: [
      {
        _id: string;
        name: string;
        slug: string;
        possession: string,
        createdAt: string;  
        updatedAt: string;
      }
    ]
  }
  export interface TeamProps extends ITeamProps {
    data: ITeamProps
  }




   // for courses
   export interface IcoursesProps {
    success: boolean;
    counTotal: number;
    message: string;
    Courses: [
      {
        _id: string;
        name: string;
        slug: string;
        requirement: string;
        duration: string;
        fees: string;
        createdAt: string;
        updatedAt: string;
      }
    ]
  }

  export interface coursesProps extends IcoursesProps {
    data: IcoursesProps['Courses'];
  }










