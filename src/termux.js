const termux = termux => {
return `Comandos Básico para se usar no termux ou qualquer terminal que simula o linux

cd = abrir diretórios(pastas)
exemplo = cd /sdcard/

ls = lista os arquivos e diretórios presentes

mv = move arquivo ou diretório para outro local
exemplo = mv teste.sh(arquivo) $HOME
Obs: o comando $HOME é a pasta home do termux(onde você inicia)

cp = copia arquivos e diretório para outro local
exemplo = cp -r teste(diretório) $HOME 
Obs: o -r depois do cp é um argumento foi usado pra mover o diretório com mais seu conteudo para outro local

o que é argumentos = argumentos são opções que usa no terminal para poder executar o comando de uma forma diferente

rm = remove arquivos e diretórios
exemplo = rm -r -f teste(diretório)
Obs = A mesma coisa do comando cp, mas o -f se usa pra caso o arquivo ou diretório tenha dificuldade de ser excluido o -f força a exclusão dele`
}

exports.termux = termux
