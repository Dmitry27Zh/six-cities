export type Id = number

export type Src = string

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type CityName = string;

export type City = {
  location: Location;
  name: CityName;
}

export type User = {
  avatarUrl: string;
}

export type Rating = number

export type Offer = {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  id: Id;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: Src;
  price: number;
  rating: Rating;
  title: string;
  type: string;
}

export type Offers = Offer[]

export type Review = {
  comment: string;
  date: string;
  id: Id;
  rating: Rating;
  user: User;
}

export type Reviews = Review[]
