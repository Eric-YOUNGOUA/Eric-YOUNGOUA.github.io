export const personalInfo = {
  name: "Marcel Eric YOUNGOUA TCHONGOUE",
  shortName: "Eric Youngoua",
  title: "Élève Ingénieur Informatique, Réseaux & Cybersécurité",
  degree: "Cycle Ingénieur Bac+5 (Niveau 6)",
  school: "ESAIP – École Supérieure d'Ingénieurs (Angers)",
  status: "Recherche d'un contrat d'alternance de 12 mois pour Octobre 2026",
  rhythm: "Rythme 2 semaines école / 2 semaines entreprise",
  location: "Angers (49) — Mobile toute France (Île-de-France, Nantes, Bordeaux, Lyon)",
  email: "ericyoungoua@gmail.com",
  academicEmail: "mericyoungoua.ir2027@esaip.org",
  phone: "+33 7 53 12 84 29",
  phoneDisplay: "07 53 12 84 29",
  github: "https://github.com/Eric-YOUNGOUA",
  linkedin: "https://linkedin.com/in/ericyoungoua",
  website: "https://eric-youngoua.github.io",
  address: "31 rue de la Gemmetrie, 49124, Saint-Barthélemy-d'Anjou, France",
  cvs: [
    { label: "CV Cybersécurité & Réseau", file: "cv/CV_Marcel_ERIC_Cyber.pdf", color: "cyan" },
    { label: "CV Développement Full Stack", file: "cv/CV_Marcel_ERIC_Dev.pdf", color: "blue" },
    { label: "CV Administration Systèmes", file: "cv/CV_Marcel_ERIC_Admin.pdf", color: "purple" },
    { label: "CV Polyvalent / Global", file: "cv/CV_Marcel_ERIC_Global.pdf", color: "emerald" }
  ]
};

export const bioPhilosophy = {
  lead: "Spécialiste en réseaux, cybersécurité et ingénierie logicielle, j'accompagne la modernisation et la résilience des infrastructures numériques. Face aux menaces contemporaines, je m'engage à bâtir des systèmes fiables, pérennes et durcis.",
  quote: "En production critique, ce qui n'est pas documenté n'existe pas.",
  details: [
    "Étudiant en Cycle Ingénieur à l'ESAIP Angers (majeure Réseaux et Cybersécurité), je conjugue une solide expertise en sécurisation d'infrastructures (Zero Trust, Proxmox, Active Directory AGDLP, équipements Cisco, tests d'intrusion) avec une réelle maîtrise du développement applicatif moderne (FastAPI, React Native, Spring Boot, Angular).",
    "Mes expériences pratiques – du développement de l'application de tourisme de Gomatech à la refonte d'infrastructures réseaux scolaires et à mon stage international en Bulgarie – témoignent de mon autonomie, de ma rigueur technique et de mon adaptabilité en environnement multiculturel (anglais B2)."
  ]
};

export const corePillars = [
  {
    id: "cyber",
    title: "Cybersécurité & Défense Active",
    description: "Durcissement d'OS au niveau kernel, architectures Zero Trust, détection d'intrusions Suricata, audits web OWASP ZAP, et pratique offensive continue (CEH, Kali Linux).",
    icon: "ShieldAlert",
    color: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/30",
    badge: "Sécurité Offensive & Défensive"
  },
  {
    id: "devops",
    title: "Infrastructures & Cloud DevOps",
    description: "Déploiement et orchestration de conteneurs (Kubernetes k3s, Docker Compose), virtualisation Proxmox/VMware, gestion IAM (Keycloak 2FA), supervision Grafana et pipelines CI/CD.",
    icon: "Server",
    color: "from-purple-500/20 to-indigo-500/20",
    border: "border-purple-500/30",
    badge: "Zero Trust & CI/CD"
  },
  {
    id: "dev",
    title: "Ingénierie Logicielle & IA",
    description: "Conception n-tiers et APIs REST robustes (Python FastAPI, Java Spring Boot), interfaces réactives (React, React Native, Angular) et intégration de modèles d'IA générative (LLM, NLP).",
    icon: "Code2",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30",
    badge: "Full Stack & LLM"
  }
];

export const projectCategories = [
  { id: "all", label: "Tous les projets" },
  { id: "cyber", label: "Cybersécurité & Pentest" },
  { id: "dev", label: "Full Stack & Mobile" },
  { id: "infra", label: "Cloud, DevOps & Systèmes" },
  { id: "network", label: "Réseaux & Télécoms" },
  { id: "ai", label: "IA, Data & Recherche" }
];

export const projectsList = [
  {
    id: "tourisme-drc",
    title: "Application Mobile Tourisme DRC",
    category: "dev",
    context: "Stage Développeur Full Stack • Gomatech (Juin – Août 2026)",
    featured: true,
    summary: "Application mobile complète de promotion touristique pour la RD Congo intégrant réservation d'hôtels, guides touristiques, paiement sécurisé et recommandations par IA.",
    description: "Conception architecturale et réalisation intégrale du backend et du frontend mobile. Schématisation de la base PostgreSQL, mise en œuvre d'APIs REST sous FastAPI et interface intuitive React Native.",
    highlights: [
      "Backend performant en FastAPI avec authentification sécurisée",
      "Frontend mobile cross-platform fluide en React Native",
      "Intégration d'APIs tierces : cartographie/géolocalisation, passerelles de paiement, réservations",
      "Génération automatique de contenus & recommandations via LLM local (Ollama / Hermes)",
      "Mise en place d'une stack de monitoring temps réel sous Grafana",
      "Audit de sécurité applicatif et correction de vulnérabilités critiques"
    ],
    tags: ["FastAPI", "React Native", "PostgreSQL", "Grafana", "Docker", "Ollama LLM", "REST API"],
    icon: "Smartphone"
  },
  {
    id: "k3s-zero-trust",
    title: "Cluster Kubernetes (k3s) Zero Trust",
    category: "infra",
    context: "Projet d'Infrastructure Critique • ESAIP",
    featured: true,
    summary: "Transformation d'un cluster Kubernetes k3s standard en infrastructure hautement sécurisée selon les principes Zero Trust.",
    description: "Durcissement en profondeur du système d'exploitation et isolation stricte du cluster pour garantir l'intégrité face aux intrusions et mouvements latéraux.",
    highlights: [
      "Durcissement kernel OS via sysctl, sandboxing applicatif avec Firejail et profils AppArmor",
      "Désactivation matérielle des interfaces à risque (ports USB)",
      "Centralisation et intégrité des logs systèmes via rsyslog sécurisé",
      "Surveillance réseau et détection d'intrusions en temps réel avec Suricata (IDS)",
      "Verrouillage des accès d'administration SSH par authentification multi-facteurs (MFA)",
      "Déploiement et intégration de Keycloak pour l'authentification et l'autorisation de chaque transaction du cluster"
    ],
    tags: ["Kubernetes", "k3s", "Keycloak", "Zero Trust", "Suricata IDS", "rsyslog", "AppArmor", "Linux"],
    icon: "ShieldCheck"
  },
  {
    id: "homelab-soc",
    title: "Homelab & SOC Personnel",
    category: "infra",
    context: "Infrastructure Personnelle & Laboratoire de Sécurité",
    featured: true,
    summary: "Gestion autonome d'une infrastructure privée complète servant de banc d'essai opérationnel pour la virtualisation, le routage et la cybersécurité.",
    description: "Environnement d'expérimentation quotidien reproduisant les contraintes d'une infrastructure d'entreprise distribuée et sécurisée.",
    highlights: [
      "Hyperviseur Proxmox VE hébergeant des machines virtuelles KVM et conteneurs LXC",
      "Pare-feu pfSense : règles de filtrage étanches, translation NAT, segmentation par VLANs et monitoring",
      "Serveur DNS/DHCP Pi-hole avec filtrage des requêtes malveillantes et journalisation",
      "Tunnels VPN chiffrés distants via WireGuard et Tailscale",
      "Stockage centralisé (NAS) sécurisé par SSH avec politiques de droits stricts et sauvegardes automatisées"
    ],
    tags: ["Proxmox VE", "pfSense", "Pi-hole", "WireGuard", "Tailscale", "NAS", "Grafana", "Linux"],
    icon: "Server"
  },
  {
    id: "owasp-web-audit",
    title: "Audit de Sécurité Web Applicative (OWASP ZAP)",
    category: "cyber",
    context: "Audit de Vulnérabilités & Ethical Hacking • ESAIP",
    featured: true,
    summary: "Campagne d'audit de sécurité offensive sur application web avec identification et remédiation de 15 vulnérabilités critiques.",
    description: "Utilisation de scanners et d'analyses manuelles pour tester la robustesse face aux attaques de type OWASP Top 10.",
    highlights: [
      "Détection et exploitation contrôlée de 15 failles critiques (Injections SQL, XSS, Command Injection)",
      "Développement de scripts d'automatisation en Python pour l'analyse passive et la génération de rapports",
      "Application des contre-mesures de durcissement permettant une diminution de 30% des vulnérabilités"
    ],
    tags: ["OWASP ZAP", "Python", "SQL Injection", "XSS", "Burp Suite", "Web Security"],
    icon: "Bug"
  },
  {
    id: "reseau-ecole",
    title: "Refonte & Sécurisation Réseau d'une École",
    category: "network",
    context: "Projet d'Infrastructure Réseau • ESAIP",
    featured: true,
    summary: "Audit, redesign architectural et déploiement sécurisé de l'infrastructure réseau d'un établissement d'enseignement.",
    description: "Modernisation des équipements de commutation et routage Cisco pour assurer haute disponibilité, segmentation et étanchéité.",
    highlights: [
      "Segmentation complète par VLANs (802.1Q) et configuration du routage inter-VLAN",
      "Mise en place de liens redondants haute disponibilité via EtherChannel (LACP) et FHRP (HSRP/VRRP)",
      "Déploiement et sécurisation de serveurs DHCPv4 et DHCPv6 / SLAAC",
      "Durcissement de la couche 2 : Port Security, DHCP Snooping, BPDU Guard et pare-feu périmétrique"
    ],
    tags: ["Cisco IOS", "VLAN", "EtherChannel", "FHRP", "DHCPv6", "Packet Tracer", "GNS3"],
    icon: "Network"
  },
  {
    id: "elearning-saas",
    title: "Plateforme d'E-Learning SaaS Sécurisée",
    category: "dev",
    context: "Projet Académique Full Stack • ESAIP",
    featured: true,
    summary: "Application web SaaS d'apprentissage en ligne avec séparation stricte des couches, gestion des privilèges et conformité OWASP.",
    description: "Développement itératif en méthode Agile/SCRUM avec spécifications fonctionnelles UML préalables.",
    highlights: [
      "Backend robuste en Java Spring Boot avec API REST documentée et persistance MySQL/MariaDB",
      "Interface utilisateur réactive en Angular avec navigation protégée",
      "Système d'authentification par token JWT et gestion granulaire des rôles (Étudiants, Formateurs, Admins)",
      "Revue de code, tests fonctionnels et d'intégration systématiques"
    ],
    tags: ["Java", "Spring Boot", "Angular", "MySQL", "JWT", "SCRUM", "UML"],
    icon: "GraduationCap"
  },
  {
    id: "active-directory-agdlp",
    title: "Administration Active Directory & AGDLP",
    category: "infra",
    context: "Administration Systèmes Windows Server • ESAIP",
    featured: false,
    summary: "Déploiement complet d'un domaine d'entreprise sous Windows Server avec application rigoureuse de la méthode AGDLP.",
    description: "Organisation des unités d'organisation, gestion des comptes utilisateurs, stratégies de groupe (GPO) et services d'infrastructure.",
    highlights: [
      "Mise en place de l'arborescence Active Directory selon les règles AGDLP (Account, Global, Domain Local, Permission)",
      "Déploiement des services DNS d'entreprise et serveurs DHCP",
      "Automatisation de la création de comptes et de l'audit des droits via scripts PowerShell",
      "Application de GPO de durcissement et gestion de Remote Desktop Services"
    ],
    tags: ["Windows Server", "Active Directory", "AGDLP", "PowerShell", "GPO", "DNS"],
    icon: "FolderCog"
  },
  {
    id: "ethical-hacking-lab",
    title: "Laboratoire de Pentest & Exploitation Réseau",
    category: "cyber",
    context: "Ethical Hacking & Préparation CEH",
    featured: false,
    summary: "Simulations d'attaques à toutes les couches du modèle OSI sur cibles vulnérables (Metasploitable, Windows XP) et plateformes CTF.",
    description: "Pratique intensive des méthodologies de reconnaissance, scanning, exploitation et post-exploitation.",
    highlights: [
      "Attaques de couche 2 : ARP poisoning, DHCP spoofing, VLAN hopping, attaques MITM",
      "Attaques d'authentification : Pass-the-Ticket Kerberos, brute force avec Hydra, cassage de hashes avec John the Ripper",
      "Audit Active Directory avec BloodHound et Rubeus",
      "Entraînement régulier sur les plateformes TryHackMe, Root-Me et HackTheBox"
    ],
    tags: ["Kali Linux", "Metasploit", "Wireshark", "John the Ripper", "BloodHound", "Nmap"],
    icon: "Terminal"
  },
  {
    id: "ia-resume-nlp",
    title: "IA de Résumé Automatique de Texte (NLP)",
    category: "ai",
    context: "Concours Design4Green & Projet IA • ESAIP",
    featured: false,
    summary: "Outil intelligent capable d'analyser un document textuel volumineux pour en extraire une synthèse percutante de 10 à 15 mots.",
    description: "Développement d'un pipeline de traitement du langage naturel combiné à une interface web légère et éco-conçue.",
    highlights: [
      "Modèles NLP sous Python avec PyTorch, Transformers et Hugging Face",
      "API backend Flask et interface web interactive (JavaScript)",
      "Optimisation de l'empreinte de calcul dans le cadre du concours Green IT",
      "Intégration d'APIs LLM (Claude API, Ollama Hermes) pour l'enrichissement"
    ],
    tags: ["Python", "NLP", "Flask", "PyTorch", "Transformers", "Green IT"],
    icon: "Sparkles"
  },
  {
    id: "banquise-matlab",
    title: "Analyse de la Fonte de la Banquise (Traitement d'Images)",
    category: "ai",
    context: "Projet Scientifique • ESAIP",
    featured: false,
    summary: "Application de traitement d'images satellitaires pour mesurer et modéliser l'évolution temporelle de la calotte glaciaire.",
    description: "Mise en œuvre d'algorithmes mathématiques de filtrage et segmentation morphologique sous Matlab.",
    highlights: [
      "Étude d'histogrammes, seuillage adaptatif, opérations de fermeture et extraction de contours",
      "Calcul précis de la variation de superficie de la banquise sur des séries chronologiques",
      "Génération automatique d'un rendu vidéo accéléré des étapes de régression glaciaire"
    ],
    tags: ["Matlab", "Traitement d'Images", "Segmentation", "Morphologie Mathématique"],
    icon: "Eye"
  },
  {
    id: "site-bulgarie",
    title: "Site Web Interactif International",
    category: "dev",
    context: "Stage International • University of Veliko Tarnovo (2025)",
    featured: false,
    summary: "Conception, développement et mise en ligne en autonomie complète d'un portail web interactif pour l'université bulgare.",
    description: "Projet mené intégralement en anglais, du recueil du besoin jusqu'à la livraison et la formation des utilisateurs.",
    highlights: [
      "Interface dynamique responsive en HTML5, CSS3, JavaScript et Bootstrap",
      "Raccordement à un backend sécurisé et une base de données externe",
      "Rédaction intégrale des spécifications et de la documentation technique en langue anglaise"
    ],
    tags: ["JavaScript", "HTML5", "Bootstrap", "Backend", "Erasmus", "Bulgarie"],
    icon: "Globe"
  },
  {
    id: "ml-scolaire",
    title: "Modèle Prédictif de Réussite Scolaire (Machine Learning)",
    category: "ai",
    context: "Data Science & Analyse Décisionnelle • ESAIP",
    featured: false,
    summary: "Entraînement d'un modèle prédictif supervisé permettant d'anticiper les résultats et notes d'élèves selon de multiples facteurs.",
    description: "Extraction de données par requêtes SQL complexes, préparation statistique et modélisation prédictive sous Python.",
    highlights: [
      "Requêtes d'agrégation SQL (JOIN, GROUP BY, sous-requêtes) pour nettoyer et normaliser les données",
      "Entraînement d'algorithmes sous Scikit-learn (régression et arbres de décision)",
      "Évaluation des métriques de précision (RMSE, R²) et rédaction d'un rapport décisionnel"
    ],
    tags: ["Python", "Scikit-Learn", "SQL", "Pandas", "Machine Learning"],
    icon: "BarChart3"
  },
  {
    id: "app-bancaire",
    title: "Application de Gestion Bancaire",
    category: "dev",
    context: "Projet Full Stack Avancé",
    featured: false,
    summary: "Système complet de transactions et gestion de comptes bancaires avec backend sécurisé et interface web.",
    description: "Conception du modèle entité-relation, création des repositories et services Spring Boot avec interface Angular.",
    highlights: [
      "Modélisation relationnelle complète sous MariaDB",
      "Gestion des virements, historiques et soldes en temps réel",
      "Authentification robuste et contrôle d'accès sécurisé"
    ],
    tags: ["Java", "Spring Boot", "Angular", "MariaDB", "REST"],
    icon: "CreditCard"
  },
  {
    id: "cryptographie-steganographie",
    title: "Suite Cryptographique & Stéganographie",
    category: "cyber",
    context: "Sécurité & Cryptographie Appliquée",
    featured: false,
    summary: "Logiciels de chiffrement asymétrique RSA / AES-256 et utilitaire de dissimulation de données cachées dans des images.",
    description: "Implémentation d'algorithmes cryptographiques fondamentaux et de dissimulation de messages dans les bits de poids faible.",
    highlights: [
      "Génération et échange de paires de clés publiques / privées RSA",
      "Chiffrement symétrique de fichiers par flux AES-256",
      "Module de stéganographie dissimulant du texte dans les matrices de pixels sans distorsion visuelle"
    ],
    tags: ["Cryptographie", "RSA", "AES-256", "Python", "Matlab", "Stéganographie"],
    icon: "Lock"
  },
  {
    id: "ci-cd-docker",
    title: "Pipelines CI/CD & Déploiement Conteneurisé",
    category: "infra",
    context: "DevOps & Automatisation",
    featured: false,
    summary: "Chaîne d'intégration et de déploiement continus avec Docker Compose et GitHub Actions pour architectures multi-services.",
    description: "Standardisation des environnements dev, staging et prod avec tests automatisés et stratégies de rollback.",
    highlights: [
      "Création de Dockerfiles multi-stage pour minimiser la taille des images",
      "Gestion fine des volumes, réseaux isolés et secrets d'environnement",
      "Automatisation des tests et builds sur GitHub Actions avec documentation des runbooks"
    ],
    tags: ["Docker", "Docker Compose", "GitHub Actions", "CI/CD", "DevOps"],
    icon: "Workflow"
  },
  {
    id: "ripes-riscv",
    title: "Programmation Bas Niveau en Assembleur (RISC-V)",
    category: "ai",
    context: "Architecture & Assembleur • UCLM Albacete & ESAIP",
    featured: false,
    summary: "Apprentissage approfondi du codage en assembleur et de l'architecture processeur lors de la mobilité Erasmus à l'Universidad de Castilla-La Mancha.",
    description: "Analyse fine de l'exécution dans le pipeline d'un processeur, manipulation directe des registres, de la mémoire et écriture de routines bas niveau.",
    highlights: [
      "Écriture de sous-routines optimisées et manipulation des registres en assembleur",
      "Étude des instructions machines, de la pile d'exécution et de la gestion de la mémoire",
      "Observation des aléas de pipeline et optimisation du temps d'exécution cycle par cycle"
    ],
    tags: ["Assembleur", "RISC-V", "Bas Niveau", "Architecture Processeur", "UCLM Albacete"],
    icon: "Cpu"
  },
  {
    id: "conception-si-uclm",
    title: "Conception de Systèmes d'Information & Réseaux Résilients",
    category: "network",
    context: "Ingénierie des SI • Universidad de Castilla-La Mancha (2026)",
    featured: true,
    summary: "Conception architecturale de systèmes d'information d'entreprise et mise en place d'infrastructures réseaux hautement redondantes et résilientes.",
    description: "Projet académique d'envergure mené en Espagne axé sur l'approche professionnelle de l'ingénieur ('apprendre à penser pro') : alignement stratégique du SI, résilience et tolérance aux pannes.",
    highlights: [
      "Conception globale de systèmes d'information : modélisation des processus, urbanisation du SI et sécurité",
      "Mise en place de réseaux redondants et résilients avec protocoles de haute disponibilité (FHRP, LACP, Spanning Tree)",
      "Tests de continuité d'activité et simulation de basculement sans interruption de service",
      "Adoption d'une posture professionnelle rigoureuse orientée gouvernance et exigences métier"
    ],
    tags: ["Conception SI", "Réseaux Résilients", "Haute Disponibilité", "FHRP", "UCLM Albacete", "Urbanisation SI"],
    icon: "Network"
  },
  {
    id: "serveur-dhcp-debian",
    title: "Infrastructure de Services Réseau (Debian 12)",
    category: "network",
    context: "Administration Systèmes Linux",
    featured: false,
    summary: "Mise en place d'un serveur Debian 12 hébergeant serveurs DNS (zones directe/inverse), DHCP et multisite web.",
    description: "Configuration manuelle des démons réseau ISC-DHCP, Bind9 et serveurs web Apache/Nginx.",
    highlights: [
      "Attribution dynamique d'adresses IP avec réservations pour hôtes critiques",
      "Résolution de noms locale avec validation des requêtes",
      "Hébergement mutualisé de sites virtuels avec gestion des droits"
    ],
    tags: ["Debian", "DHCP", "DNS Bind9", "Apache", "Linux"],
    icon: "ServerCog"
  },
  {
    id: "apps-android-studio",
    title: "Applications Mobiles Android Natives",
    category: "dev",
    context: "Développement Mobile • ESAIP",
    featured: false,
    summary: "Suite de trois applications Android natives : application météo temps réel, utilitaire caméra et outil de hachage de sécurité.",
    description: "Développement en Java sous Android Studio exploitant les capteurs matériels et les APIs distantes.",
    highlights: [
      "Consommation d'APIs REST avec affichage réactif des prévisions météo",
      "Gestion de la caméra Android pour la capture d'images",
      "Algorithmes de hashing de mots de passe pour la sensibilisation à la sécurité mobile"
    ],
    tags: ["Android Studio", "Java", "Mobile", "REST API"],
    icon: "AppWindow"
  },
  {
    id: "jeu-citadelles-java",
    title: "Jeu Citadelles & Logiciel de Dessin en Java",
    category: "dev",
    context: "Génie Logiciel & Programmation Orientée Objet",
    featured: false,
    summary: "Implémentation complète du jeu de société Citadelles avec interface graphique Swing/JavaFX et moteur de règles objet.",
    description: "Projet structuré en programmation orientée objet pure avec design patterns (MVC, Observer, Factory).",
    highlights: [
      "Gestion des rôles, tours de jeu, cartes de quartiers et conditions de victoire",
      "Création conjointe d'un logiciel de dessin vectoriel basique avec sélection de couleurs et formes géométriques"
    ],
    tags: ["Java", "Swing", "POO", "Design Patterns", "GUI"],
    icon: "Gamepad2"
  }
];

export const experiencesAndEducation = [
  {
    id: "gomatech",
    period: "Juin 2026 – Août 2026",
    role: "Développeur Full Stack Web / Mobile (Stage)",
    institution: "Gomatech",
    location: "France",
    type: "work",
    description: "Développement complet et finalisé de l'application mobile touristique en RD Congo : conception de la base de données PostgreSQL, développement d'APIs REST sous FastAPI, réalisation du frontend React Native, intégration de LLMs locaux (Ollama/Hermes), et monitoring en temps réel avec Grafana.",
    skills: ["FastAPI", "React Native", "PostgreSQL", "Grafana", "Ollama LLM", "Docker"]
  },
  {
    id: "uclm-erasmus",
    period: "Février 2026 – Juin 2026",
    role: "Mobilité Internationale Erasmus+ (Informatique & Réseaux)",
    institution: "Universidad de Castilla-La Mancha (UCLM)",
    location: "Albacete, Espagne",
    type: "education",
    description: "Semestre académique en Espagne : mise en place et configuration de réseaux redondants et résilients, codage en assembleur, et conception globale de systèmes d'information en adoptant une méthodologie professionnelle ('apprendre à penser pro'). Immersion linguistique en espagnol.",
    skills: ["Réseaux Résilients", "Assembleur", "Conception SI", "Haute Disponibilité", "Erasmus+", "Espagnol"]
  },
  {
    id: "esaip",
    period: "Depuis Septembre 2024 (En cours)",
    role: "Cycle Ingénieur en Informatique et Réseaux (Bac+5)",
    institution: "ESAIP – École Supérieure d'Ingénieurs",
    location: "Angers, France",
    type: "education",
    description: "Majeure Réseaux et Cybersécurité (Titre d'Ingénieur niveau 6). Formation approfondie aux infrastructures critiques, aux systèmes d'exploitation, à la sécurité offensive (CEH, OWASP, Kali), à l'administration réseau Cisco (CCNA), au DevOps et au développement logiciel full stack.",
    skills: ["Cybersécurité", "Cisco CCNA", "Zero Trust", "DevOps", "Java Spring Boot", "Python"]
  },
  {
    id: "veliko-stage",
    period: "Juin 2025 – Août 2025",
    role: "Développeur Web – Stage International",
    institution: "University of Veliko Tarnovo",
    location: "Veliko Tarnovo, Bulgarie",
    type: "work",
    description: "Projet mené en autonomie intégrale dans un cadre international : recueil des besoins, conception et développement d'un site web interactif avec backend et base de données, tests et déploiement. Communication et documentation technique 100% en langue anglaise.",
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "BDD", "Anglais B2"]
  },
  {
    id: "veliko-erasmus",
    period: "Mars 2025 – Juin 2025",
    role: "Bachelor Computer Science (Mobilité Erasmus)",
    institution: "University of Veliko Tarnovo",
    location: "Bulgarie",
    type: "education",
    description: "Semestre d'études universitaires à l'étranger dans le cadre du programme européen Erasmus+. Enseignements avancés en informatique, systèmes distribués et pratique de l'anglais technique dans un environnement multiculturel.",
    skills: ["Computer Science", "Systèmes Distribués", "Erasmus+", "Anglais"]
  },
  {
    id: "cop1",
    period: "Depuis Octobre 2024",
    role: "Bénévole Étudiant",
    institution: "Association COP1",
    location: "Angers, France",
    type: "volunteering",
    description: "Engagement actif dans une association solidaire venant en aide aux étudiants en situation de précarité : organisation de distributions alimentaires et vestimentaires gratuites, accueil, écoute et gestion de la logistique terrain.",
    skills: ["Solidarité", "Esprit d'équipe", "Sens du service", "Organisation"]
  },
  {
    id: "cpge-pcsi",
    period: "Octobre 2022 – Mai 2024",
    role: "Classes Préparatoires Scientifiques (PCSI)",
    institution: "Institut Universitaire de la Côte (IUC)",
    location: "Douala, Cameroun",
    type: "education",
    description: "Formation d'excellence en Mathématiques, Physique et Sciences de l'Ingénieur. Développement d'une forte rigueur d'analyse, d'une grande capacité de travail et d'une méthode de résolution de problèmes complexes.",
    skills: ["Mathématiques", "Physique", "Algorithmique", "Rigueur Scientifique"]
  },
  {
    id: "gmc-assurances",
    period: "Juillet 2023 – Août 2023",
    role: "Stagiaire Découverte – Réseaux & Systèmes",
    institution: "GMC Assurances",
    location: "Douala, Cameroun",
    type: "work",
    description: "Support informatique L1/L2, maintenance du parc de machines physiques, administration Windows Server selon le modèle AGDLP, découverte des outils de virtualisation (VMware) et initiation pratique aux topologies et protocoles réseau.",
    skills: ["Support L1/L2", "Windows Server", "AGDLP", "VMware", "Fondamentaux Réseau"]
  }
];

export const technicalSkills = [
  {
    category: "Cybersécurité & Pentest",
    icon: "ShieldAlert",
    color: "cyan",
    skills: [
      { name: "Zero Trust Architecture", level: "Avancé" },
      { name: "OWASP Top 10 & Web Security", level: "Avancé" },
      { name: "OWASP ZAP & Burp Suite", level: "Avancé" },
      { name: "Kali Linux / Nmap / Metasploit", level: "Avancé" },
      { name: "Suricata (IDS) & rsyslog", level: "Maîtrisé" },
      { name: "Keycloak (IAM, SSO, 2FA)", level: "Maîtrisé" },
      { name: "Durcissement OS (sysctl, AppArmor)", level: "Maîtrisé" },
      { name: "Bettercap / Hydra / John the Ripper", level: "Pratiqué" },
      { name: "Cryptographie (RSA, AES-256)", level: "Maîtrisé" }
    ]
  },
  {
    category: "Infrastructures, Systèmes & Cloud",
    icon: "Server",
    color: "purple",
    skills: [
      { name: "Kubernetes (k3s multi-nodes)", level: "Avancé" },
      { name: "Docker & Docker Compose", level: "Avancé" },
      { name: "Proxmox VE (KVM & LXC)", level: "Avancé" },
      { name: "Linux (Ubuntu Server, Debian)", level: "Avancé" },
      { name: "Windows Server (Active Directory, GPO, AGDLP)", level: "Avancé" },
      { name: "CI/CD (Git, GitHub Actions)", level: "Maîtrisé" },
      { name: "Supervision (Grafana)", level: "Maîtrisé" },
      { name: "Virtualisation VMware", level: "Maîtrisé" },
      { name: "Scripting PowerShell & Bash", level: "Avancé" }
    ]
  },
  {
    category: "Réseaux & Protocoles",
    icon: "Network",
    color: "blue",
    skills: [
      { name: "Cisco IOS (Routeurs & Switchs)", level: "Avancé" },
      { name: "VLANs & Routage Inter-VLAN (802.1Q)", level: "Avancé" },
      { name: "Redondance (EtherChannel, FHRP)", level: "Avancé" },
      { name: "Sécurité L2 (Port Security, DHCP Snooping)", level: "Avancé" },
      { name: "Serveurs DHCP & DHCPv6 / SLAAC", level: "Avancé" },
      { name: "Firewalling pfSense", level: "Maîtrisé" },
      { name: "DNS, DNSSEC & Pi-hole", level: "Maîtrisé" },
      { name: "VPN (WireGuard, Tailscale)", level: "Avancé" },
      { name: "Simulateurs (Packet Tracer, GNS3)", level: "Avancé" }
    ]
  },
  {
    category: "Développement Web & Mobile",
    icon: "Code2",
    color: "emerald",
    skills: [
      { name: "Python (FastAPI, Flask)", level: "Avancé" },
      { name: "React & React Native", level: "Avancé" },
      { name: "Java (Spring Boot)", level: "Avancé" },
      { name: "Angular", level: "Maîtrisé" },
      { name: "JavaScript / TypeScript", level: "Maîtrisé" },
      { name: "HTML5, CSS3, Tailwind CSS", level: "Avancé" },
      { name: "Android Studio (Java)", level: "Maîtrisé" },
      { name: "Bases de données SQL (PostgreSQL, MySQL)", level: "Avancé" },
      { name: "Modélisation UML (Visual Paradigm)", level: "Avancé" }
    ]
  },
  {
    category: "IA, Data & Recherche",
    icon: "Sparkles",
    color: "amber",
    skills: [
      { name: "LLM local (Ollama, Hermes) & Claude API", level: "Maîtrisé" },
      { name: "Traitement du Langage Naturel (NLP)", level: "Maîtrisé" },
      { name: "Scikit-Learn / Pandas (Machine Learning)", level: "Maîtrisé" },
      { name: "Traitement d'images (Matlab)", level: "Maîtrisé" },
      { name: "Assembleur RISC-V (Ripes)", level: "Pratiqué" },
      { name: "Sensibilisation Green IT", level: "Pratiqué" }
    ]
  },
  {
    category: "Méthodologies & Soft Skills",
    icon: "CheckCircle2",
    color: "teal",
    skills: [
      { name: "Méthodes Agiles / SCRUM (Sprint planning, backlog)", level: "Avancé" },
      { name: "Rédaction technique (Runbooks, post-mortems)", level: "Avancé" },
      { name: "Travail en contexte multiculturel (Anglais B2)", level: "Avancé" },
      { name: "Vulgarisation & Pédagogie utilisateurs", level: "Avancé" },
      { name: "Résolution d'incidents & Gestion du stress", level: "Avancé" }
    ]
  }
];

export const languages = [
  { name: "Français", level: "Langue maternelle / Natif", stars: 5 },
  { name: "Anglais", level: "B2 – Professionnel et technique (Stage et Erasmus)", stars: 4 },
  { name: "Espagnol", level: "B1/A2 – Pratique en immersion (Erasmus UCLM Albacete, 5 mois)", stars: 3 }
];

export const interests = [
  { name: "Homelab & Self-Hosting", desc: "Serveur personnel sous Proxmox, expérimentations Zero Trust, hébergement de services privés.", icon: "Server" },
  { name: "Veille Cybersécurité & CTF", desc: "Pratique sur TryHackMe / Root-Me / HackTheBox, suivi des vulnérabilités Zero-Day.", icon: "Shield" },
  { name: "Reverse Engineering", desc: "Analyse des binaires, compréhension intime du fonctionnement bas niveau des systèmes.", icon: "Search" },
  { name: "Football", desc: "Pratique sportive régulière, esprit d'équipe et dépassement de soi.", icon: "Activity" },
  { name: "Lecture", desc: "Ouvrages techniques d'architecture logicielle, géopolitique et développement personnel.", icon: "BookOpen" }
];
