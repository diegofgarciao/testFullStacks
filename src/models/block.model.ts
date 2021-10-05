export class BlockResponse {
  data:BlockAux[]
}

export class BlockAux{
  id: number;
  type: string;
  attributes: Attributes[];
}

export class Attributes{
  index: number;
  timestamp: number;
  data: string;
  hash: string;
}
