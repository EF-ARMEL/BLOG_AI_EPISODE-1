export type Inline =
  | string                                   // texte simple
  | { b: string }                            // gras
  | { link: string; href: string }           // lien
  | { note: 1 | 2 | 3 | 4 };                 // renvoi de note → sup.fn → #src{n}

export type Block =
  | { type: "p"; lead?: boolean; content: Inline[] }                 // lead = chapô (1,2 em)
  | { type: "list"; ordered?: boolean; items: Inline[][] }
  | { type: "table"; head: string[]; rows: string[][] }              // rendu dans <div class="tbl">
  | { type: "quote"; before?: string; mark: string; after?: string } // citation + surlignage
  | { type: "prompt"; id: string; label?: string; text: string };    // bloc copiable

export type Section = { id: string; title: string; blocks: Block[] };
export type Source = { n: 1 | 2 | 3 | 4; label: string; href: string };

export type Article = {
  slug: string;                 // "apprendre-vibe-coding-debutant"
  title: string;                // titre affiché (h1)
  metaTitle: string;            // "Apprendre le vibe coding en 2026 : guide pour débutants"
  metaDescription: string;
  category: string;             // "Création avec l'IA"
  publishedAt: string;          // "2026-10-09" (format ISO)
  author: string;               // "Nousdev"
  intro: Block[];               // chapô + paragraphes avant la première section
  sections: Section[];          // une par titre de niveau 2 du corps
  sourcesNote: Block[];         // section « Sources et note éditoriale » (texte)
  sources: Source[];            // 4 sources, liste numérotée
};
