export type Contact = {
  name: {
    first: string;
    last: string;
  };

  login: {
    uuid: string;
  };
  email: string;
  picture: {
    thumnail: string;
    medium: string;
    larg: string;
  };
};
