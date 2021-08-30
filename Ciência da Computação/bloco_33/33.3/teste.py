lista = [3,1,2]
inteiro = 5

def lista_inteiros():
  # somar dois itens da lista da o resultado inteiro
  for item in lista:
      for item2 in lista:
          if not(item is item2):
              if(item + item2 == inteiro):
                  return True
  return False

print(lista_inteiros())
