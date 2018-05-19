import { Injectable } from '@angular/core';

@Injectable()
export class HelpService {

    // TODO: delete when the backend work
    // and make gets direct by http
    chickenLittle: any = {
        name: 'Chicken Little', photoURL: 'xxx'
    }
    helps: any = {
        1: {
            title: 'Dúvida em p1',
            author:  this.chickenLittle,
            description: 'Como faço pra pegar o placar de um jogo, ex "3x1" independente de posicao, pois a posicao pode variar se o placar for 11x20',
            comments: []
        },
        2: {
            title: 'Como fazer um MergeSort em haskell?',
            author:  this.chickenLittle,
            description: 'Olá, gostaria de saber como implementar um merge sort em haskell',
            comments: [{
                author: {name: 'Wesley Anibal',
                        id: 666,
                        tutoringMastered: [
                            'Progamacao 1',
                            'Programacao 2',
                            'Programacao Funcional',
                            'Estrutura de Dados',
                            'Compiladores'
                        ]},
                comment: 'Pega o mouse e o teclado e enfia no cu, arrombado'
            }]
        },
        3: {
            title: 'Dúvida em Engenharia de Software',
            author: this.chickenLittle,
            description: 'O miniteste dessa semana é o miniteste 0 ou 1?',
            comments: [{
                author: {name: 'Chicken Big',
                        id: 24,
                        tutoringMastered: [
                            'Scrum1',
                            'Scrum2',
                            'Scrum Master'
                        ]},
                comment: 'Hi! I am a Scrum master. I will explain the Scrum in a Classroom'
            }]
        },
        
    }

    getHelps(){
        // TODO: take all helps to show in timeline
        //  think in way to get 10 for paginated timeline
    }

    getHelp(id: any){
        return this.helps[id] || null;
    }

    constructor() { }

}