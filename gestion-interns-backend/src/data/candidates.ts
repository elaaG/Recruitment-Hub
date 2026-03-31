export type CandidateStatus = 'New' | 'Reviewed' | 'Shortlisted' | 'Interview' | 'Accepted' | 'Rejected';

export type ProfileType = 'AI / Backend' | 'Frontend' | 'Full Stack' | 'Data Science' | 'DevOps' | 'Mobile';

export interface Candidate {
  id: string;
  name: string;
  email: string;
  phone?: string;
  school: string;
  status: CandidateStatus;
  source: 'Email' | 'Form' | 'LinkedIn';
  appliedDate: string;
  
  aiAnalysis: {
    score: number;
    profileType: ProfileType;
    level: 'débutant' | 'intermédiaire' | 'avancé';
    strengths: string[];
    weaknesses: string[];
    recommendation: string;
    skills: string[];
  };
  
  cvUrl?: string;
  linkedinUrl?: string;
  portfolio?: string;
  projects: string[];
  notes?: string;
}

export const mockCandidates: Candidate[] = [
  {
    id: '1',
    name: 'Sarah El Amrani',
    email: 'sarah.elamrani@insat.tn',
    phone: '+216 98 765 432',
    school: 'INSAT',
    status: 'Shortlisted',
    source: 'Email',
    appliedDate: '2026-03-20',
    aiAnalysis: {
      score: 9.2,
      profileType: 'AI / Backend',
      level: 'avancé',
      strengths: ['Advanced Python', 'Machine Learning', 'FastAPI', 'ML in Production'],
      weaknesses: ['Limited frontend experience'],
      recommendation: 'Excellent candidate for AI projects. Interview immediately.',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'FastAPI', 'Docker', 'PostgreSQL']
    },
    projects: ['Système de recommandation e-commerce', 'Chatbot NLU avec BERT', 'API de prédiction temps réel'],
    linkedinUrl: 'https://linkedin.com/in/sarah-elamrani',
    portfolio: 'https://github.com/sarahelamrani'
  },
  {
    id: '2',
    name: 'Karim Ben Salah',
    email: 'karim.bensalah@esprit.tn',
    phone: '+216 97 123 456',
    school: 'ESPRIT',
    status: 'Interview',
    source: 'LinkedIn',
    appliedDate: '2026-03-18',
    aiAnalysis: {
      score: 8.7,
      profileType: 'Full Stack',
      level: 'avancé',
      strengths: ['React expert', 'Node.js', 'Architecture scalable', 'Leadership technique'],
      weaknesses: ['Manque expérience IA/ML'],
      recommendation: 'Très bon profil full-stack avec potentiel de lead.',
      skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'AWS']
    },
    projects: ['Plateforme SaaS multi-tenant', 'Application de gestion de projet', 'Marketplace B2B'],
    linkedinUrl: 'https://linkedin.com/in/karimbensalah',
    portfolio: 'https://karimbensalah.dev'
  },
  {
    id: '3',
    name: 'Amira Mrad',
    email: 'amira.mrad@enit.tn',
    school: 'ENIT',
    status: 'New',
    source: 'Form',
    appliedDate: '2026-03-25',
    aiAnalysis: {
      score: 7.5,
      profileType: 'Frontend',
      level: 'intermédiaire',
      strengths: ['Design moderne', 'React', 'UI/UX', 'Animations'],
      weaknesses: ['Backend limité', 'Peu de projets en équipe'],
      recommendation: 'Bon profil frontend. À creuser sur expérience collaborative.',
      skills: ['React', 'Tailwind CSS', 'Figma', 'Framer Motion', 'JavaScript']
    },
    projects: ['Portfolio interactif', 'Dashboard analytics', 'Landing pages pour startups'],
    portfolio: 'https://amiramrad.design'
  },
  {
    id: '4',
    name: 'Mohamed Trabelsi',
    email: 'm.trabelsi@outlook.com',
    phone: '+216 22 456 789',
    school: 'FST',
    status: 'Reviewed',
    source: 'Email',
    appliedDate: '2026-03-22',
    aiAnalysis: {
      score: 6.8,
      profileType: 'Data Science',
      level: 'intermédiaire',
      strengths: ['Pandas', 'Visualisation données', 'SQL', 'Statistiques'],
      weaknesses: ['Peu de ML production', 'Pas de cloud'],
      recommendation: 'Profil data junior. Pourrait convenir pour projets analytiques.',
      skills: ['Python', 'Pandas', 'Matplotlib', 'SQL', 'Excel', 'Jupyter']
    },
    projects: ['Analyse ventes retail', 'Dashboard PowerBI', 'Prédiction churn clients'],
    linkedinUrl: 'https://linkedin.com/in/mohamedtrabelsi'
  },
  {
    id: '5',
    name: 'Yasmine Khalil',
    email: 'y.khalil@insat.tn',
    phone: '+216 55 789 123',
    school: 'INSAT',
    status: 'Shortlisted',
    source: 'LinkedIn',
    appliedDate: '2026-03-19',
    aiAnalysis: {
      score: 8.9,
      profileType: 'AI / Backend',
      level: 'avancé',
      strengths: ['NLP expert', 'Transformers', 'Python', 'Recherche appliquée'],
      weaknesses: ['Peu d\'expérience web'],
      recommendation: 'Excellente pour projets agents IA et NLP.',
      skills: ['Python', 'Hugging Face', 'LangChain', 'OpenAI API', 'RAG', 'Vector DB']
    },
    projects: ['Agent conversationnel multi-domaine', 'Système RAG pour docs', 'Fine-tuning LLMs'],
    linkedinUrl: 'https://linkedin.com/in/yasminekhalil',
    portfolio: 'https://github.com/yasminekhalil'
  },
  {
    id: '6',
    name: 'Omar Jebali',
    email: 'omar.jebali@gmail.com',
    school: 'ESPRIT',
    status: 'Rejected',
    source: 'Form',
    appliedDate: '2026-03-15',
    aiAnalysis: {
      score: 5.2,
      profileType: 'Frontend',
      level: 'débutant',
      strengths: ['HTML/CSS', 'Motivation'],
      weaknesses: ['Pas de framework moderne', 'Projets académiques uniquement', 'Portfolio inexistant'],
      recommendation: 'Profil trop junior pour nos besoins actuels.',
      skills: ['HTML', 'CSS', 'JavaScript basique', 'Bootstrap']
    },
    projects: ['Site vitrine personnel', 'Clone Netflix (tutoriel)'],
    notes: 'Profil intéressant mais manque d\'expérience. Suggéré de réappliquer dans 6 mois.'
  },
  {
    id: '7',
    name: 'Rania Mezghanni',
    email: 'rania.mezghanni@enit.tn',
    phone: '+216 20 345 678',
    school: 'ENIT',
    status: 'New',
    source: 'Email',
    appliedDate: '2026-03-26',
    aiAnalysis: {
      score: 8.1,
      profileType: 'DevOps',
      level: 'intermédiaire',
      strengths: ['Docker', 'Kubernetes', 'CI/CD', 'Cloud AWS'],
      weaknesses: ['Peu de dev applicatif'],
      recommendation: 'Bon profil DevOps pour infrastructure projets.',
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Terraform', 'Linux']
    },
    projects: ['Pipeline CI/CD multi-env', 'Migration cloud on-premise → AWS', 'Monitoring stack Prometheus'],
    linkedinUrl: 'https://linkedin.com/in/raniamezghanni'
  },
  {
    id: '8',
    name: 'Ayoub Hamdi',
    email: 'ayoub.hamdi@fst.tn',
    school: 'FST',
    status: 'Reviewed',
    source: 'LinkedIn',
    appliedDate: '2026-03-23',
    aiAnalysis: {
      score: 7.8,
      profileType: 'Mobile',
      level: 'intermédiaire',
      strengths: ['React Native', 'Flutter', 'UI mobile', 'Performance'],
      weaknesses: ['Backend basique', 'Pas d\'app en production'],
      recommendation: 'Profil mobile solide si besoin développement apps.',
      skills: ['React Native', 'Flutter', 'Dart', 'Firebase', 'Redux', 'REST API']
    },
    projects: ['App de livraison food', 'Wallet crypto mobile', 'Fitness tracker'],
    portfolio: 'https://github.com/ayoubhamdi'
  },
  {
    id: '9',
    name: 'Nour Hadded',
    email: 'nour.hadded@insat.tn',
    phone: '+216 28 901 234',
    school: 'INSAT',
    status: 'Accepted',
    source: 'Form',
    appliedDate: '2026-03-10',
    aiAnalysis: {
      score: 9.5,
      profileType: 'Full Stack',
      level: 'avancé',
      strengths: ['Architecture', 'React/Node expert', 'IA intégration', 'Autonomie', 'Communication'],
      weaknesses: [],
      recommendation: 'Candidat exceptionnel. À recruter immédiatement.',
      skills: ['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'OpenAI', 'AWS', 'TypeScript']
    },
    projects: ['SaaS automation marketing', 'Agent IA customer support', 'Plateforme freelancing'],
    linkedinUrl: 'https://linkedin.com/in/nourhadded',
    portfolio: 'https://nourhadded.com',
    notes: 'Accepté! Commence le 1er avril sur projet WeeFizz.'
  },
  {
    id: '10',
    name: 'Salma Toumi',
    email: 'salma.toumi@esprit.tn',
    school: 'ESPRIT',
    status: 'Interview',
    source: 'LinkedIn',
    appliedDate: '2026-03-21',
    aiAnalysis: {
      score: 8.3,
      profileType: 'Full Stack',
      level: 'intermédiaire',
      strengths: ['Vue.js', 'Laravel', 'API design', 'Testing'],
      weaknesses: ['Pas de TypeScript', 'Peu de CI/CD'],
      recommendation: 'Bon profil, vérifier adaptabilité stack React.',
      skills: ['Vue.js', 'Laravel', 'PHP', 'MySQL', 'Jest', 'Git']
    },
    projects: ['CRM sur mesure', 'E-commerce multi-vendor', 'Blog système commentaires'],
    linkedinUrl: 'https://linkedin.com/in/salmatoumi'
  }
];

export const projectMatches = {
  'WeeFizz': ['1', '9', '2'],
  'Agents IA': ['1', '5', '9'],
  'Frontend': ['3', '10'],
  'Backend': ['2', '4', '7']
};