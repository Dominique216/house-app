export interface House {
    id: number,
    price: number, 
    imgUrl: string,
    address: string, 
    square_feet: number, 
    bedrooms: number,
    dwelling_type: string,
    bathrooms: number,
    description: string,
    highlights: string[],
    additional_details: {key: string, value: string, icon: string}[]
}