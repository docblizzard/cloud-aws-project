import { GraphQLResolveInfo } from 'graphql';
import { TrackModel, AuthorModel, FilmModel, PeopleModel } from './models/models';
import { DataSourceContext } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Address = {
  __typename?: 'Address';
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  photo?: Maybe<Scalars['String']['output']>;
};

export type Comment = {
  __typename?: 'Comment';
  comment: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  postId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type CreateCommentResponse = {
  __typename?: 'CreateCommentResponse';
  code: Scalars['Int']['output'];
  comment?: Maybe<Comment>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type CreatePostResponse = {
  __typename?: 'CreatePostResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  post?: Maybe<Post>;
  success: Scalars['Boolean']['output'];
};

export type CreateUserResponse = {
  __typename?: 'CreateUserResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type Doctor = {
  __typename?: 'Doctor';
  addresses?: Maybe<Array<Maybe<Address>>>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  speciality?: Maybe<Speciality>;
};

export type Film = {
  __typename?: 'Film';
  id: Scalars['ID']['output'];
  people: Array<Maybe<People>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type IncrementLikesResponse = {
  __typename?: 'IncrementLikesResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  track?: Maybe<Track>;
};

export type IncrementTrackViewsResponse = {
  __typename?: 'IncrementTrackViewsResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  track?: Maybe<Track>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment: CreateCommentResponse;
  createPost: CreatePostResponse;
  createUser: CreateUserResponse;
  incrementLikes: IncrementLikesResponse;
  incrementTrackViews: IncrementTrackViewsResponse;
  signIn: SignInResponse;
};


export type MutationCreateCommentArgs = {
  comment: Scalars['String']['input'];
};


export type MutationCreatePostArgs = {
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreateUserArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationIncrementLikesArgs = {
  id: Scalars['ID']['input'];
};


export type MutationIncrementTrackViewsArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSignInArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type People = {
  __typename?: 'People';
  eyeColor?: Maybe<Scalars['String']['output']>;
  films: Array<Maybe<Film>>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type Post = {
  __typename?: 'Post';
  comment?: Maybe<Array<Maybe<Comment>>>;
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  closestColor: Scalars['String']['output'];
  divide: Scalars['Float']['output'];
  doctor?: Maybe<Doctor>;
  doctors?: Maybe<Array<Maybe<Doctor>>>;
  getFilms: Array<Maybe<Film>>;
  getPeople: Array<Maybe<People>>;
  getTracks: Array<Track>;
  multiply: Scalars['Float']['output'];
};


export type QueryClosestColorArgs = {
  color: Scalars['String']['input'];
};


export type QueryDivideArgs = {
  number1: Scalars['Int']['input'];
  number2: Scalars['Int']['input'];
};


export type QueryDoctorArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDoctorsArgs = {
  specialities?: InputMaybe<Array<Speciality>>;
};


export type QueryMultiplyArgs = {
  number1: Scalars['Int']['input'];
  number2: Scalars['Int']['input'];
};

export type SignInResponse = {
  __typename?: 'SignInResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export enum Speciality {
  Ophtalmologist = 'OPHTALMOLOGIST',
  Psychologist = 'PSYCHOLOGIST'
}

export type Track = {
  __typename?: 'Track';
  author: Author;
  id: Scalars['ID']['output'];
  numberOfLikes: Scalars['Int']['output'];
  numberOfViews: Scalars['Int']['output'];
  thumbnail?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  comment?: Maybe<Array<Maybe<Comment>>>;
  id: Scalars['ID']['output'];
  post?: Maybe<Array<Maybe<Post>>>;
  username: Scalars['String']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Address: ResolverTypeWrapper<Address>;
  Author: ResolverTypeWrapper<AuthorModel>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Comment: ResolverTypeWrapper<Comment>;
  CreateCommentResponse: ResolverTypeWrapper<CreateCommentResponse>;
  CreatePostResponse: ResolverTypeWrapper<CreatePostResponse>;
  CreateUserResponse: ResolverTypeWrapper<CreateUserResponse>;
  Doctor: ResolverTypeWrapper<Doctor>;
  Film: ResolverTypeWrapper<FilmModel>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  IncrementLikesResponse: ResolverTypeWrapper<Omit<IncrementLikesResponse, 'track'> & { track?: Maybe<ResolversTypes['Track']> }>;
  IncrementTrackViewsResponse: ResolverTypeWrapper<Omit<IncrementTrackViewsResponse, 'track'> & { track?: Maybe<ResolversTypes['Track']> }>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  People: ResolverTypeWrapper<PeopleModel>;
  Post: ResolverTypeWrapper<Post>;
  Query: ResolverTypeWrapper<{}>;
  SignInResponse: ResolverTypeWrapper<SignInResponse>;
  Speciality: Speciality;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Track: ResolverTypeWrapper<TrackModel>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Address: Address;
  Author: AuthorModel;
  Boolean: Scalars['Boolean']['output'];
  Comment: Comment;
  CreateCommentResponse: CreateCommentResponse;
  CreatePostResponse: CreatePostResponse;
  CreateUserResponse: CreateUserResponse;
  Doctor: Doctor;
  Film: FilmModel;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  IncrementLikesResponse: Omit<IncrementLikesResponse, 'track'> & { track?: Maybe<ResolversParentTypes['Track']> };
  IncrementTrackViewsResponse: Omit<IncrementTrackViewsResponse, 'track'> & { track?: Maybe<ResolversParentTypes['Track']> };
  Int: Scalars['Int']['output'];
  Mutation: {};
  People: PeopleModel;
  Post: Post;
  Query: {};
  SignInResponse: SignInResponse;
  String: Scalars['String']['output'];
  Track: TrackModel;
  User: User;
};

export type AddressResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = {
  zipCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthorResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  comment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  postId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCommentResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CreateCommentResponse'] = ResolversParentTypes['CreateCommentResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePostResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CreatePostResponse'] = ResolversParentTypes['CreatePostResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CreateUserResponse'] = ResolversParentTypes['CreateUserResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DoctorResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Doctor'] = ResolversParentTypes['Doctor']> = {
  addresses?: Resolver<Maybe<Array<Maybe<ResolversTypes['Address']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  speciality?: Resolver<Maybe<ResolversTypes['Speciality']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilmResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Film'] = ResolversParentTypes['Film']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  people?: Resolver<Array<Maybe<ResolversTypes['People']>>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IncrementLikesResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['IncrementLikesResponse'] = ResolversParentTypes['IncrementLikesResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  track?: Resolver<Maybe<ResolversTypes['Track']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IncrementTrackViewsResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['IncrementTrackViewsResponse'] = ResolversParentTypes['IncrementTrackViewsResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  track?: Resolver<Maybe<ResolversTypes['Track']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createComment?: Resolver<ResolversTypes['CreateCommentResponse'], ParentType, ContextType, RequireFields<MutationCreateCommentArgs, 'comment'>>;
  createPost?: Resolver<ResolversTypes['CreatePostResponse'], ParentType, ContextType, RequireFields<MutationCreatePostArgs, 'content' | 'title'>>;
  createUser?: Resolver<ResolversTypes['CreateUserResponse'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'password' | 'username'>>;
  incrementLikes?: Resolver<ResolversTypes['IncrementLikesResponse'], ParentType, ContextType, RequireFields<MutationIncrementLikesArgs, 'id'>>;
  incrementTrackViews?: Resolver<ResolversTypes['IncrementTrackViewsResponse'], ParentType, ContextType, RequireFields<MutationIncrementTrackViewsArgs, 'id'>>;
  signIn?: Resolver<ResolversTypes['SignInResponse'], ParentType, ContextType, RequireFields<MutationSignInArgs, 'password' | 'username'>>;
};

export type PeopleResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['People'] = ResolversParentTypes['People']> = {
  eyeColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  films?: Resolver<Array<Maybe<ResolversTypes['Film']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  comment?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  closestColor?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<QueryClosestColorArgs, 'color'>>;
  divide?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<QueryDivideArgs, 'number1' | 'number2'>>;
  doctor?: Resolver<Maybe<ResolversTypes['Doctor']>, ParentType, ContextType, RequireFields<QueryDoctorArgs, 'id'>>;
  doctors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Doctor']>>>, ParentType, ContextType, Partial<QueryDoctorsArgs>>;
  getFilms?: Resolver<Array<Maybe<ResolversTypes['Film']>>, ParentType, ContextType>;
  getPeople?: Resolver<Array<Maybe<ResolversTypes['People']>>, ParentType, ContextType>;
  getTracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType>;
  multiply?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<QueryMultiplyArgs, 'number1' | 'number2'>>;
};

export type SignInResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['SignInResponse'] = ResolversParentTypes['SignInResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TrackResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Track'] = ResolversParentTypes['Track']> = {
  author?: Resolver<ResolversTypes['Author'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  numberOfLikes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  numberOfViews?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  comment?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  post?: Resolver<Maybe<Array<Maybe<ResolversTypes['Post']>>>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = DataSourceContext> = {
  Address?: AddressResolvers<ContextType>;
  Author?: AuthorResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  CreateCommentResponse?: CreateCommentResponseResolvers<ContextType>;
  CreatePostResponse?: CreatePostResponseResolvers<ContextType>;
  CreateUserResponse?: CreateUserResponseResolvers<ContextType>;
  Doctor?: DoctorResolvers<ContextType>;
  Film?: FilmResolvers<ContextType>;
  IncrementLikesResponse?: IncrementLikesResponseResolvers<ContextType>;
  IncrementTrackViewsResponse?: IncrementTrackViewsResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  People?: PeopleResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SignInResponse?: SignInResponseResolvers<ContextType>;
  Track?: TrackResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

