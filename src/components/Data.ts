import cards from '../assets/projects/cards.png'
import pizza from '../assets/projects/pizza.png'
import todolist from '../assets/projects/todolist.png'
import css from '../assets/css.png'
import html from '../assets/html.png'
import react from '../assets/react.png'
import redux from '../assets/redux.png'
import typescript from '../assets/typescript.png'
import github from '../assets/github.png'
import axios from '../assets/axios.png'
import formik from '../assets/formik.png'
import  firebase from '../assets/firebase.jpg'
import js from '../assets/javascript.png'


export type DataType = {
    id:number
    name:string
    image: string
    github:string,
    live:string,
}


export type TechImgType = {
    id:number
    name:string
    image: string
}

export const data: DataType[] = [
    {
        id:1,
        name:"StudyCards App",
        image:cards,
        github:"https://github.com/Nikmaunt/friday-cards",
        live:"https://nikmaunt.github.io/friday-cards/",
    },
    {
        id:2,
        name:"Pizzeria Online Store",
        image:pizza,
        github:"https://github.com/Nikmaunt/ReactPizza",
        live:"https://nikmaunt.github.io/ReactPizza/",
    },
    {
        id:3,
        name:" to-do list app",
        image:todolist,
        github:"https://github.com/Nikmaunt/TodoListApp",
        live:"https://nikmaunt.github.io/TodoListApp/",
    },

]

export const techImg: TechImgType[] = [
    {
        id:1,
        name:"CSS",
        image:css,
    },
    {
        id:2,
        name:"HTML ",
        image:html ,
    },
    {
        id:3,
        name:"REACT",
        image:react,
    },
    {
        id:4,
        name:"REDUX",
        image:redux,

    },
    {
        id:5,
        name:"JAVASCRIPT",
        image:js,

    },
    {
        id:6,
        name:"TYPESCRIPT",
        image:typescript,

    },
    {
        id:7,
        name:"GITHUB",
        image:github,

    },
    {
        id:8,
        name:"AXIOS",
        image:axios,

    },
    {
        id:9,
        name:"FORMIK",
        image:formik,

    },
    {
        id:10,
        name:"FIREBASE",
        image:firebase,

    },
]