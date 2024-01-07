from visualize import visualize_sorting
# importe la fonction visualize_sorting() depuis le module visualize

def bubble_sort(arr):
    # fonction prend un tableau en entrée et le tri en ordre croissant
    for i in range(len(arr)-1, 0, -1):
        # boucle qui parcourt le tableau de la fin vers le début, i représente l'indice de l'élément courant

        for j in range(i):
            # boucle parcourt le tableau de l'indice 0 à l'indice i-1. La variable j représente l'indice de l'élément suivant.

            if arr[j] > arr[j+1]:
                # Si l'élément courant est plus grand que l'élément suivant, alors les deux éléments sont intervertis.

                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                # Les deux éléments sont intervertis en utilisant une variable temporaire temp.
                visualize_sorting(arr)
                #  pour visualiser le tri des éléments du tableau
    return arr
    # renvoie le tableau trié