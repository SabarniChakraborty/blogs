

export const endpoints = {
    auth: {
      login: "/login",
      register: "/register",
      update: "/update-password",
    },
    blogs: {
      allBlogs: "/allBlog",
      blogDetails: "/blogdetails",
      addComment: "/blog",
      like: "/blog/like",
      unlike: "/blog/unlike",
      showAllCategory: "/showallcategory",
      letestPost: "/letest-post",
      blogimages: "/blog/images",
      showcomment:"/comment",
      categorypost:"/category/post"
    },
    content: {
      service: "/service",
      testimonial: "/testimonial",
      testimonialphotos: "/testimonials/photos",
      team: "/team",
      teamphoto: "/team/photo",
      banner: "/banner",
      bannerphoto: "/banner/photo",
      
    },
    course: {
      course: "/course",
      coursephoto: "/course/photo",
    },
    crud: {
      allstudents: "/allstudent",
      addstudents: "/student",
      editstudents: "/edit",
      updatestudents: "/update",
      deletestudents: "/delete",
    }
  };
  