export const siteConfig = {
  name: 'Vishnu Santhosh',
  tagline: "Notes from an engineer who can't stop asking why.",
  username: 'vishnu',
  role: 'Software Engineer',
  currentActivity: 'immersed in Linux kernel and driver development at',
  sitePhilosophy: 'Exploring the questions that code alone can\'t answer.',
  intro: `Hi, I'm Vishnu.

I'm a software engineer focused on low-level systems programming.

Currently immersed in Linux kernel and driver development at Qualcomm.

Exploring the questions that code alone can't answer.`,
  
  photoUrl: 'https://github.com/vishnu-santhosh.png',
  
  experience: [
    {
      period: '2024 → Present',
      role: 'Software Engineer',
      company: 'Qualcomm',
      link: 'https://www.qualcomm.com/',
      description: 'Linux kernel and driver development.'
    },
    {
      period: '2022 → 2024',
      role: 'Engineer',
      company: 'Previous Company',
      link: 'https://company.com/',
      description: 'Design and implementation of systems software.'
    }
  ],
  
  otherPursuits: `Outside of work, I'm writing about systems programming, operating system internals, and mentoring junior engineers.`,
  
  social: {
    github: 'https://github.com/vishnu-santhosh',
    linkedin: 'https://linkedin.com/in/vishnu-santhosh',
    twitter: 'https://twitter.com/vishnu',
    email: 'vishnu@example.com'
  },

  newsletter: {
    enabled: false,
    provider: 'buttondown',
    url: 'https://buttondown.email/vishnu'
  }
};

export const navigation = [
  { path: '/', label: 'home' },
  { path: '/articles', label: 'articles' },
  { path: '/about', label: 'about' }
];
