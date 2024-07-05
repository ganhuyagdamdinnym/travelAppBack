type Travel = {
  id: String; //travelId
  imageUrl: String;
  location: String;
  name: String;
  price: String;
  type: String;
  description: String;
  rating: Number;
  startAt: String;
  endAt: String;
  duration: String;
  informations: {
    runDown: {
      title: String;
      description: String;
    }[];
    note: String;
  };
  facilities: String[]; //facility ids
};
type User = {
  id: String; //userId
  name: String;
  email: String;
  password: String;
  profileImageUrl: String;
  phoneNumber: String;
  emergencyPhone: String;
  point: Number;
  gender: "male" | "female";
  currency: "USD" | "MNT";
  favorates: String[];
};

type Order = {
  id: String; //orderId
  userId: String;
  orderId: String;
  couponCode: String | null;
  createdAt: String;
  state: "pending" | "done" | "purchased" | "canceled";
};
type Promotion = [
  {
    name: String;
    description: String;
    imgUrl: String;
  }
];
type Facilities = {
  name: String;
  iconSVG: string;
};
