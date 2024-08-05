interface Kind {
  id_kind: number;
  name: string;
}

export interface Product {
  id_product: number;
  name: string;
  description: string;
  price: number;
  kinds: Kind[];
}
