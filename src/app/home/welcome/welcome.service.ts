import { Injectable } from '@angular/core';

@Injectable()
export class WelcomeService {

  helps: any = [
    {
        generalDescription: 'Dúvida em p1',
        detailedDescription: 'Como faço pra pegar o placar de um jogo, ex "3x1" independente de posicao, pois a posicao pode variar se o placar for 11x20',
        awnsers: [
          {
            author: "Ednaldo Pereira",
            awnser: "Ednaldo Pereira",
          },

          {
            author: "Ednaldo Pereira",
            awnser: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          }

        ]
    },
    {
        generalDescription: 'Como fazer um MergeSort em haskell?',
        detailedDescription: 'Olá, gostaria de saber como implementar um merge sort em haskell',
        awnsers: [
          {
            author: "Ednaldo Pereira",
            awnser: "Ednaldo Pereira",
          }

        ]
    },
    {
        generalDescription: 'Dúvida em Engenharia de Software',
        detailedDescription: 'O miniteste dessa semana é o miniteste 0 ou 1?',
        awnsers: [
          {
            author: "Ednaldo Pereira",
            awnser: "Ednaldo Pereira",
          },

          {
            author: "Ednaldo Pereira",
            awnser: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          }

        ]
    },
  ];

  constructor() { }

  getHelps(){
    return this.helps;
  }

}
