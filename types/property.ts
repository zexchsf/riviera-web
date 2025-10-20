export interface Property {
   id: string;
   title: string;
   description: string;
   price: number;
   primary_image: string;
   images: string[];
   location: string;
   bedrooms: number;
   bathrooms: number;
   size: number;
   type: string;
}

export interface  Apartment {
   id: number,
   title: string,
   price: string,
   location: string,
   image: string,
   description: string,
   rating: number,
   reviews: number,
}