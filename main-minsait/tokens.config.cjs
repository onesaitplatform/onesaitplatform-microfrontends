/**
 * Archivo de configuración para el consumo de tokens desde Figma
 *
 * @param {String} authToken El token de autentificación del usuario
 * @param {Array} fileIDs Los identificadores único de los archivos de Figma
 * @param {String} idTheme Nombre del tema personalizado
 * @param {Array} tokens Los diferentes tokens a consumir
 *
 * name: Nombre del token
 * type: Tipo del token: ['color']
 * format: Formato de salida: ['scss/variables', 'css/variables']
 * default: Añadir !default al valor de la propiedad css: [true, false ]
 *
 */

module.exports = {
  authToken: '42536-028869bd-cec2-4b1f-9278-87086684001b',
  fileIDs: ['jpbhafBXUIOX4YXIchW7jh', '7ElD4doT5gpoieMIeYsETN'],
  idTheme: 'Santander',
  tokens: [
    {
      name: 'color-light-brand',
      theme: 'light-brand',
      type: 'color',
      format: 'css/variables'
    },
    {
      name: 'color-dark-brand',
      theme: 'dark-brand',
      type: 'color',
      format: 'css/variables'
    }
  ]
}
