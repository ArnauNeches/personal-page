const experience = [
  {
    id: 'research-assistant',
    organization: 'Universidad de Sevilla',
    role: 'Undergraduate Researcher',
    location: 'Sevilla, Spain',
    startDate: 'jul. 2025',
    endDate: null,
    url: 'https://grupo.us.es/minerva/',
    summary:
      'Undergraduate researcher at MINERVA, developing feature-selection methods, with two papers accepted at CAEPIA 2026.',
    details: {
      description:
        'Undergraduate researcher at MINERVA, an artificial intelligence and data science research lab at Universidad de Sevilla. Developed and evaluated two feature-selection methods designed to better capture interactions between features, leading the research, implementation, and experiments across synthetic and real-world datasets. This work led to a first-author paper accepted at CAEPIA 2026, alongside a second accepted paper as a contributing author. Now starting a new line of work applying deep learning to cancer image detection for a final year thesis.',
      group: 'MINERVA (Artificial Intelligence Research Lab)',
    },
    relatedLink: { label: 'See publications' },
  },
  {
    id: 'welyto-lead-software-engineer',
    organization: 'Welyto',
    role: 'Lead Software Engineer',
    location: 'Seville, Spain',
    startDate: 'apr. 2026',
    endDate: 'aug. 2026',
    url: 'https://www.welyto.com/',
    summary:
      'Led software development for a conversational AI device for older adults, deployed to 50 paying beta families.',
    details: {
      description:
        'Led the software development of Welyto\'s conversational AI device for older adults, spanning backend architecture, cloud infrastructure, AI integration, real-time device communication, and the family-facing application. Built and deployed the backend and device-cloud platform using Python, FastAPI, PostgreSQL, WebSockets, Google Cloud, Vertex AI/Gemini, and React. Took the product into production with 50 paying beta families using physical devices, supporting hundreds of real-world conversations and contributing to the architecture of the next-generation product.',
    },
  },
  {
    id: 'construction-internship',
    organization: 'Acoplan',
    role: 'Technical assistant',
    location: 'Seville',
    startDate: 'jun. 2023',
    endDate: 'jul. 2023',
    url: 'https://acoplan.es',
    summary:
      'Technical assistant internship at Acoplan, co-authoring a sector report on photovoltaic construction timelines.',
    details: {
      description:
        'Technical assistant work in Excel for Acoplan, a project management and scheduling consultancy focused on renewable energy construction. Co-authored a sector report on real construction times for photovoltaic plants, published by Acoplan and distributed by the Colegio Oficial de Ingenieros Industriales de Andalucía Occidental to help the industry plan project timelines more realistically.',
    },
    relatedLink: {
      label: 'Read the report',
      href: 'https://www.linkedin.com/posts/colegio-o--de-ingenieros-industriales_acoplan-project-management-a-trav%C3%A9s-de-activity-7159220411866456064-qHjS',
    },
  },
]

export default experience
