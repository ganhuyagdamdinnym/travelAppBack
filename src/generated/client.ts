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
  createTravel?: Maybe<Travel>;
  createUser: User;
  deleteProduct?: Maybe<Travel>;
  loginUser: Scalars['String']['output'];
  sendCodeToEmail?: Maybe<Scalars['Int']['output']>;
  updateUserInfo: User;
  verificationCode?: Maybe<Scalars['String']['output']>;
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
  input?: InputMaybe<VerificationCodeInput>;
};

export type Query = {
  __typename?: 'Query';
  get1Product?: Maybe<Travel>;
  getAllCustomers?: Maybe<Scalars['String']['output']>;
  getAllTravel?: Maybe<Array<Travel>>;
};


export type QueryGet1ProductArgs = {
  input?: InputMaybe<Id>;
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
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
};

export type EmailForSendingVerificationOtpInput = {
  email: Scalars['String']['input'];
};

export type LoginInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type RunDown = {
  __typename?: 'runDown';
  description?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type VerificationCodeInput = {
  code?: InputMaybe<Scalars['String']['input']>;
};


