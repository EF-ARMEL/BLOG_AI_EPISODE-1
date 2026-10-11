import { Article } from './types';

export const article: Article = {
  slug: 'apprendre-vibe-coding-debutant',
  title: 'Apprendre le vibe coding en 2026 : votre premier projet, sans brûler les étapes',
  metaTitle: 'Apprendre le vibe coding en 2026 : guide pour débutants',
  metaDescription: 'Apprenez le vibe coding avec un premier mini-blog : choix de l\'outil, prompts, tests et sécurité pour progresser sans expérience en programmation.',
  category: 'Création avec l\'IA',
  publishedAt: '2026-10-09',
  author: 'Nousdev',
  intro: [
    {
      type: 'p',
      lead: true,
      content: [
        'Créer un site en décrivant ce que vous voulez à une intelligence artificielle paraît presque trop simple. Vous écrivez quelques phrases, une interface apparaît, et vous pouvez déjà cliquer sur des boutons.',
      ]
    },
    {
      type: 'p',
      content: [
        'Mais entre une démonstration séduisante et un projet qui fonctionne vraiment, il reste un chemin : définir le besoin, vérifier les résultats, comprendre où vont les données et corriger les erreurs.',
      ]
    },
    {
      type: 'p',
      content: [
        'Pour débuter, vous n\'avez pas besoin de connaître tous les langages de programmation. Vous avez besoin d\'un petit projet, d\'une méthode de travail et d\'un moyen de vérifier ce que l\'IA produit.',
      ]
    },
    {
      type: 'p',
      content: [
        'Ce guide vous propose de commencer avec un exemple concret : un mini-blog consacré à un sujet que vous connaissez. Pas une plateforme complète avec abonnements, paiements et espace communautaire. Juste une première version utile, que vous pourrez expliquer et améliorer.',
      ]
    }
  ],
  sections: [
    {
      id: 'creer-avec-lia-ne-veut-pas-dire-lui-confier-toutes-les-decisions',
      title: 'Créer avec l\'IA ne veut pas dire lui confier toutes les décisions',
      blocks: [
        {
          type: 'p',
          content: [
            'Dans son usage courant, le terme « vibe coding » désigne une manière de créer des logiciels en formulant ses demandes en langage naturel, puis en faisant évoluer le code généré par une IA. L\'article d\'IQ Project présente cette approche comme une porte d\'entrée pour les personnes sans expérience technique.',
            { note: 1 }
          ]
        },
        {
          type: 'p',
          content: [
            'Dans ce guide, nous retiendrons une pratique prudente : utiliser l\'IA pour construire, tout en apprenant à comprendre et à contrôler les résultats. Le terme est parfois employé pour une pratique beaucoup plus spontanée, où l\'on accepte le code sans l\'examiner. Ce n\'est pas le modèle à suivre si votre projet doit accueillir de vrais utilisateurs.',
          ]
        },
        {
          type: 'p',
          content: [
            'Votre rôle ne disparaît pas. Il change. Vous devez notamment décider :',
          ]
        },
        {
          type: 'list',
          items: [
            ['à qui s\'adresse le projet ;'],
            ['quel problème il résout ;'],
            ['ce qui doit réellement fonctionner ;'],
            ['comment reconnaître un résultat correct ;'],
            ['quelles informations ne doivent jamais être exposées.'],
          ]
        },
        {
          type: 'p',
          content: [
            'Un bouton visible ne prouve pas qu\'un message sera envoyé. Une page de connexion ne prouve pas que les données sont protégées. Et une application qui fonctionne une fois peut encore échouer dans d\'autres situations.',
          ]
        },
        {
          type: 'quote',
          before: 'L\'IA peut vous aider à avancer, mais ',
          mark: 'son assurance ne constitue pas une preuve.',
          after: ''
        }
      ]
    },
    {
      id: 'choisissez-un-projet-assez-petit-pour-pouvoir-le-terminer',
      title: 'Choisissez un projet assez petit pour pouvoir le terminer',
      blocks: [
        {
          type: 'p',
          content: [
            'Le premier projet doit vous apprendre une méthode, pas vous obliger à résoudre dix problèmes à la fois.',
          ]
        },
        {
          type: 'p',
          content: [
            'Un mini-blog est un bon exercice parce que son objectif est facile à comprendre : permettre à quelqu\'un de découvrir vos articles et de les lire confortablement.',
          ]
        },
        {
          type: 'p',
          content: [
            'Pour la première version, limitez-vous à :',
          ]
        },
        {
          type: 'list',
          items: [
            ['une page d\'accueil qui présente le sujet du blog ;'],
            ['une liste de trois articles ;'],
            ['une page de lecture pour chaque article ;'],
            ['une navigation simple ;'],
            ['une présentation adaptée au téléphone.'],
          ]
        },
        {
          type: 'p',
          content: [
            'Écartez provisoirement les comptes utilisateurs, commentaires, paiements, statistiques avancées et newsletters automatisées. Vous pourrez les examiner plus tard si un besoin réel apparaît.',
          ]
        },
        {
          type: 'p',
          content: [
            'Votre première réussite n\'est pas d\'avoir beaucoup de fonctionnalités. C\'est d\'avoir un petit parcours qui fonctionne de bout en bout.',
          ]
        },
        {
          type: 'p',
          content: [
            'Pour ce blog, le parcours est simple : arriver sur l\'accueil, choisir un article, le lire, puis revenir à la liste.',
          ]
        }
      ]
    },
    {
      id: 'ecrivez-le-brief-avant-le-premier-prompt',
      title: 'Écrivez le brief avant le premier prompt',
      blocks: [
        {
          type: 'p',
          content: [
            'Un prompt est l\'instruction que vous adressez à l\'IA. Pour être utile, il doit décrire davantage qu\'une apparence.',
          ]
        },
        {
          type: 'p',
          content: [
            '« Fais-moi un beau blog moderne » laisse presque toutes les décisions ouvertes. L\'IA devra deviner le public, le contenu, les pages et les comportements attendus.',
          ]
        },
        {
          type: 'p',
          content: [
            'Commencez plutôt par répondre à cinq questions :',
          ]
        },
        {
          type: 'table',
          head: ['Question', 'Exemple pour votre mini-blog'],
          rows: [
            ['Pour qui ?', 'Des débutants qui veulent créer avec l\'IA'],
            ['Pour quoi faire ?', 'Comprendre un sujet et appliquer un exercice'],
            ['Avec quel contenu ?', 'Trois articles, une courte présentation et des catégories'],
            ['Avec quelles limites ?', 'Pas de compte, de paiement ni de formulaire dans la première version'],
            ['Comment vérifier ?', 'Chaque article s\'ouvre, la navigation fonctionne et le texte reste lisible sur mobile'],
          ]
        },
        {
          type: 'p',
          content: [
            'Ce travail vous aide aussi à repérer les idées inutiles. Si une fonctionnalité ne sert pas le parcours principal, elle peut probablement attendre.',
          ]
        },
        {
          type: 'p',
          content: [
            'Les recommandations officielles de Bolt vont dans le même sens : planifier la demande initiale, ajouter les fonctionnalités progressivement et préciser ce qui doit ou ne doit pas changer.',
            { note: 2 }
          ]
        },
        {
          type: 'prompt',
          id: 'premier-prompt',
          label: 'Un premier prompt que vous pouvez adapter',
          text: 'Je veux créer un mini-blog destiné aux débutants qui découvrent la création de sites avec l\'IA. La première version comprend un accueil, une liste de trois articles et leurs pages de lecture. Utilise des contenus d\'exemple clairement identifiés. Je veux une typographie lisible, une navigation simple et une composition adaptée au mobile. N\'ajoute ni comptes utilisateurs, ni paiements, ni formulaire. Avant de commencer, résume le besoin, propose la structure et indique ce qui sera fonctionnel ou simulé. Respecte le socle technique de l\'environnement utilisé.',
        },
        {
          type: 'p',
          content: [
            'Ce prompt n\'est pas une formule magique. Son intérêt est de rendre le résultat vérifiable et de limiter les initiatives inutiles.',
          ]
        }
      ]
    },
    {
      id: 'choisissez-un-outil-pour-apprendre-pas-pour-collectionner-les-abonnements',
      title: 'Choisissez un outil pour apprendre, pas pour collectionner les abonnements',
      blocks: [
        {
          type: 'p',
          content: [
            'La ressource d\'IQ Project cite notamment Lovable et Bolt pour commencer par une interface de création, et Cursor pour travailler plus directement avec le code.',
            { note: 1 }
          ]
        },
        {
          type: 'p',
          content: [
            'Ce sont des pistes, pas un classement universel.',
          ]
        },
        {
          type: 'p',
          content: [
            'Votre choix dépend surtout de la manière dont vous voulez apprendre :',
          ]
        },
        {
          type: 'list',
          items: [
            ['Vous voulez d\'abord voir un résultat et le modifier par conversation : explorez un outil de création comme Lovable ou Bolt.'],
            ['Vous voulez manipuler les fichiers et comprendre plus directement le projet : un éditeur assisté par IA comme Cursor peut être une piste, avec davantage de repères techniques à acquérir.'],
            ['Vous utilisez déjà une plateforme de création : commencez avec son environnement, plutôt que de changer uniquement parce qu\'une vidéo recommande un nouvel outil.'],
          ]
        },
        {
          type: 'p',
          content: [
            'Avant de vous engager, vérifiez la documentation actuelle : limites d\'utilisation, export du code, sauvegardes, publication, gestion des données et coût des services annexes.',
          ]
        },
        {
          type: 'p',
          content: [
            'Les offres évoluent. Un tarif cité dans un ancien tutoriel ne constitue pas un budget fiable pour votre projet. L\'abonnement à l\'IA, l\'hébergement, le domaine et les services externes peuvent correspondre à des dépenses distinctes.',
          ]
        }
      ]
    },
    {
      id: 'travaillez-par-petites-boucles-demander-observer-tester-comprendre',
      title: 'Travaillez par petites boucles : demander, observer, tester, comprendre',
      blocks: [
        {
          type: 'p',
          content: [
            'Après le premier résultat, évitez d\'envoyer immédiatement une longue liste de modifications.',
          ]
        },
        {
          type: 'p',
          content: [
            'Avancez avec une boucle courte :',
          ]
        },
        {
          type: 'list',
          ordered: true,
          items: [
            ['Demandez une amélioration précise.'],
            ['Observez ce qui a changé.'],
            ['Testez le comportement concerné.'],
            ['Vérifiez que le reste fonctionne encore.'],
            ['Conservez un point de retour avec l\'historique ou le système de versionnement disponible.'],
          ]
        },
        {
          type: 'p',
          content: [
            'Pour votre blog, vous pouvez commencer par la lecture mobile. Demandez un ajustement des titres et de la largeur du texte, vérifiez plusieurs articles, puis passez à la navigation.',
          ]
        },
        {
          type: 'prompt',
          id: 'amelioration-ciblee',
          label: 'Un prompt d\'amélioration ciblée',
          text: 'Améliore uniquement la page de lecture sur téléphone. Le titre ne doit pas déborder et les paragraphes doivent rester confortables à lire. Conserve les couleurs, le contenu et la navigation actuels. Explique les modifications effectuées et indique comment les vérifier.',
        },
        {
          type: 'prompt',
          id: 'apprendre-pendant-la-creation',
          label: 'Un prompt pour apprendre pendant la création',
          text: 'Explique-moi simplement comment les articles sont organisés, comment les liens ouvrent leurs pages et où leur contenu est enregistré. Sépare ce qui existe déjà de ce qui serait nécessaire pour publier de nouveaux articles depuis un espace d\'administration.',
        },
        {
          type: 'p',
          content: [
            'Vous n\'avez pas besoin de comprendre chaque ligne dès le départ. En revanche, vous devez progressivement pouvoir expliquer ce que fait votre projet et ce qu\'il ne fait pas.',
          ]
        }
      ]
    },
    {
      id: 'apprenez-les-mots-techniques-au-moment-où-ils-deviennent-utiles',
      title: 'Apprenez les mots techniques au moment où ils deviennent utiles',
      blocks: [
        {
          type: 'p',
          content: [
            'Un débutant n\'a pas besoin d\'étudier toute l\'informatique avant de commencer. Quelques notions permettent déjà de poser de meilleures questions.',
          ]
        },
        {
          type: 'list',
          items: [
            ['Le **frontend** est la partie exécutée dans le navigateur : pages, boutons, menus et affichage des articles.'],
            ['Le **backend** est la partie côté serveur qui peut traiter des opérations, vérifier des droits ou communiquer avec certains services. Un premier blog statique peut ne pas avoir besoin d\'un backend personnalisé.'],
            ['Une **base de données** organise les informations enregistrées. Elle peut devenir utile pour gérer des articles depuis une interface d\'administration. Mais vos premiers contenus peuvent aussi être stockés dans des fichiers ou un système de gestion de contenu.'],
            ['Une **API** est une interface qui permet à deux logiciels d\'échanger des demandes et des réponses. Votre site pourrait y en utiliser une pour récupérer des articles ou envoyer un message.'],
            ['L\'**authentification** vérifie l\'identité d\'un utilisateur. L\'**autorisation** détermine ce quil a le droit de faire. Être connecté ne doit pas suffire pour modifier les articles d\'une autre personne.'],
            ['Le **déploiement** consiste à rendre une version du projet accessible dans un environnement d\'hébergement. Une prévisualisation de travail et une publication destinée au public ne sont pas nécessairement la même chose.'],
          ]
        },
        {
          type: 'p',
          content: [
            'Ces notions deviennent plus faciles à retenir lorsqu\'elles répondent à une question concrète : « Comment modifier un article ? », « Qui peut le supprimer ? » ou « Où sont enregistrées les adresses email ? »',
          ]
        }
      ]
    },
    {
      id: 'testez-des-situations-pas-seulement-des-boutons',
      title: 'Testez des situations, pas seulement des boutons',
      blocks: [
        {
          type: 'p',
          content: [
            'Le test le plus facile consiste à cliquer une fois et à constater que quelque chose se passe. Il est aussi insuffisant.',
          ]
        },
        {
          type: 'p',
          content: [
            'La documentation de Cursor rappelle que du code généré peut sembler correct, compiler et réussir certains tests tout en conservant des défauts. Elle recommande de combiner revue et vérifications, plutôt que de se fier à l\'apparence du résultat.',
            { note: 3 }
          ]
        },
        {
          type: 'p',
          content: [
            'Pour votre mini-blog, examinez au moins ces situations :',
          ]
        },
        {
          type: 'list',
          items: [
            ['Un titre très long reste-t-il lisible ?'],
            ['Un article sans image conserve-t-il une présentation correcte ?'],
            ['Le lien direct d\'un article fonctionne-t-il après actualisation ?'],
            ['Peut-on naviguer avec la touche Tab et identifier l\'élément sélectionné ?'],
            ['Le menu reste-t-il utilisable sur un petit écran ?'],
            ['Une adresse inconnue mène-t-elle à une page d\'erreur compréhensible ?'],
            ['Les contenus d\'exemple sont-ils bien signalés ?'],
          ]
        },
        {
          type: 'p',
          content: [
            'Si un problème apparaît, décrivez-le comme une petite expérience reproductible.',
          ]
        },
        {
          type: 'prompt',
          id: 'signalement-bug',
          label: 'Un prompt pour signaler un bug',
          text: 'Sur téléphone, lorsque j\'ouvre un article avec un titre long, le titre sort de l\'écran. Je m\'attends à ce qu\'il revienne à la ligne sans créer de défilement horizontal. Identifie la cause, propose une correction ciblée et vérifie qu\'elle ne dégrade pas les autres articles.',
        }
      ]
    },
    {
      id: 'avant-les-vrais-utilisateurs-verifiez-les-donnees-et-les-acces',
      title: 'Avant les vrais utilisateurs, vérifiez les données et les accès',
      blocks: [
        {
          type: 'p',
          content: [
            'Vous pouvez apprendre avec des articles fictifs. Dès que vous ajoutez des adresses email, des comptes ou des informations privées, les conséquences d\'une erreur changent.',
          ]
        },
        {
          type: 'p',
          content: [
            'La documentation de sécurité de Lovable insiste notamment sur trois points : le code du navigateur est inspectable, les secrets ne doivent pas y être stockés et les contrôles sensibles doivent être appliqués côté serveur.',
            { note: 4 }
          ]
        },
        {
          type: 'p',
          content: [
            'Retenez ces règles simples :',
          ]
        },
        {
          type: 'list',
          items: [
            ['N\'utilisez pas de données clients réelles pour vos premiers essais.'],
            ['N\'insérez pas de clé secrète ou de mot de passe dans une page ou un fichier public.'],
            ['Utilisez le dispositif sécurisé prévu par votre environnement pour les secrets.'],
            ['Ne considérez pas un bouton masqué comme une protection des données.'],
            ['Vérifiez qui peut lire, modifier et supprimer les informations.'],
            ['Faites relire les fonctions sensibles avant d\'accepter paiements ou données personnelles.'],
          ]
        },
        {
          type: 'p',
          content: [
            'Un contrôle automatique aide à repérer certains problèmes. Il ne garantit pas, seul, que votre application est sûre.',
          ]
        }
      ]
    },
    {
      id: 'mesurez-votre-progression-avec-des-resultats-pas-avec-une-promesse-de-delai',
      title: 'Mesurez votre progression avec des résultats, pas avec une promesse de délai',
      blocks: [
        {
          type: 'p',
          content: [
            'IQ Project propose des durées indicatives d\'apprentissage, mais celles-ci restent des estimations issues d\'un article de formation.',
            { note: 1 }
          ]
        },
        {
          type: 'p',
          content: [
            'Votre progression dépend du temps disponible, du projet et des difficultés rencontrées.',
          ]
        },
        {
          type: 'p',
          content: [
            'Il est plus utile de suivre des jalons :',
          ]
        },
        {
          type: 'table',
          head: ['Jalon', 'Ce que vous devez pouvoir démontrer'],
          rows: [
            ['Définir', 'Expliquer le public, l\'objectif et la première version'],
            ['Construire', 'Obtenir un parcours simple utilisable'],
            ['Comprendre', 'Décrire les principales parties du projet'],
            ['Vérifier', 'Tester plusieurs situations et reproduire un bug'],
            ['Améliorer', 'Modifier une partie sans casser le reste'],
            ['Partager', 'Présenter les limites et publier une version adaptée à son usage'],
          ]
        },
        {
          type: 'p',
          content: [
            'Ces étapes peuvent prendre plusieurs sessions. L\'important est de ne pas confondre vitesse de génération et maîtrise du projet.',
          ]
        }
      ]
    },
    {
      id: 'quand-une-formation-ou-une-communaute-devient-utile',
      title: 'Quand une formation ou une communauté devient utile',
      blocks: [
        {
          type: 'p',
          content: [
            'Vous pouvez commencer en autonomie avec un petit projet et les documentations officielles. Une communauté peut ensuite vous aider à expliquer un blocage ou à obtenir un regard extérieur.',
          ]
        },
        {
          type: 'p',
          content: [
            'Lorsque vous demandez de l\'aide, partagez le comportement attendu, le comportement observé et les étapes pour reproduire le problème. Retirez les secrets et les données privées de vos captures et extraits.',
          ]
        },
        {
          type: 'p',
          content: [
            'Une formation peut être pertinente si elle propose un programme rigoureux, des résultats et un accompagnement. Elle ne doit pas être vendue comme une garantie de résultat sans effort.',
          ]
        }
      ]
    },
    {
      id: 'votre-premiere-mission-publier-moins-comprendre-mieux',
      title: 'Votre première mission : publier moins, comprendre mieux',
      blocks: [
        {
          type: 'p',
          content: [
            'Pour commencer, choisissez le sujet de votre mini-blog et rédigez trois articles courts. Définissez ensuite le parcours de lecture, préparez votre brief et construisez une première version limitée.',
          ]
        },
        {
          type: 'p',
          content: [
            'Avant de la partager, vérifiez les liens, la lecture mobile, les titres longs et la navigation au clavier. Notez ce qui fonctionne, ce qui est simulé et ce qui reste à améliorer.',
          ]
        },
        {
          type: 'p',
          content: [
            'Le meilleur signe de progression n\'est pas que l\'IA ait créé beaucoup de code. C\'est que vous sachiez demander une modification, vérifier son résultat et expliquer pourquoi elle est utile.',
          ]
        },
        {
          type: 'p',
          content: [
            'C\'est cette méthode que vous pourrez réutiliser pour votre prochain site, un outil personnel ou une application plus ambitieuse.',
          ]
        }
      ]
    }
  ],
  sourcesNote: [
    {
      type: 'p',
      content: [
        'Cet article est une rédaction originale destinée aux débutants. Il reprend les thèmes essentiels de la ressource proposée — démarrer petit, choisir un outil, préciser ses demandes, comprendre l\'architecture, tester et chercher de l\'aide — avec un fil conducteur inédit autour d\'un mini-blog.',
      ]
    },
    {
      type: 'p',
      content: [
        'La source IQ Project, datée du 2 février 2026, a plus de six mois au moment de cette rédaction. Elle provient d\'un organisme proposant des formations : ses recommandations commerciales, tarifs et promesses de délai n\'ont pas été repris comme faits établis. Les documentations officielles ont été consultées en complément ; elles décrivent leurs outils respectifs et ne démontrent pas leur supériorité comparative.',
      ]
    },
    {
      type: 'p',
      content: [
        'Consultation des sources : 9 octobre 2026. Les fonctionnalités et offres des outils doivent être revérifiées avant publication si l\'article est utilisé plus tard.',
      ]
    }
  ],
  sources: [
    { n: 1, label: 'IQ Project, « Apprendre le Vibe Coding : Par où commencer en 2026 », 2 février 2026.', href: 'https://iq-project.ai/blog/apprendre-vibe-coding-par-ou-commencer-2026/' },
    { n: 2, label: 'Bolt, documentation officielle, « Prompt effectively ».', href: 'https://support.bolt.new/best-practices/prompting-effectively' },
    { n: 3, label: 'Cursor, guide officiel, « Reviewing and testing code ».', href: 'https://cursor.com/learn/reviewing-testing' },
    { n: 4, label: 'Lovable, documentation officielle, « Security best practices for Lovable apps ».', href: 'https://docs.lovable.dev/tips-tricks/security-best-practices' },
  ]
};