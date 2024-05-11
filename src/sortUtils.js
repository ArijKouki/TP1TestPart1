export function trier(array) {
    // Vérifie si l'entrée est un tableau et si tous les éléments sont des nombres
    if (!Array.isArray(array) || array.some(isNaN)) {
        throw new Error('L\'entrée doit être un tableau de nombres.');
    }

    // Tri le tableau par ordre croissant
    return array.slice().sort((a, b) => a - b);
}
