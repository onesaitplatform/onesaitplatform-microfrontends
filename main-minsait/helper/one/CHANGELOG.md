# Changelog

## [4.0.1] - 12/01/2024
- Form: corrección del método `validateField`
- Button: nueva propiedad `active`
- Input: se añaden los slots `prepend` y `append`
- Input Number: se ajustan los estilos de alineación de las flechas
- Loading: nueva propiedad `full-height` para ocupar el 100% de la altura del componete que contiene el Loading
- Select: corrección de estilos cuando los textos de las opciones son demasiado largos
- Tree: corrección de estilos para los slots de Tree Item
- Badge: nueva propiedad `color` para introducir un color de fondo personalizado. El color de texto del badge se establecerá automáticamente en función del contraste necesario

## [4.0.0] - 12/12/2023
- Nueva documentación y ejemplos
- Nuevos tokens y ajustes de componentes por requsitos de accesibilidad
- Revisión de espaciados de los componentes en versión responsive
- Dataviz: se corrige el error de consola para la etiqueta `<svg>`

## [4.0.0-beta.24] - 29/11/2023
- Timepicker range: nueva variante para los modos `arbitrary` y `select`, usando la prop `is-range` a `true`
- Datepicker range: accesible mediante teclado
- Select: fix en modo `multiple`, cuando el value es `null`
- Dataviz: se corrige la visualización cuando la altura `height` que se indica al componente es `100%`
- Tabs: se corrige el uso de pestañas anidadas
- New icons:
  - front-off
  - desktop
  - divisor
  - divisor-large
  - divisor-xlarge
  - subtraction
  - subtraction-large
  - subtraction-xlarge

## [4.0.0-beta.23] - 30/10/2023
- Select: fix de estilos en variante `multiple` y `filterable`
- Notification: minor fix al eliminar del dom la notificación
- Input: fix con el método `focusMethod` cuando el input se encuentra dentro de `form-item`
- Breadcrumb: se añade una prop `breadcrumbsKey` para actualizar el componente. Fix para la prop `clickCallback`

## [4.0.0-beta.22] - 23/10/2023
- Datepicker: añadidas propiedades `strategy` y `flip`
- Select: estado `readonly` añadido
- Cascader: fix storie
- Transfer: traducciones de botones, estilos de estados, corrección de accesibilidad
- Table: corrección del método `setSelectedRows` en la tabla con selección simple
- New icons:
  - lightning
  - lightning-off

## [4.0.0-beta.21] - 19/10/2023
- Transfer: primera versión
- Form item: corrección para inputs con validación con trigger 'change'
- New icons:
  - tick-double
  - calendar-day
  - calendar-month
  - calendar-week
  - clipboard-minus
  - clipboard-plus
  - filter-close
  - filter-open
  - folder-settings
  - handtool-disabled
  - handtool-enabled

## [4.0.0-beta.20] - 11/10/2023
- OUX-133: corrección de comportamiento en el valor que se muestra en el input al mantenerlo abierto cuando se cambia externamente
- Cascader: Limpiar componente cascader y revisar funcionamiento añadiendo propiedades trigger y hoverThrottle
- Idiomas: comprobacion del que la traduccion existe al cargar los idiomas de un componente

## [4.0.0-beta.19] - 03/10/2023
- Datepicker range: nueva variante, combinable con `unlink-panels` y `only-one-calendar`
- Datepicker: permite controlar los valores de fecha seleccionados desde el campo de texto asociado
- Corrección de error en consola del componente Tag
- Corrección de z-index y posicionamientos entre: Popover y Tabs
- Cascader: primera versión y documentación
- Select: corrección de estilos rtl
- Form item: posición absoluta del mensaje de error

## [4.0.0-beta.18] - 22/09/2023
- Dataviz Line: primera versión
- Tag: nueva propiedad `color` para introducir un color de fondo personalizado. El color de texto de la etiqueta se establecerá automáticamente en función del contraste necesario
- Corrección de z-index y posicionamientos entre varios componentes: Table, Dialog, Subheader y Main Navigation
- Datepicker: nuevas propiedades `calendar-always-visible` - para que el calendario siempre esté visible, combinable con `hidden-inputs` para ocultar los inputs o `hide-suffix` para ocultar el botón de calendario

## [4.0.0-beta.17] - 18/09/2023
- Throttle-debounce y async-validator incluídas como dependencia
- Dataviz Pie: primera versión
- Stencil warnings fix
- Table, Subheader y Main Navigation: z-index corregidos
- Table: corrección de ordenamiento

## [4.0.0-beta.16] - 13/09/2023
- Form y Form Item: correcciones en la validación bajo `trigger`: `change`
- Input: corrección de alineación de iconos en estado deshabilitado

## [4.0.0-beta.15] - 12/09/2023
- Subheader: correción ancho máximo cuando lleva Tabs, añadida la prop `is-sticky`, corrección de z-index
- Table: corrección color de fondo de las celdas en las columnas fijas, corrección de z-index
- Tabs: corrección a la hora de anidar Tabs
- Module: fix se elimina el div vacío de header si no lleva título
- Loading: corrección de comportamiento y z-index

## [4.0.0-beta.14] - 11/09/2023
- Dataviz Bar
- Storybook: Índices, ejemplos de uso
- Tree: permite añadir acciones personalizadas a un elemento del árbol mediante el `slot="custom-content"`
- Table: se añade un `slot="empty"` para mostrar un mensaje cuando la tabla no tiene datos, por defecto se presenta el componente `one-empty-state`

## [4.0.0-beta.13] - 09/08/2023
- Error langObserver.disconnect corregido
- Tematización: se cambia la ruta de destino al generar tokens desde un proyecto
- Documentación: React Wrapper Component
- New icons:
  - bottle-new
  - bottle-error
  - bottle-success
  - bottle-washed
  - bottle-pending
  - bottle-washing
  - bottle
  - bottle-glass
  - deliver-open
  - double-top
  - double-bottom
  - file-search
  - filter-clear
  - login
  - panel-left-open
  - panel-left-closed
  - pause
  - play-2
  - stop
  - scan-box
  - scan-default
  - scan-bidi
  - tree
  - truck-pickup
  - truck-deal
  - truck-shipment
  - wine-store

## [4.0.0-beta.12] - 27/07/2023
- Accordion, Checkbox, Datepicker, Timepicker, Input, Input Number, Radio, Rate, Select, Slider, Switch, Upload: Se cambia el nombre del evento `changeEvent` por `changed`
- Accordion: fix si no se pasa el atributo `value`
- Input Number: fix si no hay valor inicial y hay valor mínimo no se inicia el componente con el valor mínimo
- Table: Se quita el shadowRoot, de forma que se puedan pasar componentes con estilos personalizados

## [4.0.0-beta.11] - 25/07/2023
- Select: Añadido alias al evento `changeEvent`
- Main Navigation: main-navigation callback acepta parámetros, se añade la prop `keyboard-link-not-allowed`, para evitar la redirección al acceder por teclado

## [4.0.0-beta.10] - 12/07/2023
- Select: Atributo `select-label` cambiado a `label`
- Datepicker y Timepicker: Atributo `input-label` cambiado a `label`
- Radio group: Corrección de estilos de label
- Form Item: corrección de estilos y propiedad `is-disabled`
- Switch: corrección de bugfix con valores boolean
- Form: corrección de error de consola cuando no se pasa el atributo `model`
- Table: posibilidad de añadir `customCellTemplate` con fila expandible

## [4.0.0-beta.9] - 05/07/2023
- Notification: ajustes y documentación
- Empty State

## [4.0.0-beta.8] - 04/07/2023
- Tabs, Tag, Notification: ajustes y documentación
- Tokens: tokens de tipografía como custom properties (variables css)

## [4.0.0-beta.7] - 29/06/2023
- Logo, Main Header, Main Navigation, Module, Pagination, Popover, Progress, Radios, Rate, Select, Slider, Steps, Subheader, Switch y Table: ajustes y documentación
- Tokens: nuevo token de fuente $font-family-400 y fuente Titilium añadida
- Corregidos errores de Typescript
- Añadida documentación para proyecto con Node.js y express.js
- Librería actualizada a la última versión estable de stencil: 4.0.1

## [4.0.0-beta.6] - 23/06/2023
- Correcciones de form y form-item
- Propiedades con prefijo `aria` modificadas a `accessibility` para evitar errores de accesibilidad
- Datepicker y Timepicker: corrección de estilos
- Link, Input, Input Number, Loading y KPI: ajustes y documentación
- Tokens: tokens de feuente en formato custom properties

## [4.0.0-beta.5] - 15/06/2023
- Organización de páginas de documentación
- Página de documentación Tema personalizado
- Corregidos errores para generar un tema personalizado
## [4.0.0-beta.4] - 14/06/2023
- Revisión de estilos y funcionalidad de formularios
- Story de formulario
- Página de Primeros pasos
- Página de Accesibilidad

## [4.0.0-beta.3] - 12/06/2023
- Revisión de estilos y funcionalidad de componentes
- Documentación de componentes manual
- Funcionalidad para generar tema de color desde un proyecto
- Añadido de `enableImportInjection` en la configuración de stenciljs por compatibilidad con Vite
- Corrección error de lang en Drawer

## [4.0.0-beta.2] - 05/06/2023
- Utilidades añadidas a Storybook
- Página de bienvenida
- Changelog
- Librería actualizada a la última versión estable de stencil: 3.3.1

## [4.0.0-beta.1] - 31/05/2023
- Lanzamiento inicial del sistema de diseño Onesait Experience v4
- Temas light y dark
- Soporte RTL
- Accesibilidad AA
- Componentes:
  - Accordion
  - ActionsMenu
  - Alert
  - Backtop
  - Breadcrumbs
  - Button
  - Checkbox
  - Datepicker
  - Timepicker
  - Dialog
  - Divider
  - Drawer
  - Dropdown
  - Icon
  - Image
  - InputNumber
  - Input
  - KPI
  - Link
  - Loading
  - Logo
  - MainHeader
  - MainNavigation
  - Module
  - Pagination
  - Popover
  - Progress
  - Radio
  - Rate
  - Select
  - Slider
  - Steps
  - Subheader
  - Switch
  - Table
  - Tabs
  - Tag
  - Timeline
  - Toast/Notification
  - Tooltip
  - Tree
  - Upload
