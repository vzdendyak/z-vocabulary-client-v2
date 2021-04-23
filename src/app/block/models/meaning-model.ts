import {BaseEntityText} from '../../shared/abstractions/base-entity';

export class MeaningModel extends BaseEntityText {
  partOfSpeech: string;
  wordId: number;

  // nav
  examples?: any[];
  collocations?: any[];
  word?: any;
}
