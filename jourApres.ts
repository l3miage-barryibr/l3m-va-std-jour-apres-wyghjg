export type DATE = readonly [jour: number, mois: number, année: number];

/**
 * Renvoie le jour suivant d
 * Si d est invalide, lèvee une exception "date invalide".
 * Attention : Ne pas modifier le paramètre d dans la signature de la fonction.
 */
export function jourAprès(d: DATE): DATE {
  const [j, m, a] = d;
  if (
    d.find((val) => !Number.isInteger(val)) ||
    d[0] < 1 ||
    d[1] < 1 ||
    d[0] > 31 ||
    d[1] > 12
  ) {
    throw 'date invalide';
  }
  // Gestion des mois de 31 jours
  let jourMax;
  if ([1, 3, 5, 7, 8, 10, 12].indexOf(m) >= 0) {
    jourMax = 31;
  } else if ([4, 6, 9, 11].indexOf(m) >= 0) {
    jourMax = 30;
  } else {
    const anneBissextile = (a % 4 === 0 && a % 100 !== 0) || a % 400 === 0;
    jourMax = anneBissextile ? 29 : 28;
  }
  if (j > jourMax) throw 'date invalide';

  return j < jourMax ? [j + 1, m, a] : m < 12 ? [1, m + 1, a] : [1, 1, a + 1];
}
