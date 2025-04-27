import { Injectable } from "@angular/core";
import { Course } from "../model/course.model"

@Injectable({
    providedIn: 'root',  
  })
export class CourseService {
    private courses = [
        {
            idCourse : 0,
            idCategory : 0,
            title : "Aprenda inteligência artificial com redes neurais",
            description : "",
            duration : 50,
            availability : "100% Online",
            rating : 4.8,
            price : true,
            imageUrl : "assets/images/ia.png",
            showRecommended : true
        },
        {
            idCourse : 1,
            idCategory : 0,
            title : "Aprenda frontend web com Angular",
            description : "",
            duration : 70,
            availability : "100% Online",
            rating : 4.8,
            price : true,
            imageUrl : "assets/images/frontend.png",
            showRecommended : true
        },
        {
            idCourse : 2,
            idCategory: 0,
            title : "Aprenda backend web com Java e Spring",
            description : "",
            duration : 70,
            availability : "100% Online",
            rating : 4.9,
            price : true,
            imageUrl : "assets/images/backend.png",
            showRecommended : true
        }
    ]

    getCourses(): Course[] {
        return this.courses;
    }
}