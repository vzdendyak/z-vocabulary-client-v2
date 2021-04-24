import {BaseEntityText} from '../../shared/abstractions/base-entity';
import {BlockModel} from './block-model';
import {MeaningModel} from './meaning-model';

export class WordModel extends BaseEntityText {
  blockId: number;

  // nav
  block?: BlockModel;
  meanings?: MeaningModel[];
}
