type Env = {
  production: boolean,
  baseUrl: string
};

type Place = {
  images: ImageCollection,
  address: string,
  phone: number
  weather: Weather,
  social_info: SocialInfo,
  type: string
};

type Weather = {
  title: string,
  icon: string,
  water: number,
  temperature: number
};

type SocialInfo = {
  title: string,
  img: string,
  followers: number,
  following: number
};

type ImageCollection = {
  img1: string,
  img2: string
};