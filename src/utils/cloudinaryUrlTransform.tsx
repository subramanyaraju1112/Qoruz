// const BASE_URL =
//   'https://res.cloudinary.com/drudxodfk/image/upload/q_auto:best/v1684301592/Qoruz/';

// export const transformUrl = (url: string) => {
//   return BASE_URL + url;
// };

const BASE_URL2 = 'https://d1ks0pavw8unez.cloudfront.net/public/';

export const joinS3 = (url: string) => {
  return BASE_URL2 + url;
};
