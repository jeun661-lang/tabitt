import { Translations } from '../types';

export const en: Translations = {
  nav: {
    types: 'Types',
    tripPass: 'Trip Pass',
    startTest: 'Take the Test',
  },
  hero: {
    brandLabel: 'tabi(여행하다, 旅) + tt(travel to)',
    brandMeaning: 'to travel',
    englishSlogan: 'Find your Tabitt tone',
    mainTitle: 'Discover your travel style',
    ctaButton: "Let's find out!",
    subInfo: '12 questions · about 5 min · no sign-up needed',
  },
  journey: {
    title: 'Your journey starts in 3 steps',
    steps: [
      {
        title: 'Find My Travel Type',
        description:
          'Answer 12 questions to discover your travel style.',
        tag: 'Free · 5 min',
      },
      {
        title: 'Get AI-Powered Guide',
        description:
          'AI recommends restaurants, spots, and routes tailored to your type.',
        tag: 'Available with Trip Pass',
      },
      {
        title: 'Ask Anytime on the Go',
        description:
          'What to eat? Where to go? Ask AI anytime during your trip.',
        tag: 'Coming soon',
      },
    ],
  },
  typeCards: {
    title: 'What kind of traveler are you?',
    subtitle: 'Meet the five traveler types',
  },
  pricing: {
    title: 'Start your journey with a Trip Pass',
    subtitle: 'The perfect travel guide for your type, all in one pass.',
    comingSoon: 'Coming soon',
    comingSoonLabel: 'Coming Soon',
    morePassesLabel: 'More passes in the works',
    popular: 'Popular',
    perTrip: '/trip',
    emailPlaceholder: 'Enter your email',
    notifyButton: 'Notify me',
    notifySuccess: "You're on the list! We'll let you know when it launches.",
    plans: [
      {
        name: 'Single City Pass',
        description: 'Tokyo, Osaka, etc. · 3–4 days',
        features: ['Real-time type-matched tips', 'Real-time location-based guide', 'Real-time local insider alerts', 'Curated restaurants & spots'],
      },
      {
        name: 'Deep Animation Pass',
        description: 'Anime pilgrimage specialist guide',
        features: ['Anime location spot guide', 'Scene vs real-life photo spots', 'Optimal routes by title', 'Nearby collab cafés & merch shops'],
      },
      {
        name: 'Deep City Pass',
        description: 'Hokkaido, Okinawa, etc. · 5–7 days',
        features: ['Real-time type-matched tips', 'Location-based local guide', 'Local insider alerts', 'Curated restaurants & spots'],
      },
      {
        name: 'Deep Travel Pass',
        description: 'Tokyo + Osaka, multi-city trips',
        features: ['Real-time type-matched tips', 'Location-based local guide', 'Local insider alerts', 'Curated restaurants & spots'],
      },
    ],
  },
  typeDetail: {
    title: 'What kind of traveler am I?',
    subtitle: 'Tap each type to learn more',
    faqTitle: 'What is Tabitt?',
    faqContent:
      "Tabitt combines tabi (旅, 'travel' in Japanese) and tt (travel to). We help you discover your travel personality and experience trips tailored to your style.",
  },
  footer: {
    brandDescription: 'tabi(旅) + tt(travel to)\nDiscover your travel personality and experience trips your way.',
    quickLinks: 'Quick Links',
    social: 'Social',
    typesLink: 'Types',
    testLink: 'Type Test',
    tripPassLink: 'Trip Pass',
    copyright: '© 2026 Tabitt. All rights reserved.',
  },
  test: {
    guideText: 'Pick whichever feels more like you',
    prevButton: '← Back',
    loadingTitle: 'Analyzing your Tabitt tone...',
    loadingSubtitle: 'Just a moment',
  },
  result: {
    toneIntro: 'Your Tabitt tone is...',
    sharePrompt: 'Share with friends!',
    saveImage: 'Save image',
    kakao: 'KakaoTalk',
    twitter: 'Twitter',
    copyLink: 'Copy link',
    copied: 'Copied!',
    notifyTitle: 'Get notified when Trip Pass launches',
    notifySubtitle: 'Your type-matched travel guide is coming soon!',
    notifyButton: 'Notify me',
    notifySuccess: "You're on the list! We'll notify you at launch.",
    emailPlaceholder: 'Your email',
    retakeTest: 'Retake test',
    browseTypes: 'Browse other types',
    notFound: 'Result not found.',
    retakeButton: 'Take the test again',
  },
  community: {
    title: 'Tabitt Community',
    subtitle: 'Real stories from real travelers',
    comingSoon: 'Community opening soon!',
    notifyButton: 'Notify me when it opens',
    notifySuccess: "You're on the list! We'll let you know.",
  },
  profile: {
    loginRequired: 'Create your profile',
    loginDescription: 'Set your nickname and start collecting travel badges.',
    setNickname: 'Set nickname',
    nicknamePlaceholder: 'Your nickname',
    nicknameMax: 'Max 10 characters',
    start: 'Start',
    skipToTest: 'Take the type test first →',
    edit: 'edit',
    save: 'save',
    takeTestFirst: 'Take the type test first →',
    typeBadges: 'Traveler Type Badges',
    cityBadges: 'City Badges',
    areaBadges: 'Area Badges',
    visitTracking: 'Visit tracking will be available after Trip Pass launches.',
  },
  types: {
    shiba: {
      name: 'Shiba',
      subTitle: 'The Planner',
      description: 'Master of the perfect itinerary',
      detailedDescription:
        "80% of the trip is done before departure. Restaurants booked by the hour, 30 pins on Google Maps, and a 3-second answer to 'where next?' Plan B is always ready. Even does expense tracking after the trip.",
      englishSubTitle: 'The master planner with a perfect itinerary',
    },
    cat: {
      name: 'Cat',
      subTitle: 'The Explorer',
      description: 'The hidden-gem info collector',
      detailedDescription:
        'Mainstream spots? Boring. Digs through 5 pages of blogs, translates local reviews, even checks Google Street View. "I bet nobody knows this place" is the ultimate compliment. Gathering info is half the trip.',
      englishSubTitle: 'The hidden-gem hunter who digs deep',
    },
    tanuki: {
      name: 'Tanuki',
      subTitle: 'The Pioneer',
      description: 'Trailblazer of uncharted paths',
      detailedDescription:
        'Tourist spots? Pass. Creates unique routes to places nobody visits. Failures become the best travel stories. Loves sharing "my own course" after the trip.',
      englishSubTitle: 'The trailblazer who carves a new path',
    },
    fox: {
      name: 'Fox',
      subTitle: 'The Adventurer',
      description: 'Spontaneous seeker of the unexpected',
      detailedDescription:
        'Only 20% planned. Sets a rough direction and decides the rest on the spot. Follows delicious smells, changes routes on local tips. The unexpected becomes the highlight.',
      englishSubTitle: 'The spontaneous adventurer who trusts the moment',
    },
    deer: {
      name: 'Deer',
      subTitle: 'The Wanderer',
      description: 'A soulful drifter who flows with the vibe',
      detailedDescription:
        "Efficiency doesn't matter — if this moment feels good, that's the best trip. Half a day at a café, standing in an alley photographing the sky. Comes home with few photos but full of feelings.",
      englishSubTitle: 'The wanderer who flows with the vibe',
    },
  },
  questions: [
    { text: 'When I book a flight, I...', options: ['Already compared lowest prices 2 months ahead', 'Carefully check seat layout and transit times from reviews', 'Skip the main airport for a closer regional one', 'Book quickly if the price looks right', 'Impulse-book after thinking "let\'s just go!"'] },
    { text: 'When exchanging currency, I...', options: ['Track exchange rates and pick the best timing', 'Compare fees across different exchange options', 'Already know local ATMs give better rates', 'Exchange roughly what you need at the airport', 'Just use a card — barely exchange anything'] },
    { text: 'When booking a place to stay, I...', options: ['Consider location, routes, and check-in times for the optimal pick', 'Read at least 100 reviews and check actual photos', 'Hunt for unique local guesthouses nobody knows', 'Decent location + clean = booked, done', "Same-day booking based on today's mood is fine"] },
    { text: 'At the duty-free shop before departure, I...', options: ['Shop efficiently from a pre-made list', 'Compare with online prices to check if it\'s really a deal', 'Skip duty-free — buying local is more fun', 'Grab something if it catches your eye', 'Sip coffee at a café while waiting for the flight'] },
    { text: 'When I arrive at a Japanese airport, I...', options: ['Start heading to the hotel via your pre-researched route', 'Check for hidden airport restaurants or limited-edition stores', 'Skip the transit pass and try moving like a local', 'Step outside and just breathe in the air first', "No rush — explore the airport and take it slow"] },
    { text: 'If a friend suddenly says "let\'s hang out tomorrow"...', options: ['Check tomorrow\'s schedule first', 'Ask "what are we doing?" for specifics', 'Suggest "let\'s try that new place"', '"OK!" — details can wait till tomorrow', '"Sure~ I\'m fine with whatever"'] },
    { text: 'When picking a restaurant, I...', options: ['Pick places rated 4.5+ with lots of reviews', 'Deep-dive blogs for local insider reviews', "Won't rest until you find a place nobody knows", "Walk in if something smells good nearby", 'Good vibes matter more than great food'] },
    { text: 'My most memorable travel moment is...', options: ['That perfect day when everything went as planned', 'Discovering a place nobody knew about', 'When your own route turned out amazing', 'An unexpected happening that became a memory', 'A quiet afternoon doing absolutely nothing'] },
    { text: '40-minute train ride to my destination, I...', options: ['Pre-checked transfers and take the optimal route', 'Look out the window and search for interesting station names', 'Deliberately get off one stop early and walk', 'Listen to music and people-watch', "Might doze off and miss the stop — but that's travel too"] },
    { text: 'The shop I wanted to visit is closed...', options: ['Head to your pre-saved Plan B shop', 'Start searching — there might be something better nearby', "Even better — explore around and something will come up", 'Walk into whatever shop is next door', 'Just sit on a nearby bench and rest'] },
    { text: 'When I walk into a convenience store, I...', options: ['Check for pre-researched limited-edition items', 'Observe what locals are buying', 'Pick something unfamiliar you can\'t get at home', 'Grab whatever catches your eye', 'Buy a drink and people-watch outside'] },
    { text: 'Back at the hotel at 10 PM, I...', options: ["Review today's schedule and finalize tomorrow's route", "Organize notes from today's discoveries + research tomorrow's spots", 'Still have energy — head out for a night walk', 'Find a nearby izakaya for one more drink', 'Turn off the lights and slowly replay the day'] },
  ],
};
