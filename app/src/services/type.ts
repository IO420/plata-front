interface Kind {
  id_kind: number;
  name: string;
}

export interface Product {
  id_product: number;
  name: string;
  description: string;
  price: number;
  url:string;
  kinds: Kind[];
}

export interface ProductProps{
  product:Product
}

interface Kind {
  id_kind:number;
  name: string;
  url:string;
  onClick: (name: string) => void;
}

export interface KindProps{
  kind:Kind
}