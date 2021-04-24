import {BaseEntityText} from '../../shared/abstractions/base-entity';
import {ExampleModel} from './example-model';
import {CollocationModel} from './collocation-model';
import {WordModel} from './word-model';

export class MeaningModel extends BaseEntityText {
  partOfSpeech: string;
  wordId: number;

  // nav
  examples?: ExampleModel[];
  collocations?: CollocationModel[];
  word?: WordModel;
}
