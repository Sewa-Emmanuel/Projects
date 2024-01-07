from visualize import visualize_sorting


def bucketSort(arr):
    # tri en utilisant l'algorithme de tri par compartiments (paniers)

    bucket = []
    # stocke les compartiments
    for i in range(len(arr)):
        bucket.append([])
        # boucle crée un compartiment pour chaque élément du tableau
    for j in arr:
        index_b = int(10 * j)
        bucket[index_b].append(j)
        # index du compartiment est calculé en multipliant l'élément par 10 
    for i in range(len(arr)):
        bucket[i] = sorted(bucket[i])
        # Cette boucle tri chaque compartiment.
    k = 0
    # initialise une variable k à 0.
    for i in range(len(arr)):
        for j in range(len(bucket[i])):
            arr[k] = bucket[i][j]
            k += 1
        visualize_sorting(arr)
        # La fonction visualize_sorting() est appelée à chaque fois qu'un élément est ajouté au tableau arrw

    return arr
