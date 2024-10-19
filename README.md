# Projeto CPF Inclusivo

## Objetivo

O intuito deste projeto é demonstrar que o campo de filiação do CPF pode ser eficaz e inclusivo. O sistema permite que, ao digitar um CPF, qualquer nome de filiação seja utilizado para a consulta, sem a necessidade de informar apenas o nome da mãe.

### Contexto

Vivemos em diversas estruturas familiares, incluindo aquelas com dois pais ou duas mães. Este projeto visa facilitar o acesso às informações do CPF para todos os tipos de famílias, garantindo que todos possam consultar sem a exigência de um nome específico.

### Funcionalidade da API

Na API, é possível realizar consultas utilizando apenas o nome de um dos responsáveis listados na filiação. Não importa qual informação é digitada; o CPF sempre retornará os dados correspondentes. Essa abordagem também é útil em outros sistemas, como nas escolas, onde uma criança pode ter duas mães. Ao digitar qualquer um dos nomes das responsáveis legais, as informações serão vinculadas corretamente.

## Como Testar a API

1. Utilize o endpoint GET para consultar informações do CPF.
2. Utilize o endpoint POST para adicionar novos registros de CPF com filiações diversas.

### Exemplo de JSON para POST

```json
{
    "cpf": "123.456.789-00",
    "nome": "João Silva",
    "filiacao": ["Marina Silva", "Carla Santos"]
}
```

nstruções para adicionar ao Git

1. Crie um arquivo chamado `README.md` no diretório raiz do seu projeto.
2. Cole o conteúdo acima no arquivo.
3. Salve o arquivo.
4. Adicione e comite as mudanças no seu repositório Git:

```json
{
git add README.md
git commit -m "Adiciona README com descrição do projeto"
git push
