import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Rating } from '../model/rating';
import { Class } from '../model/class';
import { Module } from '../model/module';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class TecflixApiService {
  private courses: Course[] = [];

  constructor() {
    this.courses = [
      {
        id: '1',
        titulo: 'Curso de Angular',
        descricao: 'Aprenda Angular do básico ao avançado.',
        imgCapa: 'https://arquivo.devmedia.com.br/cursos/imagem/curso_primeiros-passos-com-angular_1954.jpg',
        valor: 99.99,
        tempoTotal: '40h',
        professor: 'João Silva',
        categorias: ['Desenvolvimento', 'Frontend'],
        avaliacoes: this.getRatings('1'),
        modulos: this.getModules('1')
      },
      {
        id: '2',
        titulo: 'Curso de React',
        descricao: 'Domine o React e suas bibliotecas.',
        imgCapa: 'https://www.devmedia.com.br/arquivos/cursos/Comps_ReactNative/thumb.png',
        valor: 89.99,
        tempoTotal: '35h',
        professor: 'Maria Souza',
        categorias: ['Desenvolvimento', 'Frontend'],
        avaliacoes: this.getRatings('2'),
        modulos: this.getModules('2')
      },
      {
        id: '3',
        titulo: 'Curso de Vue.js',
        descricao: 'Vue.js do básico ao avançado.',
        imgCapa: 'https://www.devmedia.com.br/arquivos/cursos/VUE_CLI3/thumb.png',
        valor: 79.99,
        tempoTotal: '30h',
        professor: 'Carlos Ferreira',
        categorias: ['Desenvolvimento', 'Frontend'],
        avaliacoes: this.getRatings('3'),
        modulos: this.getModules('3')
      },
      {
        id: '4',
        titulo: 'Curso de Node.js',
        descricao: 'Aprenda Node.js e crie APIs robustas.',
        imgCapa: 'https://www.devmedia.com.br/arquivos/cursos/Node_Helloword/thumb.png',
        valor: 69.99,
        tempoTotal: '25h',
        professor: 'Ana Paula',
        categorias: ['Desenvolvimento', 'Backend'],
        avaliacoes: this.getRatings('4'),
        modulos: this.getModules('4')
      },
      {
        id: '5',
        titulo: 'Curso de Python',
        descricao: 'Aprenda Python do básico ao avançado.',
        imgCapa: 'https://www.devmedia.com.br/arquivos/cursos/back_end/thumb.png',
        valor: 59.99,
        tempoTotal: '20h',
        professor: 'Ricardo Lima',
        categorias: ['Desenvolvimento', 'Programação'],
        avaliacoes: this.getRatings('5'),
        modulos: this.getModules('5')
      }
    ];
  }

  public getUser(userId: number): User {
    const users: User[] = [
      { id: '101', nome: 'Alice', email: 'alice@example.com' },
      { id: '102', nome: 'Bob', email: 'bob@example.com' },
      { id: '103', nome: 'Carlos', email: 'carlos@example.com' },
      { id: '104', nome: 'Diana', email: 'diana@example.com' },
      { id: '105', nome: 'Eve', email: 'eve@example.com' },
      { id: '106', nome: 'Frank', email: 'frank@example.com' }
    ];
    return users[userId];
  }

  public getRatings(courseId: string): Rating[] {
    const ratings: Rating[] = [
      { id: '1', cursoId: '1', userId: '101', nota: 5, user: this.getUser(0) },
      { id: '2', cursoId: '2', userId: '102', nota: 4, user: this.getUser(1) },
      { id: '3', cursoId: '1', userId: '103', nota: 3, user: this.getUser(2) },
      { id: '4', cursoId: '3', userId: '104', nota: 4, user: this.getUser(3) },
      { id: '5', cursoId: '4', userId: '105', nota: 5, user: this.getUser(4) },
      { id: '6', cursoId: '5', userId: '106', nota: 4, user: this.getUser(5) },
      { id: '7', cursoId: '4', userId: '101', nota: 2, user: this.getUser(0) },
      { id: '8', cursoId: '5', userId: '102', nota: 3, user: this.getUser(1) }
    ];
    return ratings.filter((avaliacao) => avaliacao.cursoId === courseId);
  }

  public getClass(moduleId: string): Class[] {
    const aulas: Class[] = [
      { id: '1', titulo: 'O que é Angular?', descricao: 'Descrição da aula', videoMP4: 'angular-intro.mp4', moduloId: '1' },
      { id: '2', titulo: 'Instalação e Setup', descricao: 'Descrição da aula', videoMP4: 'angular-setup.mp4', moduloId: '1' },
      { id: '3', titulo: 'Componentes Básicos', descricao: 'Descrição da aula', videoMP4: 'angular-components.mp4', moduloId: '1' },
      // Adicione mais aulas conforme necessário
      { id: '4', titulo: 'O que é React?', descricao: 'Descrição da aula', videoMP4: 'react-intro.mp4', moduloId: '2' },
      { id: '5', titulo: 'Instalação e Setup', descricao: 'Descrição da aula', videoMP4: 'react-setup.mp4', moduloId: '2' },
      { id: '6', titulo: 'Componentes e Hooks', descricao: 'Descrição da aula', videoMP4: 'react-hooks.mp4', moduloId: '2' },
      // Adicione mais aulas conforme necessário
      { id: '7', titulo: 'Fundamentos do Vue.js', descricao: 'Descrição da aula', videoMP4: 'vue-fundamentals.mp4', moduloId: '3' },
      { id: '8', titulo: 'Vue CLI e Setup', descricao: 'Descrição da aula', videoMP4: 'vue-setup.mp4', moduloId: '3' },
      { id: '9', titulo: 'Componentes Vue', descricao: 'Descrição da aula', videoMP4: 'vue-components.mp4', moduloId: '3' },
      // Adicione mais aulas conforme necessário
      { id: '10', titulo: 'Routing no Angular', descricao: 'Descrição da aula', videoMP4: 'angular-routing.mp4', moduloId: '4' },
      { id: '11', titulo: 'Serviços e Dependency Injection', descricao: 'Descrição da aula', videoMP4: 'angular-services.mp4', moduloId: '4' },
      // Adicione mais aulas conforme necessário
      { id: '12', titulo: 'Gerenciamento de Estado com Redux', descricao: 'Descrição da aula', videoMP4: 'react-redux.mp4', moduloId: '5' },
      { id: '13', titulo: 'React Router', descricao: 'Descrição da aula', videoMP4: 'react-router.mp4', moduloId: '5' },
      // Adicione mais aulas conforme necessário
      { id: '14', titulo: 'Vuex para Gerenciamento de Estado', descricao: 'Descrição da aula', videoMP4: 'vue-vuex.mp4', moduloId: '6' },
      { id: '15', titulo: 'Vue Router', descricao: 'Descrição da aula', videoMP4: 'vue-router.mp4', moduloId: '6' },
      // Adicione mais aulas conforme necessário
      { id: '16', titulo: 'Introdução ao Node.js', descricao: 'Descrição da aula', videoMP4: 'node-intro.mp4', moduloId: '7' },
      { id: '17', titulo: 'Instalação e Setup', descricao: 'Descrição da aula', videoMP4: 'node-setup.mp4', moduloId: '7' },
      { id: '18', titulo: 'Criação de APIs', descricao: 'Descrição da aula', videoMP4: 'node-api.mp4', moduloId: '7' },
      // Adicione mais aulas conforme necessário
      { id: '19', titulo: 'O que é Python?', descricao: 'Descrição da aula', videoMP4: 'python-intro.mp4', moduloId: '8' },
      { id: '20', titulo: 'Instalação e Setup', descricao: 'Descrição da aula', videoMP4: 'python-setup.mp4', moduloId: '8' },
      { id: '21', titulo: 'Python Básico', descricao: 'Descrição da aula', videoMP4: 'python-basic.mp4', moduloId: '8' }
      // Adicione mais aulas conforme necessário
    ];
    return aulas.filter((aula) => aula.moduloId === moduleId)
  }

  public getModules(couseId: string): Module[] {
    const modules: Module[] = [
      // Módulos para o Curso de Angular
      { 
        id: '1', 
        titulo: 'Introdução ao Angular', 
        quantidadeAulas: 3, cursoId: '1', 
        aulas: this.getClass('1') 
      },
      { 
        id: '4', 
        titulo: 'Angular Avançado', 
        quantidadeAulas: 2, cursoId: '1', 
        aulas: this.getClass('4') 
      },
      // Módulos para o Curso de React
      { 
        id: '2', 
        titulo: 'Introdução ao React', 
        quantidadeAulas: 3, 
        cursoId: '2', 
        aulas: this.getClass('2') 
      },
      { 
        id: '5', 
        titulo: 'React Avançado', 
        quantidadeAulas: 2, 
        cursoId: '2', 
        aulas: this.getClass('5') 
      },
      // Módulos para o Curso de Vue.js
      { 
        id: '3', 
        titulo: 'Introdução ao Vue.js', 
        quantidadeAulas: 3, 
        cursoId: '3', 
        aulas: this.getClass('3') 
      },
      { 
        id: '6', 
        titulo: 'Vue.js Avançado', 
        quantidadeAulas: 2, 
        cursoId: '3', 
        aulas: this.getClass('6') 
      },
      // Módulos para o Curso de Node.js
      { 
        id: '7', 
        titulo: 'Introdução ao Node.js', 
        quantidadeAulas: 3, 
        cursoId: '4', 
        aulas: this.getClass('7') 
      },
      // Módulos para o Curso de Python
      { 
        id: '8', 
        titulo: 'Introdução ao Python', 
        quantidadeAulas: 3, 
        cursoId: '5', 
        aulas: this.getClass('8') 
      }
    ];
    return modules.filter((module) => module.cursoId === couseId)
  }

  public getAllCourses() {
    return this.courses;
  }

  public getCourse(courseId: string): Course[] {
    return this.courses.filter((course) => course.id === courseId);
  }
}
