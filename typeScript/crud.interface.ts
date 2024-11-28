  //for allstudent//
  export interface IallStudentProps {
    status: string;
    totalStudent: number;
    data: [
      {
        _id: string;
        name: string;
        email: string;
        phone: string;
        address: string;
        city: string;
        class: string;
        id: string;
      }
    ]
  }

  export interface allStudentProps extends IallStudentProps {
    data: IallStudentProps["data"]
  }




  //for add student//
  export interface IaddStudentProps {
    success: boolean;
    msg: string;
    name: string,
    email: string,
    phone: string,
    address: string,
    city: string,
    class: string,
    id: string,
  }
  export interface addStudentProps extends IaddStudentProps {
    data: IallStudentProps
  }