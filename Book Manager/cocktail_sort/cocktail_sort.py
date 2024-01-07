def cocktail_sort(arr):
  swapped = True
      #  indique si un échange a eu lieu lors de la dernière passe de l'algorithme
  start, end = 0, len(arr)-1
  # start = début tableau, end = fin

  while swapped:
    # s'exécute tant qu'un échange a eu lieu lors de la dernière passe de l'algorithme.
    swapped = False
    for i in range(start, end):
      if arr[i] > arr[i+1]:
        arr[i], arr[i+1] = arr[i+1], arr[i]
        swapped = True
    end = end - 1
    # parcourt le tableau de gauche à droite, en comparant chaque élément à l'élément suivant
    
    if not swapped: break
    # si tableau est déjà trié et la boucle while peut être interrompue

    swapped = False
    for i in range(end, start, -1):
      if arr[i] < arr[i-1]:
        arr[i], arr[i-1] = arr[i-1], arr[i]
        swapped = True
        # Si l'élément actuel est plus petit que l'élément précédent, les deux éléments sont échangés.
    start = start + 1
    # La variable start incrémentée de 1 de sorte qu'il ne soit pas trié de nouveau

  return arr
  # renovoie le tableau trié