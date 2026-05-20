# Nettisivupohja

Tama on yksinkertainen staattinen nettisivupohja, jonka voi julkaista GitHub Pagesilla.

## Tiedostot

- `index.html` - sivun rakenne ja sisalto
- `styles.css` - ulkoasu ja responsiivisuus
- `script.js` - mobiilivalikko ja automaattinen vuosiluku

## Muokkaus

1. Vaihda `index.html`-tiedostoon oma nimi, tekstit, sahkoposti ja linkit.
2. Muokkaa vareja `styles.css`-tiedoston `:root`-kohdasta.
3. Avaa `index.html` selaimessa ja tarkista lopputulos.

## Julkaisu GitHub Pagesilla

1. Luo uusi repository GitHubissa.
2. Lataa nama tiedostot repositoryyn.
3. Mene repositoryssa kohtaan `Settings` -> `Pages`.
4. Valitse `Deploy from a branch`.
5. Valitse branchiksi `main` ja kansioksi `/root`.
6. Tallenna. GitHub antaa hetken paasta julkisen linkin sivullesi.

## Vinkki

Jos haluat omat kuvat mukaan, tee kansio `assets` ja laita kuvat sinne. Voit viitata kuvaan esimerkiksi nain:

```html
<img src="assets/kuva.jpg" alt="Kuvaus kuvasta" />
```
