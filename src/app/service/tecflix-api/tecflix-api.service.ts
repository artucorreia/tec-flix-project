import { Injectable, inject } from '@angular/core';
import { User } from '../../model/user';
import { Rating } from '../../model/rating';
import { Class } from '../../model/class';
import { Module } from '../../model/module';
import { Course } from '../../model/course';
import { UserCourse } from '../../model/user-course';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Professor } from '../../model/professor';

@Injectable({
  providedIn: 'root'
})
export class TecflixApiService {
  #http = inject(HttpClient);

  private url: string = "http://localhost:3000/";

  public getUserById(userId: string): Observable<User> {
    const param = {id: userId};
    return this.#http.get<User>(`${this.url}users`, {params: param});
  }

  public getAllUsers(): Observable<User[]> {
    return this.#http.get<User[]>(`${this.url}users`);
  }

  public getProfessorById(professorId: string): Observable<Professor> {
    const params = {id: professorId};
    return this.#http.get<Professor>(`${this.url}professors`, {params: params});
  }

  public getAllProfessors(): Observable<Professor[]> {
    return this.#http.get<Professor[]>(`${this.url}professors`);
  }

  public getRatings(courseId: string): Observable<Rating[]> {
    const params = {course_id: courseId};
    return this.#http.get<Rating[]>(`${this.url}ratings`, {params: params});
  }

  public getAllRatings(): Observable<Rating[]> {
    return this.#http.get<Rating[]>(`${this.url}ratings`);
  }

  // public getClass(moduleId: string): Class[] {
  //   const aulas: Class[] = [
  //     { id: '1', titulo: 'O que é Angular?', descricao: 'Descrição da aula', videoMP4: 'angular-intro.mp4', moduloId: '1' },
  //     { id: '2', titulo: 'Instalação e Setup', descricao: 'Descrição da aula', videoMP4: 'angular-setup.mp4', moduloId: '1' },
  //     { id: '3', titulo: 'Componentes Básicos', descricao: 'Descrição da aula', videoMP4: 'angular-components.mp4', moduloId: '1' },
  //     // Adicione mais aulas conforme necessário
  //     { id: '4', titulo: 'O que é React?', descricao: 'Descrição da aula', videoMP4: 'react-intro.mp4', moduloId: '2' },
  //     { id: '5', titulo: 'Instalação e Setup', descricao: 'Descrição da aula', videoMP4: 'react-setup.mp4', moduloId: '2' },
  //     { id: '6', titulo: 'Componentes e Hooks', descricao: 'Descrição da aula', videoMP4: 'react-hooks.mp4', moduloId: '2' },
  //     // Adicione mais aulas conforme necessário
  //     { id: '7', titulo: 'Fundamentos do Vue.js', descricao: 'Descrição da aula', videoMP4: 'vue-fundamentals.mp4', moduloId: '3' },
  //     { id: '8', titulo: 'Vue CLI e Setup', descricao: 'Descrição da aula', videoMP4: 'vue-setup.mp4', moduloId: '3' },
  //     { id: '9', titulo: 'Componentes Vue', descricao: 'Descrição da aula', videoMP4: 'vue-components.mp4', moduloId: '3' },
  //     // Adicione mais aulas conforme necessário
  //     { id: '10', titulo: 'Routing no Angular', descricao: 'Descrição da aula', videoMP4: 'angular-routing.mp4', moduloId: '4' },
  //     { id: '11', titulo: 'Serviços e Dependency Injection', descricao: 'Descrição da aula', videoMP4: 'angular-services.mp4', moduloId: '4' },
  //     // Adicione mais aulas conforme necessário
  //     { id: '12', titulo: 'Gerenciamento de Estado com Redux', descricao: 'Descrição da aula', videoMP4: 'react-redux.mp4', moduloId: '5' },
  //     { id: '13', titulo: 'React Router', descricao: 'Descrição da aula', videoMP4: 'react-router.mp4', moduloId: '5' },
  //     // Adicione mais aulas conforme necessário
  //     { id: '14', titulo: 'Vuex para Gerenciamento de Estado', descricao: 'Descrição da aula', videoMP4: 'vue-vuex.mp4', moduloId: '6' },
  //     { id: '15', titulo: 'Vue Router', descricao: 'Descrição da aula', videoMP4: 'vue-router.mp4', moduloId: '6' },
  //     // Adicione mais aulas conforme necessário
  //     { id: '16', titulo: 'Introdução ao Node.js', descricao: 'Descrição da aula', videoMP4: 'node-intro.mp4', moduloId: '7' },
  //     { id: '17', titulo: 'Instalação e Setup', descricao: 'Descrição da aula', videoMP4: 'node-setup.mp4', moduloId: '7' },
  //     { id: '18', titulo: 'Criação de APIs', descricao: 'Descrição da aula', videoMP4: 'node-api.mp4', moduloId: '7' },
  //     // Adicione mais aulas conforme necessário
  //     { id: '19', titulo: 'O que é Python?', descricao: 'Descrição da aula', videoMP4: 'python-intro.mp4', moduloId: '8' },
  //     { id: '20', titulo: 'Instalação e Setup', descricao: 'Descrição da aula', videoMP4: 'python-setup.mp4', moduloId: '8' },
  //     { id: '21', titulo: 'Python Básico', descricao: 'Descrição da aula', videoMP4: 'python-basic.mp4', moduloId: '8' }
  //     // Adicione mais aulas conforme necessário
  //   ];
  //   return aulas.filter((aula) => aula.moduloId === moduleId)
  // }

  public getModules(couseId: string): Observable<Module[]> {
    const params = {course_id: couseId}
    return this.#http.get<Module[]>(`${this.url}modules`, {params: params});
  }

  public getAllCourses(): Observable<Course[]> {
    return this.#http.get<Course[]>(`${this.url}courses`);
  }

  public getCourse(courseId: string): Observable<Course> {
    const params = {id: courseId}
    return this.#http.get<Course>(`${this.url}courses`, {params: params});
  }

  // public getUserCouses(userId: string): UserCourse[] {
  //   const userCourses: UserCourse[] = [
  //     { userId: '101', cursoId: '1', dataCompra: new Date('2023-01-01') },
  //     { userId: '101', cursoId: '2', dataCompra: new Date('2023-02-01') },
  //     { userId: '102', cursoId: '3', dataCompra: new Date('2023-03-01') },
  //     { userId: '103', cursoId: '4', dataCompra: new Date('2023-04-01') },
  //     { userId: '104', cursoId: '5', dataCompra: new Date('2023-05-01') },
  //     { userId: '104', cursoId: '1', dataCompra: new Date('2023-06-01') }
  //   ];
  //   return userCourses.filter(value => value.userId == userId);
  // }
}
