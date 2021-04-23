import {BaseEntityText} from '../../shared/abstractions/base-entity';

export class WordModel extends BaseEntityText {
  blockId: number;

  // nav
  block?: any;
  meanings?: any[];
}
