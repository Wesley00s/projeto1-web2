import { Injectable } from "@angular/core";
import { Course } from "../model/course.model"

@Injectable({
    providedIn: 'root',  
  })
export class CourseService {
    private courses: Course[] = [
        {
          idCourse: 0,
          idCategory: 0,
          title: "Aprenda inteligência artificial com redes neurais",
          description: "Domine os conceitos fundamentais da Inteligência Artificial com foco em redes neurais. Aprenda a criar modelos de aprendizado profundo capazes de reconhecer padrões, classificar dados e tomar decisões autônomas. Curso ideal para quem deseja aplicar IA em problemas do mundo real.",
          duration: 50,
          availability: "100% Online",
          rating: 4.8,
          price: true,
          imageUrl: "assets/images/redes_neurais.jpg",
          showRecommended: false
        },
        {
          idCourse: 1,
          idCategory: 0,
          title: "Aprenda frontend web com Angular",
          description: "Aprenda a desenvolver interfaces web modernas e responsivas com Angular. Domine conceitos como componentes, rotas, serviços e integração com APIs REST, criando aplicações dinâmicas e escaláveis com TypeScript.",
          duration: 70,
          availability: "100% Online",
          rating: 4.8,
          price: true,
          imageUrl: "assets/images/angular.png",
          showRecommended: false
        },
        {
          idCourse: 2,
          idCategory: 0,
          title: "Aprenda backend web com Java e Spring",
          description: "Construa aplicações backend robustas com Java e o ecossistema Spring. Aprenda a desenvolver APIs RESTful, conectar com bancos de dados, gerenciar segurança e construir sistemas escaláveis e profissionais.",
          duration: 70,
          availability: "100% Online",
          rating: 4.9,
          price: true,
          imageUrl: "assets/images/java.png",
          showRecommended: true
        },
        {
            idCourse: 4,
            idCategory: 1,
            title: "Aprenda AWS com AWS CLI e Localstack",
            description: "Domine os principais serviços da AWS usando a linha de comando e simulações locais com o Localstack. Aprenda a criar, testar e automatizar infraestrutura em nuvem de forma eficiente, segura e escalável.",
            duration: 60,
            availability: "100% Online",
            rating: 4.9,
            price: true,
            imageUrl: "assets/images/amazon-aws.jpg",
            showRecommended: false
          },
          {
            idCourse: 5,
            idCategory: 1,
            title: "Aprenda DevOps com Docker, Vagrant e Terraform",
            description: "Aprenda a criar ambientes portáteis, automatizar provisionamentos e gerenciar infraestrutura como código. Domine ferramentas essenciais de DevOps para escalar e versionar sistemas com agilidade e confiabilidade.",
            duration: 60,
            availability: "100% Online",
            rating: 4.9,
            price: true,
            imageUrl: "assets/images/devops.png",
            showRecommended: true
          },
          {
            idCourse: 6,
            idCategory: 1,
            title: "Aprenda Microsoft Azure com Azure CLI e Kubernetes AKS",
            description: "Explore o ecossistema do Microsoft Azure utilizando a Azure CLI para automação e o Kubernetes para orquestração de containers. Aprenda a implantar e escalar aplicações modernas com confiança na nuvem.",
            duration: 60,
            availability: "100% Online",
            rating: 4.9,
            price: true,
            imageUrl: "assets/images/azure.jpg",
            showRecommended: false
          },
          {
            idCourse: 7,
            idCategory: 2,
            title: "Aprenda inteligência de negócios com Microsoft Power BI",
            description: "Domine a criação de dashboards interativos, análise visual de dados e integração com diversas fontes no Power BI. Torne-se capaz de transformar dados em decisões estratégicas com agilidade e clareza.",
            duration: 70,
            availability: "100% Online",
            rating: 4.9,
            price: true,
            imageUrl: "assets/images/power-bi.png",
            showRecommended: true
          },
          {
            idCourse: 8,
            idCategory: 2,
            title: "Aprenda análise avançada de dados com SQL e Python",
            description: "Desenvolva habilidades em análise de dados complexos combinando o poder do SQL com a flexibilidade do Python. Crie relatórios, explore grandes volumes de dados e extraia insights acionáveis para negócios.",
            duration: 70,
            availability: "100% Online",
            rating: 4.9,
            price: true,
            imageUrl: "https://dkrn4sk0rn31v.cloudfront.net/uploads/2018/09/18115931/sql-injection-python.png",
            showRecommended: false
          },
          {
            idCourse: 9,
            idCategory: 2,
            title: "Aprenda inteligência de negócios com Excel e Storytelling",
            description: "Combine o domínio do Excel e do Power BI com técnicas de storytelling de dados para criar relatórios que comunicam valor com clareza. Aprenda a conduzir narrativas que impactam decisões estratégicas.",
            duration: 70,
            availability: "100% Online",
            rating: 4.9,
            price: true,
            imageUrl: "https://www.hashtagtreinamentos.com/wp-content/uploads/2025/02/power-bi-ou-excel-3-1024x619.png",
            showRecommended: false
          },
          {
            idCourse: 10,
            idCategory: 3,
            title: "Aprenda desenvolvimento de jogos 2D com C# e Unity",
            description: "Aprenda a criar jogos 2D incríveis com a Unity e C#. Domine movimentação, colisões, animações, criação de fases e publique seu próprio jogo com controle total do design e da lógica.",
            duration: 70,
            availability: "100% Online",
            rating: 4.9,
            price: true,
            imageUrl: "https://beecrowd.com/wp-content/uploads/2024/04/2023-06-15-Unity.jpg",
            showRecommended: true
          },
          {
            idCourse: 11,
            idCategory: 3,
            title: "Aprenda a criar jogos com Godot e GDScript",
            description: "Explore a engine Godot para desenvolver jogos leves e criativos usando GDScript. Aprenda desde a estrutura básica até sistemas complexos, com uma abordagem prática e acessível.",
            duration: 70,
            availability: "100% Online",
            rating: 4.9,
            price: true,
            imageUrl: "https://cdn1.epicgames.com/offer/916bd3319edc4e0bbb57ed7e04ad851d/EGS_GodotEngine_TheGodotEngine_S1_2560x1440-44362dbc2924336fe280c96a8c1e2342",
            showRecommended: false
          },
          {
            idCourse: 12,
            idCategory: 3,
            title: "Aprenda a criar jogos multijogador com JavaScript e Phaser",
            description: "Construa jogos multiplayer dinâmicos com JavaScript e Phaser. Aprenda a sincronizar jogadores em tempo real, lidar com eventos de rede e criar experiências interativas para web.",
            duration: 70,
            availability: "100% Online",
            rating: 4.9,
            price: true,
            imageUrl: "https://cdn.tutsplus.com/cdn-cgi/image/width=600/gamedev/uploads/2013/12/header.jpg",
            showRecommended: false
          }                                     
      ];
      
    getCourseById(idCourse: number): Course {
        const found = this.courses.find(course => course.idCourse === idCourse);
        if (!found) {
          throw new Error(`Curso com ID ${idCourse} não encontrado`);
        }
        return found;
    }

    getCoursesByCategory(idCategory : number) : Course[] {
        return this.courses.filter(course => course.idCategory === idCategory)
    }

    getCoursesByShowRecommended(): Course[] {
        return this.courses.filter(course => course.showRecommended === true)
    }
}