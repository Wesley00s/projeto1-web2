export interface Course {
    idCourse : number,
    idCategory : number,
    title : string,
    description : string,
    duration : number
    availability : string,
    rating : number,
    price: boolean,
    imageUrl: string,
    showRecommended : boolean
}