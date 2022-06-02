## Chrome Store

1. Ir al [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard)

2) Ir al menu de la derecha y clickear en **Items**

3. Seleccionar en la esquina superior derecha **New Item**

4) Buscamos y dropeamos el archivo **buscala-tv.zip** que lo podemos generar corriendo **yarn build**

5. En la sección **Product details** completar con los siguientes datos

- Description:

```
¿Dónde miro la serie o película? Selecciona el texto de tu película o serie y te buscamos en qué servicios de Streaming podes verla.

Funciona en los siguientes países:
- 🇦🇷Argentina
- 🇨🇱 Chile
- 🇪🇸 España
- 🇨🇴 Colombia
- 🇵🇪 Perú
- 🇲🇽 México
- 🇵🇾 Paraguay
- 🇺🇾 Uruguay
```

- Category: Search Tools
- Language: Spanish (Latin America)

![chrome-store-1](/docs/chrome-store-1.png)

6. En la sección **Graphic assets** completar con los siguientes datos

- Store icon: usar el icono que esta en **src/assets/icon-128.png**
- Global promo video: **https://youtu.be/vYgxcOxsIZg**
- Screenshots: agregamos las screenshots que estan en **docs/screenshot-X**, de la 1 a la 4

![chrome-store-2](/docs/chrome-store-2.png)

7. En la sección **Additional details** completar con los siguientes datos

- Homepage URL: **https://www.buscala.tv**
- Support URL: **https://github.com/lndgalante/buscala.tv-extension**

![chrome-store-3](/docs/chrome-store-3.png)

## TODO

- [x] Logo para el menu contextual
- [x] Creo que no es necesario TS, pero abierto a discutirlo
- [x] Testing, agregaría, pero habría que investigar como testear extensiones
- [x] Subir versión de prueba al Chrome store, agregar assets y textos al repo
- [ ] Agregar botón en una esquina inferior de [Buscala.TV](https://Buscala.tv) que te lleve al Chrome Web Store
