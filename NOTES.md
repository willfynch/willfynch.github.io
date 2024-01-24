# i18n

tuto : https://medium.com/@kitagolda/next-js-v13-multilingual-server-components-adding-internationalization-in-a-statically-exported-a94e1c927d49

Contenu :
- Texte avec des balises strong / link déjà dans le HTML : OK avec react-parser je peux mettre tout dans des JSONS **MAIS** tailwind n'est pas pris en compte. Cela aura un impact uniquement sur les textes formattés. Pour la bio je peux très bien avoir bio1, bio2 etc, chaque partie correspondant au contenu d'une balise p. 
- Texte dans des objets : 
- Texte en markdown : il faut voir si en fonction d'une variable (locale, ici), je peux récupérer le md avec le bon slug donc la bonne langue

## Texte dans le HTML

- Trouver une lib qui convertit en HTML du contenu objet qui contient des balises

https://linguinecode.com/post/how-to-add-html-in-json-file