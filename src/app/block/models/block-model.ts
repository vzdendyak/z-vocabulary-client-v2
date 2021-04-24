import {BaseEntity} from '../../shared/abstractions/base-entity';
import {WordModel} from './word-model';

export class BlockModel extends BaseEntity {
  name: string;

  // nav
  words?: WordModel[];
}
