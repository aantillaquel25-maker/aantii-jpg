# asier.jpg — portfolio fotográfico

Primera versión de una web personal desarrollada con HTML, CSS y JavaScript vanilla.

## Estructura

- `index.html`: contenido y estructura de la página.
- `css/styles.css`: identidad visual, maquetación responsive y estilos.
- `js/main.js`: menú móvil y año automático del footer.
- `img/`: carpeta para tus fotografías finales.

## Cómo ejecutarlo localmente

### Opción rápida
Abre `index.html` directamente en el navegador.

### Opción recomendada en VS Code
1. Abre la carpeta `asier-jpg-portfolio` en Visual Studio Code.
2. Instala la extensión **Live Server** si no la tienes.
3. Haz clic derecho sobre `index.html`.
4. Selecciona **Open with Live Server**.

También puedes usar cualquier servidor estático local.

## Sustituir los marcadores por tus fotos

En `css/styles.css`, busca `.hero-image` y cambia su `background` por:

```css
background: url("../img/hero-football.jpg") center 35% / cover no-repeat;
```

Después añade a `img/` una fotografía llamada `hero-football.jpg`.

Para las tres tarjetas de proyecto, cambia los fondos de `.image-sport::before`, `.image-cars::before` y `.image-portrait::before` por imágenes reales. Por ejemplo:

```css
.image-sport::before {
  background: linear-gradient(0deg, rgba(0,0,0,.4), transparent),
              url("../img/deporte/partido-01.jpg") center / cover no-repeat;
}
```

Repite el proceso para las demás categorías y elimina los textos de marcador `AÑADE TU FOTO` y `TU FOTOGRAFÍA PRINCIPAL` cuando ya hayas colocado las imágenes.

## Personalización imprescindible antes de publicar

- Cambia el enlace de Instagram por tu perfil profesional real.
- Cambia `hola@asier.jpg` por tu correo real. El dominio `.jpg` no implica que ese correo exista.
- Actualiza la presentación y los servicios para que describan tu situación real.
- Usa solo fotografías que tengas derecho a publicar y revisa los permisos correspondientes.
- Comprueba la web en móvil, tablet y ordenador.

## Publicación

Al ser una web estática, puedes alojarla en GitHub Pages o en otro servicio de hosting estático. Si quieres usar un dominio propio, tendrás que registrar uno y configurar sus DNS.
