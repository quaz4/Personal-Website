import { TimelineEntry } from '../models/TimelineEntry';

export const data: TimelineEntry[] = [
    {
        title: 'Bankwest',
        description: 'Bankwest graduate program',
        logo: '/assets/bankwest.png',
        start: new Date(),
    },
    {
        title: 'Scotch College',
        description: 'IT support at Scotch College in Perth. I help Staff and Students with any IT device or service provided by the school, liaising with higher level technical staff if required. I also spend a lot of time documenting processes at the school, writing documents for both IT staff and the general community, adjusting my language accordingly.',
        logo: '/assets/scotch.svg',
        start: new Date(),
    },
    {
        title: 'Cryptographic Gold / Australis.io',
        description: 'Working remotely, I built an exchange from the ground up using Angular 6 for the front-end and backend using typescript and node.js. The backend consisted of user account management, a crypto payments system I built and a matching engine for resolving the trades. I also built an ICO platform using ejs, UIKit and node. ',
        logo: '/assets/australis.png',
        start: new Date(),
    }
];
