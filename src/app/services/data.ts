import { TimelineEntry } from '../models/TimelineEntry';

export const experience: TimelineEntry[] = [
    {
        title: 'Software Developer - Livehire',
        employmentType: 'Full-time',
        // tslint:disable-next-line: max-line-length
        description: 'Working with Angular, angular.js and .NET to build and maintain livehire.com.',
        logo: '/assets/livehire.svg',
        start: new Date('2021/04/19')
    },
    {
        title: 'Graduate Developer - Bankwest',
        employmentType: 'Full-time',
        // tslint:disable-next-line: max-line-length
        description: 'The Bankwest graduate program consists of 4, 6 month roatations in different teams around the bank. I am currently in my first rotation, where I have been using angularjs, Angular 5, Oracle databases, and .NET based APIs to maintain internal bank tools. So far I have received ongoing training in secure programming practices, with further training to come.',
        logo: '/assets/bankwest.png',
        start: new Date('2020/02/17'),
        end: new Date('2021/04/01')
    },
    {
        title: 'Web Developer - Scotch College',
        employmentType: 'Casual',
        // tslint:disable-next-line: max-line-length
        description: 'After recognising my skills as a software engineer, I was offered additional work with the college, helping to develop their growing in house software solutions. I was involved with the planning and development of a Django application to help the college track the academic results of students as they progress through the years, helping to identify if a student may need more support or provided more opportunities to learn.',
        logo: '/assets/scotch.svg',
        start: new Date('2019-09-01'),
        end: new Date('2020-01-01')
    },
    {
        title: '1Degree - Scotch College',
        employmentType: 'Casual',
        // tslint:disable-next-line: max-line-length
        description: 'IT support at Scotch College in Perth. I returned to my position at Scotch in 2019 after returning from New Zealand. I helped Staff and Students with any IT device or service provided by the school, liaising with higher level technical staff if required. I also spent a lot of time documenting processes at the school, writing documents for both IT staff and the general community, adjusting my language accordingly.',
        logo: '/assets/scotch.svg',
        start: new Date('2019-03-01'),
        end: new Date('2019-12-01')
    },
    {
        title: 'Software Engineer - Cryptographic Gold / Australis.io',
        employmentType: 'Full-time',
        // tslint:disable-next-line: max-line-length
        description: 'Working remotely, I built an exchange from the ground up using Angular 6 for the front-end and backend using typescript and node.js. The backend consisted of user account management, a crypto payments system I built and a matching engine for resolving the trades. I also built an ICO platform using ejs, UIKit and node. ',
        logo: '/assets/australis.png',
        start: new Date('2018-02-01'),
        end: new Date('2019-02-01'),
        images: [
            {
                src: '/assets/australis-ico.png',
                thumb: '/assets/australis-ico-thumb.png',
                caption: 'One of the websites I designed and build for Australis'
            },
            {
                src: '/assets/exchange-1.jpg',
                thumb: '/assets/exchange-1-thumb.png',
                caption: 'Intermediate exchange on australis.io'
            },
            {
                src: '/assets/exchange-2.jpg',
                thumb: '/assets/exchange-2-thumb.png',
                caption: 'Basic exchange on australis.io'
            }
        ]
    },
    {
        title: '1Degree - Scotch College',
        employmentType: 'Casual',
        // tslint:disable-next-line: max-line-length
        description: 'IT support at Scotch College in Perth. I helped Staff and Students with any IT device or service provided by the school, liaising with higher level technical staff if required. I also spent a lot of time documenting processes at the school, writing documents for both IT staff and the general community, adjusting my language accordingly. I left my position at Scotch at the end of 2017 to move to New Zealand to live with my partner.',
        logo: '/assets/scotch.svg',
        start: new Date('2016-03-01'),
        end: new Date('2018-01-01')
    },
    {
        title: 'Software Engineer - Progressive Medical / Hivum',
        employmentType: 'Part-time',
        // tslint:disable-next-line: max-line-length
        description: 'After working on a university based project with Progressive Medical, I was given the opportunity to come and work on commercial products with the team. I gained experience using the ionic framework as well as databases and backend services written in node and PHP. ',
        logo: '/assets/progressive-medical.png',
        start: new Date('2017-06-01'),
        end: new Date('2017-12-01')
    }
];

export const projects: TimelineEntry[] = [
    {
        title: 'No-eu - Express.js Middleware',
        // tslint:disable-next-line: max-line-length
        description: 'I built No-eu for a bit of practice with building custom express middleware. It basically redirects all requests originating from countries in the EU to a page you specify. I had the idea around the time GDPR was in the news and some companies said they would just block all EU traffic instead of attempting to comply, so I thought it could be a fun challenge. It\'s all open source and open for anyone to use through NPM.',
        logo: '/assets/no-eu.png',
        start: new Date('2018/11/19'),
        event: true,
        links: [
            {
                text: 'Code',
                url: 'https://github.com/quaz4/no-eu'
            },
            {
                text: 'npm',
                url: 'https://www.npmjs.com/package/no-eu'
            }
        ]
    },
    {
        title: 'Yaft - Ionic App',
        // tslint:disable-next-line: max-line-length
        description: 'Yaft is an app I created to fill a gap in the workout management tools available. It was designed to be similar to trello lists and make planning a workout simple. I built it using the Ionic 3 framework, using Typescript, HTML, SCSS and Angular.',
        logo: '/assets/yaft-cut.png',
        start: new Date('2017-12-31'),
        event: true,
        links: [
            {
                text: 'Code',
                url: 'https://github.com/quaz4/Yaft'
            },
            {
                text: 'Play Store',
                url: 'https://play.google.com/store/apps/details?id=art.willstew.yaft'
            }
        ],
        images: [
            {
                src: '/assets/yaft.png',
                thumb: '/assets/yaft-thumb.png',
                caption: 'A screenshot of the yaft app'
            }
        ]
    },
];

export const certs: TimelineEntry[] = [
    {
        title: 'BSc(Computing) - Curtin University',
        // tslint:disable-next-line: max-line-length
        description: 'Bachelor of Science, computing. I completed my computing degree at the end of 2019, having excelled at my industry units and receiving a letter of academic excellence. I gained knowledge of advanced computing concepts in both theory and practice. I took a break from my studies in 2018 to work full time as a software engineer while living in New Zealand, a decision I believe to be one of my best.',
        logo: '/assets/curtin.jpg',
        start: new Date('2015/03/01'),
        end: new Date('2019/12/01')
    },
    {
        title: 'Letter of Academic Excellence - Curtin University',
        description: 'Earned a semester weighted average of 80 or higher when taking 75 credits or more.',
        logo: '/assets/curtin.jpg',
        start: new Date('2019/07/01'),
        event: true
    },
];
