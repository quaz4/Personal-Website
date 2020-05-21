import { TimelineEntry } from '../models/TimelineEntry';

export const data: TimelineEntry[] = [
    {
        title: 'Bankwest',
        employmentType: 'Full-time',
        // tslint:disable-next-line: max-line-length
        description: 'The Bankwest graduate program consists of 4, 6 month roatations in different teams around the bank. I am currently in my first rotation, where I have been using angularjs, Angular 5, Oracle databases, and .NET based APIs to maintain internal bank tools. So far I have received ongoing training in secure programming practices, with further training to come.',
        logo: '/assets/bankwest.png',
        start: new Date('2020/02/17')
    },
    {
        title: 'Curtin University',
        // tslint:disable-next-line: max-line-length
        description: 'Bachelor of Science, computing. I completed my computing degree at the end of 2019, having excelled at my industry units and receiving a letter of academic excellence. I gained knowledge of advanced computing concepts in both theory and practice.',
        logo: '/assets/curtin.jpg',
        start: new Date('2015/03/01'),
        end: new Date('2019/12/01')
    },
    {
        title: 'Scotch College',
        employmentType: 'Casual',
        // tslint:disable-next-line: max-line-length
        description: 'After recognising my skills as a software engineer, I was offered additional work with the college, helping to develop their growing in house software solutions. I was involved with the planning and development of a Django application to help the college track the academic results of students as they progress through the years, helping to identify if a student may need more support or provided more opportunities to learn.',
        logo: '/assets/scotch.svg',
        start: new Date(),
    },
    {
        title: 'Scotch College',
        employmentType: 'Casual',
        // tslint:disable-next-line: max-line-length
        description: 'IT support at Scotch College in Perth. I returned to my position at Scotch in 2019 after returning from New Zealand. I helped Staff and Students with any IT device or service provided by the school, liaising with higher level technical staff if required. I also spent a lot of time documenting processes at the school, writing documents for both IT staff and the general community, adjusting my language accordingly.',
        logo: '/assets/scotch.svg',
        start: new Date(),
    },
    {
        title: 'Cryptographic Gold / Australis.io',
        employmentType: 'Full-time',
        // tslint:disable-next-line: max-line-length
        description: 'Working remotely, I built an exchange from the ground up using Angular 6 for the front-end and backend using typescript and node.js. The backend consisted of user account management, a crypto payments system I built and a matching engine for resolving the trades. I also built an ICO platform using ejs, UIKit and node. ',
        logo: '/assets/australis.png',
        start: new Date(),
    },
    {
        title: 'Scotch College',
        employmentType: 'Casual',
        // tslint:disable-next-line: max-line-length
        description: 'IT support at Scotch College in Perth. I helped Staff and Students with any IT device or service provided by the school, liaising with higher level technical staff if required. I also spent a lot of time documenting processes at the school, writing documents for both IT staff and the general community, adjusting my language accordingly. I left my position at Scotch at the end of 2017 to move to New Zealand to live with my partner.',
        logo: '/assets/scotch.svg',
        start: new Date(),
    },
    {
        title: 'Progressive Medical / Hivum',
        employmentType: 'Part-time',
        // tslint:disable-next-line: max-line-length
        description: 'After working on a university based project with Progressive Medical, I was given the opportunity to come and work on commercial products with the team. I gained experience using the ionic framework as well as databases and backend services written in node and PHP. ',
        logo: '/assets/progressive-medical.png',
        start: new Date(),
    }
];
