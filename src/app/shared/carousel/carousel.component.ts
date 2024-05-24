import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

interface Curso {
    id: string;
    titulo: string;
    descricao: string;
    imgCapa: string;
    valor: number;
    tempoTotal: string;
    professor: string;
    categorias: string[];
    avaliacoes: Avaliacao[];
    modulos: Modulo[];
}

interface Avaliacao {
    id: string;
    cursoId: string;
    userId: string;
    nota: number;
    user: User;
}

interface Modulo {
    id: string;
    titulo: string;
    quantidadeAulas: number;
    cursoId: string;
    aulas: Aula[];
}

interface Aula {
    id: string;
    titulo: string;
    descricao: string;
    videoMP4: string;
    moduloId: string;
}

interface User {
    id: string;
    nome: string;
    email: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, ButtonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})

export class CarouselCircular implements OnInit {
    cursos: Curso[] = [];

    responsiveOptions: any[] | undefined;

    ngOnInit() {
        const users: User[] = [
            { id: '101', nome: 'Alice', email: 'alice@example.com' },
            { id: '102', nome: 'Bob', email: 'bob@example.com' },
            { id: '103', nome: 'Carlos', email: 'carlos@example.com' },
            { id: '104', nome: 'Diana', email: 'diana@example.com' },
            { id: '105', nome: 'Eve', email: 'eve@example.com' },
            { id: '106', nome: 'Frank', email: 'frank@example.com' }
            // Adicione mais usuários conforme necessário
        ];

        const avaliacoes: Avaliacao[] = [
            { id: '1', cursoId: '1', userId: '101', nota: 5, user: users[0] },
            { id: '2', cursoId: '2', userId: '102', nota: 4, user: users[1] },
            { id: '3', cursoId: '1', userId: '103', nota: 3, user: users[2] },
            { id: '4', cursoId: '3', userId: '104', nota: 4, user: users[3] },
            { id: '5', cursoId: '4', userId: '105', nota: 5, user: users[4] },
            { id: '6', cursoId: '5', userId: '106', nota: 4, user: users[5] },
            { id: '7', cursoId: '4', userId: '101', nota: 2, user: users[0] },
            { id: '8', cursoId: '5', userId: '102', nota: 3, user: users[1] }
            // Adicione mais avaliações conforme necessário
        ];

        const aulasModulo1: Aula[] = [
            { id: '1', titulo: 'O que é Angular?', descricao: 'Descrição da aula', videoMP4: 'angular-intro.mp4', moduloId: '1' },
            { id: '2', titulo: 'Instalação e Setup', descricao: 'Descrição da aula', videoMP4: 'angular-setup.mp4', moduloId: '1' },
            { id: '3', titulo: 'Componentes Básicos', descricao: 'Descrição da aula', videoMP4: 'angular-components.mp4', moduloId: '1' }
            // Adicione mais aulas conforme necessário
        ];

        const aulasModulo2: Aula[] = [
            { id: '4', titulo: 'O que é React?', descricao: 'Descrição da aula', videoMP4: 'react-intro.mp4', moduloId: '2' },
            { id: '5', titulo: 'Instalação e Setup', descricao: 'Descrição da aula', videoMP4: 'react-setup.mp4', moduloId: '2' },
            { id: '6', titulo: 'Componentes e Hooks', descricao: 'Descrição da aula', videoMP4: 'react-hooks.mp4', moduloId: '2' }
            // Adicione mais aulas conforme necessário
        ];

        const aulasModulo3: Aula[] = [
            { id: '7', titulo: 'Fundamentos do Vue.js', descricao: 'Descrição da aula', videoMP4: 'vue-fundamentals.mp4', moduloId: '3' },
            { id: '8', titulo: 'Vue CLI e Setup', descricao: 'Descrição da aula', videoMP4: 'vue-setup.mp4', moduloId: '3' },
            { id: '9', titulo: 'Componentes Vue', descricao: 'Descrição da aula', videoMP4: 'vue-components.mp4', moduloId: '3' }
            // Adicione mais aulas conforme necessário
        ];

        const aulasModulo4: Aula[] = [
            { id: '10', titulo: 'Routing no Angular', descricao: 'Descrição da aula', videoMP4: 'angular-routing.mp4', moduloId: '4' },
            { id: '11', titulo: 'Serviços e Dependency Injection', descricao: 'Descrição da aula', videoMP4: 'angular-services.mp4', moduloId: '4' }
            // Adicione mais aulas conforme necessário
        ];

        const aulasModulo5: Aula[] = [
            { id: '12', titulo: 'Gerenciamento de Estado com Redux', descricao: 'Descrição da aula', videoMP4: 'react-redux.mp4', moduloId: '5' },
            { id: '13', titulo: 'React Router', descricao: 'Descrição da aula', videoMP4: 'react-router.mp4', moduloId: '5' }
            // Adicione mais aulas conforme necessário
        ];

        const aulasModulo6: Aula[] = [
            { id: '14', titulo: 'Vuex para Gerenciamento de Estado', descricao: 'Descrição da aula', videoMP4: 'vue-vuex.mp4', moduloId: '6' },
            { id: '15', titulo: 'Vue Router', descricao: 'Descrição da aula', videoMP4: 'vue-router.mp4', moduloId: '6' }
            // Adicione mais aulas conforme necessário
        ];

        const aulasModulo7: Aula[] = [
            { id: '16', titulo: 'Introdução ao Node.js', descricao: 'Descrição da aula', videoMP4: 'node-intro.mp4', moduloId: '7' },
            { id: '17', titulo: 'Instalação e Setup', descricao: 'Descrição da aula', videoMP4: 'node-setup.mp4', moduloId: '7' },
            { id: '18', titulo: 'Criação de APIs', descricao: 'Descrição da aula', videoMP4: 'node-api.mp4', moduloId: '7' }
            // Adicione mais aulas conforme necessário
        ];

        const aulasModulo8: Aula[] = [
            { id: '19', titulo: 'O que é Python?', descricao: 'Descrição da aula', videoMP4: 'python-intro.mp4', moduloId: '8' },
            { id: '20', titulo: 'Instalação e Setup', descricao: 'Descrição da aula', videoMP4: 'python-setup.mp4', moduloId: '8' },
            { id: '21', titulo: 'Python Básico', descricao: 'Descrição da aula', videoMP4: 'python-basic.mp4', moduloId: '8' }
            // Adicione mais aulas conforme necessário
        ];

        const modulos: Modulo[] = [
            // Módulos para o Curso de Angular
            { id: '1', titulo: 'Introdução ao Angular', quantidadeAulas: 3, cursoId: '1', aulas: aulasModulo1 },
            { id: '4', titulo: 'Angular Avançado', quantidadeAulas: 2, cursoId: '1', aulas: aulasModulo4 },
            // Módulos para o Curso de React
            { id: '2', titulo: 'Introdução ao React', quantidadeAulas: 3, cursoId: '2', aulas: aulasModulo2 },
            { id: '5', titulo: 'React Avançado', quantidadeAulas: 2, cursoId: '2', aulas: aulasModulo5 },
            // Módulos para o Curso de Vue.js
            { id: '3', titulo: 'Introdução ao Vue.js', quantidadeAulas: 3, cursoId: '3', aulas: aulasModulo3 },
            { id: '6', titulo: 'Vue.js Avançado', quantidadeAulas: 2, cursoId: '3', aulas: aulasModulo6 },
            // Módulos para o Curso de Node.js
            { id: '7', titulo: 'Introdução ao Node.js', quantidadeAulas: 3, cursoId: '4', aulas: aulasModulo7 },
            // Módulos para o Curso de Python
            { id: '8', titulo: 'Introdução ao Python', quantidadeAulas: 3, cursoId: '5', aulas: aulasModulo8 }
        ];

        this.cursos = [
            {
                id: '1',
                titulo: 'Curso de Angular',
                descricao: 'Aprenda Angular do básico ao avançado.',
                imgCapa: 'angular-course.jpg',
                valor: 99.99,
                tempoTotal: '40h',
                professor: 'João Silva',
                categorias: ['Desenvolvimento', 'Frontend'],
                avaliacoes: avaliacoes.filter(avaliacao => avaliacao.cursoId === '1'),
                modulos: modulos.filter(modulo => modulo.cursoId === '1')
            },
            {
                id: '2',
                titulo: 'Curso de React',
                descricao: 'Domine o React e suas bibliotecas.',
                imgCapa: 'react-course.jpg',
                valor: 89.99,
                tempoTotal: '35h',
                professor: 'Maria Souza',
                categorias: ['Desenvolvimento', 'Frontend'],
                avaliacoes: avaliacoes.filter(avaliacao => avaliacao.cursoId === '2'),
                modulos: modulos.filter(modulo => modulo.cursoId === '2')
            },
            {
                id: '3',
                titulo: 'Curso de Vue.js',
                descricao: 'Vue.js do básico ao avançado.',
                imgCapa: 'vue-course.jpg',
                valor: 79.99,
                tempoTotal: '30h',
                professor: 'Carlos Ferreira',
                categorias: ['Desenvolvimento', 'Frontend'],
                avaliacoes: avaliacoes.filter(avaliacao => avaliacao.cursoId === '3'),
                modulos: modulos.filter(modulo => modulo.cursoId === '3')
            },
            {
                id: '4',
                titulo: 'Curso de Node.js',
                descricao: 'Aprenda Node.js e crie APIs robustas.',
                imgCapa: 'node-course.jpg',
                valor: 69.99,
                tempoTotal: '25h',
                professor: 'Ana Paula',
                categorias: ['Desenvolvimento', 'Backend'],
                avaliacoes: avaliacoes.filter(avaliacao => avaliacao.cursoId === '4'),
                modulos: modulos.filter(modulo => modulo.cursoId === '4')
            },
            {
                id: '5',
                titulo: 'Curso de Python',
                descricao: 'Aprenda Python do básico ao avançado.',
                imgCapa: 'python-course.jpg',
                valor: 59.99,
                tempoTotal: '20h',
                professor: 'Ricardo Lima',
                categorias: ['Desenvolvimento', 'Programação'],
                avaliacoes: avaliacoes.filter(avaliacao => avaliacao.cursoId === '5'),
                modulos: modulos.filter(modulo => modulo.cursoId === '5')
            }
        ];

        this.responsiveOptions = [
            {
                breakpoint: '1050px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    getSeverity(nota: number) {
        if (nota >= 4) {
            return 'success';
        } else if (nota >= 2) {
            return 'warning';
        } else {
            return 'danger';
        }
    }

    public averageRating(ratings: Avaliacao[]): number {
        let sumRating: number = 0;
        for (let rating of ratings) {
            sumRating += rating.nota;
        }
        return sumRating / ratings.length;
    }

    // public getStars(rating: number): string[] {
    //     const fullStars = Math.floor(rating);
    //     const halfStar = rating % 1 !== 0;
    //     const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    //     const stars = Array(fullStars).fill('pi pi-star-fill');
    //     if (halfStar) {
    //         stars.push('pi pi-star-half');
    //     }
    //     return stars.concat(Array(emptyStars).fill('pi pi-star'));
    // }
}
