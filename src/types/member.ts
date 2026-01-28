export type Member = {
  id: string;
  dateOfBirth: string;
  imageUrl: string;
  displayName: string;
  created: string;
  lastActive: string;
  gender: string;
  description: string;
  country: string;
  city: string;
  userId: string;
};

export type Photo = {
  id: string;
  url: string;
  publicId?: string;
  memberId: string;
};
