import images from "../assets/images"
import R from "../assets/R"

const categoryData = [
    { 
      id: 1,
      name: 'Drinks',
      icon: images.drinks,
      menu: [
        {
          id: 1,
          name: 'Tea',
          images: images.food1,
          bgc: R.colors.menu1
        },
        {
          id: 2,
          name: 'Lemon Tea',
          images: images.food2,
          bgc: R.colors.menu2
        },
        {
          id: 3,
          name: 'Mango Juice',
          images: images.food3,
          bgc: R.colors.menu3
        },
        {
          id: 4,
          name: 'Apple Juice',
          images: images.food4,
          bgc: R.colors.menu4
        },
        {
          id: 5,
          name: 'Sweet Tea',
          images: images.food5,
          bgc: R.colors.menu5
        },
        {
          id: 6,
          name: 'Green Tea',
          images: images.food6,
          bgc: R.colors.menu6
        },
      ]
    },
    { 
      id: 2,
      name: 'Food',
      menu: [
        {
          id: 1,
          name: 'Hamburger',
          images: images.brf1
        },
        {
          id: 2,
          name: 'Tuha Salad',
          images: images.brf2
        },
        {
          id: 3,
          name: 'Chicken Fried',
          images: images.brf3
        },
        {
          id: 4,
          name: 'Rice steak',
          images: images.brf4
        },
        {
          id: 5,
          name: 'Shrimp Pizza',
          images: images.brf5
        },
        {
          id: 6,
          name: 'Spaghetti',
          images: images.brf6
        },
        {
          id: 7,
          name: 'Lamb chops',
          images: images.brf7
        },
        {
          id: 8,
          name: 'Beff Steak',
          images: images.brf8
        },
      ],
      icon: images.food
    },
    { 
      id: 3,
      name: 'Cake',
      menu: [
        {
          id: 1,
          name: 'Hamburger',
          images: images.brf1
        },
        {
          id: 2,
          name: 'Tuha Salad',
          images: images.brf2
        },
        {
          id: 3,
          name: 'Chicken Fried',
          images: images.brf3
        },
        {
          id: 4,
          name: 'Rice steak',
          images: images.brf4
        },
        {
          id: 5,
          name: 'Shrimp Pizza',
          images: images.brf5
        },
        {
          id: 6,
          name: 'Spaghetti',
          images: images.brf6
        },
        {
          id: 7,
          name: 'Lamb chops',
          images: images.brf7
        },
        {
          id: 8,
          name: 'Beff Steak',
          images: images.brf8
        },
      ],
      icon: images.cake
    },
    { 
      id: 4,
      name: 'Snack',
      menu: [
        {
          id: 1,
          name: 'Hamburger',
          images: images.brf1
        },
        {
          id: 2,
          name: 'Tuha Salad',
          images: images.brf2
        },
        {
          id: 3,
          name: 'Chicken Fried',
          images: images.brf3
        },
        {
          id: 4,
          name: 'Rice steak',
          images: images.brf4
        },
        {
          id: 5,
          name: 'Shrimp Pizza',
          images: images.brf5
        },
        {
          id: 6,
          name: 'Spaghetti',
          images: images.brf6
        },
        {
          id: 7,
          name: 'Lamb chops',
          images: images.brf7
        },
        {
          id: 8,
          name: 'Beff Steak',
          images: images.brf8
        },
      ],
      icon: images.snack
    },
    { 
      id: 5,
      name: 'Cream',
      icon: images.cream
    },
    { 
      id: 6,
      name: 'Hamburgers',
      icon: images.hamburgers
    },
    { 
      id: 7,
      name: 'Pizza',
      icon: images.pizza
    },
    
  ]

  const restaurantsData = [
    {
      id: 0,
      name: 'Awesome Fruit Restaurant',
      location: '13th Street, 47W 13th St, NY',
      duration: '3 min',
      distance: '1.1 km',
      rating: 4.6,
      reviews: 1320,
      open: '7:00 - 21:00',
      images: images.res1,
      order: [
        {
          idOrder: 1,
          name: 'Hamburger Lover',
          images: images.brf1,
          quantity: 999,
          like: 120,
          price: 15.5
        },

        {
          idOrder: 2,
          name: 'Fried Spicy Chicken Wings',
          images: images.brf2,
          quantity: 210,
          like: 300,
          price: 22.5
        },
        {
          idOrder: 3,
          name: 'Tuna Salad',
          images: images.brf3,
          quantity: 299,
          like: 99,
          price: 7.99
        },
        {
          idOrder: 4,
          name: 'Mush Room Pizza',
          images: images.brf4,
          quantity: 300,
          like: 30,
          price: 9.5
        },
      ],
      reviewsDetail: [
        {
          id: 1,
          username: 'Garnet Bins',
          avatar: images.avatar1,
          creatAt: 'Yesterday 09:28',
          rating: 4.6,
          feedBack: 'Here you can find activities to practise your reading skills. Reading will help you to improve your understanding of the language and build your vocabulary.',
          feedBackImg: [
            images.brf4,
            images.brf5,
            images.brf6,
          ],

        },
        {
          id: 2,
          username: 'Sakira Bins',
          avatar: images.avatar2,
          creatAt: 'Today 08:10',
          rating: 4,
          feedBack: 'Here you can find activities to practise your reading skills. Reading will help you to improve your understanding of the language and build your vocabulary.',
          feedBackImg: [
            images.brf1,
            images.brf2,
            images.brf3,
          ],

        },
        {
          id: 3,
          username: 'Lionel Messi',
          avatar: images.avatar3,
          creatAt: '03/10/2021 12:30',
          rating: 4.6,
          feedBack: 'Here you can find activities to practise your reading skills. Reading will help you to improve your understanding of the language and build your vocabulary.',
          feedBackImg: [
            images.brf4,
            images.brf5,
            images.brf6,
          ],

        }
      ],
      info: {
        phone: 961633677,
        email: 'fooddelicious@gmail.com',
        cuisine: 'USA',
        averageCost: '$2-$40'
      }
    },
    {
      id: 1,
      name: 'Pizza Lover Company',
      location: '78th Street, 32 W 21th St, NY',
      duration: '4 min',
      distance: '3.2 km',
      rating: 5,
      reviews: 1320,
      open: '7:00 - 21:00',
      images: images.res2,
      order: [
        {
          idOrder: 1,
          name: 'Hamburger Lover',
          images: images.brf1,
          quantity: 999,
          like: 120,
          price: 15.50
        },

        {
          idOrder: 2,
          name: 'Fried Spicy Chicken Wings',
          images: images.brf2,
          quantity: 210,
          like: 300,
          price: 22.50
        },
        {
          idOrder: 3,
          name: 'Tuna Salad',
          images: images.brf3,
          quantity: 299,
          like: 99,
          price: 7.99
        },
        {
          idOrder: 4,
          name: 'Mush Room Pizza',
          images: images.brf4,
          quantity: 300,
          like: 30,
          price: 9.50
        },
      ],
      reviewsDetail: [
        {
          id: 1,
          username: 'Garnet Bins',
          avatar: images.avatar1,
          creatAt: 'Yesterday 09:28',
          rating: 4.6,
          feedBack: 'Here you can find activities to practise your reading skills. Reading will help you to improve your understanding of the language and build your vocabulary.',
          feedBackImg: [
            images.brf4,
            images.brf5,
            images.brf6,
          ],

        },
        {
          id: 2,
          username: 'Sakira Bins',
          avatar: images.avatar2,
          creatAt: 'Today 08:10',
          rating: 4,
          feedBack: 'Here you can find activities to practise your reading skills. Reading will help you to improve your understanding of the language and build your vocabulary.',
          feedBackImg: [
            images.brf1,
            images.brf2,
            images.brf3,
          ],

        },
        {
          id: 3,
          username: 'Lionel Messi',
          avatar: images.avatar3,
          creatAt: '03/10/2021 12:30',
          rating: 4.6,
          feedBack: 'Here you can find activities to practise your reading skills. Reading will help you to improve your understanding of the language and build your vocabulary.',
          feedBackImg: [
            images.brf4,
            images.brf5,
            images.brf6,
          ],

        }

      ],
      info: {
        phone: 124836938,
        email: 'pizzafood@gmail.com',
        cuisine: 'VietNam',
        averageCost: '$40-$500'
      }
    },
    {
      id: 2,
      name: 'Chicken Fried Restaurant',
      location: '132th Street, 10W 87th St, NY',
      duration: '10 min',
      distance: '5.4 km',
      rating: 3.7,
      reviews: 1320,
      open: '7:00 - 21:00',
      images: images.res3,
      order: [
        {
          idOrder: 1,
          name: 'Hamburger Lover',
          images: images.brf1,
          quantity: 999,
          like: 120,
          price: 15.50
        },

        {
          idOrder: 2,
          name: 'Fried Spicy Chicken Wings',
          images: images.brf2,
          quantity: 210,
          like: 300,
          price: 22.50
        },
        {
          idOrder: 3,
          name: 'Tuna Salad',
          images: images.brf3,
          quantity: 299,
          like: 99,
          price: 7.99
        },
        {
          idOrder: 4,
          name: 'Mush Room Pizza',
          images: images.brf4,
          quantity: 300,
          like: 30,
          price: 9.50
        },
      ],
      reviewsDetail: [
        {
          id: 1,
          username: 'Garnet Bins',
          avatar: images.avatar1,
          creatAt: 'Yesterday 09:28',
          rating: 4.6,
          feedBack: 'Here you can find activities to practise your reading skills. Reading will help you to improve your understanding of the language and build your vocabulary. Here you can find activities to practise your reading skills. Reading will help you to improve your understanding of the language and build your vocabulary',
          feedBackImg: [
            images.brf4,
            images.brf5,
            images.brf6,
          ],

        },
        {
          id: 2,
          username: 'Sakira Bins',
          avatar: images.avatar2,
          creatAt: 'Today 08:10',
          rating: 4,
          feedBack: 'Here you can find activities to practise your reading skills. Reading will help you to improve your understanding of the language and build your vocabulary. Here you can find activities to practise your reading skills. Reading will help you to improve your understanding',
          feedBackImg: [
            images.brf1,
            images.brf2,
            images.brf3,
          ],

        },
        {
          id: 3,
          username: 'Lionel Messi',
          avatar: images.avatar3,
          creatAt: '03/10/2021 12:30',
          rating: 3,
          feedBack: 'Here you can find activities to practise your reading skills. Reading will help you to improve your understanding of the language and build your vocabulary. Im just a little bit caught in the middleLife is a maze, and love is a riddle. I dont know where to go. Cant do it alone. Ive tried, and I dont know why',
          feedBackImg: [
            images.brf4,
            images.brf5,
            images.brf6,
          ],

        }

      ],
      info: {
        phone: 1826887746,
        email: 'foododer@gmail.com',
        cuisine: 'Italia',
        averageCost: '$30-$50'
      }
    },
  ]

  const breakfastData = [
    {
      id: 1,
      name: 'Hamburger',
      images: images.brf1
    },
    {
      id: 2,
      name: 'Tuha Salad',
      images: images.brf2
    },
    {
      id: 3,
      name: 'Chicken Fried',
      images: images.brf3
    },
    {
      id: 4,
      name: 'Rice steak',
      images: images.brf4
    },
    {
      id: 5,
      name: 'Shrimp Pizza',
      images: images.brf5
    },
    {
      id: 6,
      name: 'Spaghetti',
      images: images.brf6
    },
    {
      id: 7,
      name: 'Lamb chops',
      images: images.brf7
    },
    {
      id: 8,
      name: 'Beff Steak',
      images: images.brf8
    },
  ]

  export {
    categoryData,
    restaurantsData,
    breakfastData
  } 
  //// them, tang giam so luong,
  //// dataInit (them xoa, tang giam)