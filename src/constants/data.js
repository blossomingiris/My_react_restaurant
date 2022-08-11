import images from './images'

const drinks = [
  {
    title: 'Moet & Chandon Imperial Brut 200ml',
    price: '€12',
    tags: 'AC Champagne | France (Chardonnay, Pinot Meunier, Pinot Noir)',
  },
  {
    title: 'Santorini Barrel, Domaine Sigalas 200ml',
    price: '€9',
    tags: 'PDO Santorini (Assyrtiko)',
  },
  {
    title: 'Geometria Malagouzia, Winery Lafazanis 150ml',
    price: '€11',
    tags: 'PGI Peloponnese (Malagouzia)',
  },
  {
    title: 'Amethystos, Domaine Costa Lazaridi 200ml',
    price: '€13',
    tags: 'PGI Macedonia (Sauvignon Blanc, Assyrtiko)',
  },
  {
    title: 'Negroni',
    price: '€18',
    tags: 'Cocktail (Gin, Sweet Vermouth, Campari, Orange garnish)',
  },

  {
    title: "Dark 'N' Stormy",
    price: '€16',
    tags: ' Cocktail (Dark rum, Ginger beer, Slice of lime)',
  },
]

const foods = [
  {
    title: 'Rocket salad',
    price: '€8',
    tags: 'with lettuce, tender rocket leaves, orange, green apple, sun dried tomato, parmesan shavings, balsamic vinegar, olive oil, honey and sesame',
  },

  {
    title: 'Chick pea hot pot (Cycladian)',
    price: '€12',
    tags: 'with lime, green olive oil and dill, served with smoked trout',
  },
  {
    title: 'Linguini with chicken',
    price: '€18',
    tags: 'with zucchini, Santorinian cherry tomatoes and capers flavored with fresh basil',
  },
  {
    title: 'Mushroom risotto',
    price: '€15',
    tags: 'with porcini mushrooms and fresh white mushrooms flavored with thyme',
  },
  {
    title: 'Cretan “Apaki” (smoked pork) on small pitta',
    price: '€16',
    tags: 'with Cretan graviera cheese and olive oil, flavored with rosemary and thyme',
  },
]

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
]

export default { drinks, foods, awards }
