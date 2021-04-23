export abstract class BaseEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
}

export abstract class BaseEntityText extends BaseEntity {
  text: string;
}

