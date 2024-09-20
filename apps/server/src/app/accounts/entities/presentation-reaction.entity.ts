export type PresentationReactionType =
  | 'claps'
  | 'mindblowing'
  | 'insightful'
  | 'amazing'
  | 'interesting'
  | 'learnedSomething'
  | 'like';

export class PresentationReactionEntity {
  id: string;

  type: PresentationReactionType;
}
