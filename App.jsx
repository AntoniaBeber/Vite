
import './App.css'

function App(){
  const nome = 'Antonia';
  const ano = new Date().getFullYear();
  const profissao = 'Desenvolvedora Web'
  const anoDeNascimento = 2002;
  const idade = ano - anoDeNascimento;
  let aviso;
   
  if (idade >= 18) {
   aviso = 'Conteudo para Maiores de Idade'
   }
   if (idade <18){
    aviso = 'Conteudo para Menores de Idade'
   }
  return (
    <>
    <h1>{nome}</h1>
    <p>{profissao}</p>
    <p>Porto Alegre,{ano}</p>
    <p>{idade} anos de idade </p>
    <p>{aviso}</p>
    </>
  )
}

export default App
