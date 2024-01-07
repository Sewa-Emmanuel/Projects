# fonction qui prend en paramètre une chaine de caractère
def transform_bwt(data):
     # Liste des rotations possibles de la chaîne de caractères
    rotations = [data[i:] + data[:i] for i in range(len(data))]
     # Tri des rotations par ordre alphabétique
    rotations.sort()
    # prend le dernier caractère de la chaine à chaque rotation
    transformed_data = ''.join(rotation[-1] for rotation in rotations)
     # cherche où se trouve la chaîne d'origine parmi toutes les rotations triées
    key = rotations.index(data)
     #retourne la chaine de caractère transformé et la clé     
    return transformed_data, key

    # fonction qui prend en paramètre la chaine de caractère transformée et key
def inverse_bwt(transformed_data, key):
    # Crée une liste 'table' de chaînes vides de la même longueur que 'transformed_data'
    table = [''] * len(transformed_data)
    # boucle permettant de lire chaque caractère de la chaine transformed_data 
    for i in range(len(transformed_data)):
         # tri des caractères de transformed_data ordre lexicographique à l'aide de la fonction : sorted dans la liste table
        table = sorted([transformed_data[i] + table[i] for i in range(len(transformed_data))])
    original_data = table[key]
    return original_data
