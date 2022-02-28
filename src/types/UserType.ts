type userType = {
  name: string;
  email: string;
  dob: string;
  gender: string;
  profilePic: any;
  loe: string;
  password: string;
};

interface userWithId extends userType {
  id: string | number;
}

export type { userType, userWithId };
