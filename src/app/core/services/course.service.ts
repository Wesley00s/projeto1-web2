import { Injectable } from "@angular/core";
import { Course } from "../model/course.model"

@Injectable({
    providedIn: 'root',  
  })
export class CourseService {
    private courses = [
        {
            title : "Aprenda inteligência artificial com redes neurais",
            description : "",
            duration : 50,
            availability : "100% Online",
            rating : 4.8,
            price : true,
            imageUrl : "assets/images/ia.png"
        },
        {
            title : "Aprenda frontend web com Angular",
            description : "",
            duration : 70,
            availability : "100% Online",
            rating : 4.8,
            price : true,
            imageUrl : "assets/images/frontend.png"
        },
        {
            title : "Aprenda backend web com Java e Spring",
            description : "",
            duration : 70,
            availability : "100% Online",
            rating : 4.9,
            price : true,
            imageUrl : "assets/images/backend.png"
        }
    ]

    getCourses(): Course[] {
        return this.courses;
    }
}