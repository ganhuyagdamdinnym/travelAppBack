export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Id = {
  id: Scalars['String']['input'];
};

export type Info = {
  __typename?: 'Info';
  note?: Maybe<Scalars['String']['output']>;
  runDown?: Maybe<Array<RunDown>>;
};

export type InformationInput = {
  note: Scalars['String']['input'];
  runDown: Array<RunDownInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPayment?: Maybe<Scalars['String']['output']>;
  changePassword?: Maybe<Scalars['String']['output']>;
  createOrder?: Maybe<Scalars['String']['output']>;
  createTravel?: Maybe<Travel>;
  createUser: User;
  deleteProduct?: Maybe<Travel>;
  loginUser: Scalars['String']['output'];
  sendCodeToEmail?: Maybe<Scalars['String']['output']>;
  updateUserInfo: User;
  verificationCode?: Maybe<Scalars['String']['output']>;
};


export type MutationAddPaymentArgs = {
  input?: InputMaybe<BankNameInput>;
};


export type MutationChangePasswordArgs = {
  input?: InputMaybe<ChangePasswordInput>;
};


export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};


export type MutationCreateTravelArgs = {
  input?: InputMaybe<TravelInput>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationDeleteProductArgs = {
  input?: InputMaybe<DeleteInput>;
};


export type MutationLoginUserArgs = {
  input: LoginInput;
};


export type MutationSendCodeToEmailArgs = {
  input: EmailForSendingVerificationOtpInput;
};


export type MutationUpdateUserInfoArgs = {
  input?: InputMaybe<Scalars['String']['input']>;
};


export type MutationVerificationCodeArgs = {
  input: VerificationCodeInput;
};

export type Query = {
  __typename?: 'Query';
  get1Product?: Maybe<Travel>;
  getAllCustomers?: Maybe<Scalars['String']['output']>;
  getAllTravel?: Maybe<Array<Travel>>;
  getUserInfo: User;
};


export type QueryGet1ProductArgs = {
  input?: InputMaybe<Id>;
};


export type QueryGetUserInfoArgs = {
  input: UserTokenInput;
};

export type RunDownInput = {
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type Travel = {
  __typename?: 'Travel';
  _id: Scalars['String']['output'];
  description: Scalars['String']['output'];
  duration: Scalars['String']['output'];
  endAt: Scalars['String']['output'];
  facilities?: Maybe<Array<Scalars['String']['output']>>;
  imageUrl: Scalars['String']['output'];
  informations: Info;
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  rating: Scalars['Int']['output'];
  startAt: Scalars['String']['output'];
};

export type TravelInput = {
  description: Scalars['String']['input'];
  duration: Scalars['String']['input'];
  endAt: Scalars['String']['input'];
  facilities?: InputMaybe<Array<Scalars['String']['input']>>;
  imageUrl: Scalars['String']['input'];
  informations: InformationInput;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  rating: Scalars['Int']['input'];
  startAt: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  currency?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emergencyPhone?: Maybe<Scalars['String']['output']>;
  favorates?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  gender?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  payment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  point?: Maybe<Scalars['Int']['output']>;
  profileImageUrl?: Maybe<Scalars['String']['output']>;
};

export type BankNameInput = {
  bankName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
};

export type ChangePasswordInput = {
  email: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};

export type CreateOrderInput = {
  couponCode?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type EmailForSendingVerificationOtpInput = {
  email: Scalars['String']['input'];
};

export type LoginInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type Message = {
  __typename?: 'message';
  message?: Maybe<Scalars['String']['output']>;
};

export type Order = {
  __typename?: 'order';
  _id?: Maybe<Scalars['String']['output']>;
  couponCode?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type RunDown = {
  __typename?: 'runDown';
  description?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type UserTokenInput = {
  token: Scalars['String']['input'];
};

export type VerificationCodeInput = {
  code: Scalars['Int']['input'];
  email: Scalars['String']['input'];
};


