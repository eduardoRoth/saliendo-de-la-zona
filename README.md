# Saliendo de la Zona

## Zone

Usaremos ZoneJS para el control de cambios en Angular. Recuerda que
debes de tener en tu `app.config.ts` el provider de Zone
`provideZoneChangeDetection({ eventCoalescing: true })`

Además debes de tener en tu archivo `angular.json` el
polyfill de zone.js:

```
  "polyfills": [
    "zone.js"
  ],
```

## Zoneless

En este modo, utilizaremos el modo experimental de Angular para no
utilizar ZoneJS en la detección de cambios. Hay que reemplazar el
provider de Zone con el de Zoneless
`provideExperimentalZonelessChangeDetection()` y eliminar
ZoneJS de la propiedad polyfill en el archivo
`angular.json`

## Install

`npm i`

## Development server

`ng serve`
