export interface Event {
    id: string;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    image: string;
    categories: string[];
  }
  
  export const events: Event[] = [
    {
      id: '1',
      title: 'Coding Workshop',
      description: 'A workshop on web development',
      startDate: new Date('2023-07-30T10:00:00'),
      endDate: new Date('2023-07-30T12:00:00'),
      image: 'coding-workshop.jpg',
      categories: ['Coding', 'Workshop'],
    },
    {
      id: '2',
      title: 'Social Meetup',
      description: 'A casual meetup to socialize',
      startDate: new Date('2023-08-05T15:00:00'),
      endDate: new Date('2023-08-05T17:00:00'),
      image: 'social-meetup.jpg',
      categories: ['Social', 'Meetup'],
    },
    {
      id: '3',
      title: 'Tech Talk: AI in Healthcare',
      description: 'A talk on the applications of AI in healthcare.',
      startDate: new Date('2023-08-12T18:30:00'),
      endDate: new Date('2023-08-12T20:00:00'),
      image: 'ai-healthcare-talk.jpg',
      categories: ['Technology', 'Talk'],
    },
    {
      id: '4',
      title: 'Charity Run',
      description: 'A charity run to support a local cause.',
      startDate: new Date('2023-08-19T07:30:00'),
      endDate: new Date('2023-08-19T10:00:00'),
      image: 'charity-run.jpg',
      categories: ['Sports', 'Charity'],
    },
    {
      id: '5',
      title: 'Art Workshop: Watercolors',
      description: 'Learn watercolor painting techniques.',
      startDate: new Date('2023-09-02T14:00:00'),
      endDate: new Date('2023-09-02T16:30:00'),
      image: 'art-workshop.jpg',
      categories: ['Art', 'Workshop'],
    },
    {
      id: '6',
      title: 'Music Festival: Jazz Night',
      description: 'A night filled with soulful jazz performances.',
      startDate: new Date('2023-09-10T19:00:00'),
      endDate: new Date('2023-09-10T23:00:00'),
      image: 'jazz-night.jpg',
      categories: ['Music', 'Festival'],
    },
    {
      id: '7',
      title: 'Cooking Class: Italian Cuisine',
      description: 'Learn to cook delicious Italian dishes.',
      startDate: new Date('2023-09-16T12:30:00'),
      endDate: new Date('2023-09-16T15:00:00'),
      image: 'italian-cooking-class.jpg',
      categories: ['Food', 'Workshop'],
    },
    {
      id: '8',
      title: 'Book Club Meeting',
      description: 'Discussing the latest bestseller.',
      startDate: new Date('2023-09-23T16:00:00'),
      endDate: new Date('2023-09-23T18:00:00'),
      image: 'book-club.jpg',
      categories: ['Literature', 'Meeting'],
    }
];
  