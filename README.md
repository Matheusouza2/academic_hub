
# AcademicHUB

O AcademicHUB é uma aplicação desenvolvida pela turma 2023.2 de Programação WEB da UNIVASF. A aplicação consiste em um WEBAPP de gerenciamento de uma unidade educacional, possibilitando matricula de alunos, cadastros de cursos e disciplinas e gestão por parte dos professores dos horários de aulas, planos de disciplinas assim como notas e faltas dos alunos. 

## Tecnologias
Para desenvolvimento da aplicação foram utilizadas as seguintes tecnologias:

| Tecnologia | Versão |
| - | - |
| Laravel | v10.10 |
| MariaDB | v10.6  |
| ReactJS | 18.2.0 |

## Instalação

Faça um clone do projeto 

`git clone https://github.com/Matheusouza2/academic_hub.git`

Dentro do projeto você terá duas pastas a frontend e backend, dentro da pasta frontend rode o comando: 

```bash
  npm install
  npm run dev
```

Dentro da pasta backend você deverá rodas os comandos: 

```bash
  composer install --no-dev
  cp .envexample .env
``` 


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar alterar as seguintes variáveis de ambiente no seu .env

`DB_HOST=SEU_HOST`

`DB_PORT=PORTA_DO_BD`

`DB_DATABASE=NOME_DATABASE`

`DB_USERNAME=USERNAME_BD`

`DB_PASSWORD=SENHA_BD`

Após a mudança de váriaveis rode os comandos: 

```bash
  php artisan key:generate
  php artisan migrate
```


## Documentação de cores

| Cor | Hexadecimal |
| -   | -           |
| Cor primária       | ![#02ADEE](https://via.placeholder.com/10/02ADEE?text=+) #02ADEE |
| Cor secondária       | ![#3A71BE](https://via.placeholder.com/10/3A71BE?text=+) #3A71BE |
| Cor terciária       | ![#2E318E](https://via.placeholder.com/10/2E318E?text=+) #2E318E |
| Cor success       | ![#22C55E](https://via.placeholder.com/10/22C55E?text=+) #22C55E |
| Cor warning       | ![#EAB308](https://via.placeholder.com/10/EAB308?text=+) #EAB308 |
| Cor danger       | ![#EF4444](https://via.placeholder.com/10/EF4444?text=+) #EF4444 |
| Cor info       | ![#3B82F6](https://via.placeholder.com/10/3B82F6?text=+) #3B82F6 |
| Cor dark       | ![#0A0A0A](https://via.placeholder.com/10/0A0A0A?text=+) #0A0A0A |

