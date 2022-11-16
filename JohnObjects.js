const johnBooks = [
  {
    author: {
      first: 'bobby',
      last: 'digital',
    },
    title: 'In Stereo',
    isbn: '1652418642315642',
    year: '1995',
    publisher: {
      name: 'Liquid Publishing',
      address: {
        number: '36',
        street: 'Shaolin Ave',
        city: 'Staten Island',
        state: 'NY',
        zip: '10301',
      },
    },
    price: {
      usd: 12.29,
      can: 16.69,
      eur: 14.49,
    },
    cover:
      'https://upload.wikimedia.org/wikipedia/en/0/03/RZA_as_Bobby_Digital_in_Stereo.png',
  },
];

const newBook = {
  author: {
    first: '',
    last: '',
  },
  title: '',
  isbn: '',
  year: '',
  publisher: {
    address: {
      number: '',
      street: '',
      state: '',
      zip: '',
    },
  },
  price: {
    usd: 1,
    can: 2,
    eur: 22,
  },
  cover: 'URL',
};
