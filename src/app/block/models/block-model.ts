import {BaseEntity} from '../../shared/abstractions/base-entity';

export class BlockModel extends BaseEntity {
  name: string;

  // nav
  words?: any[];
}
