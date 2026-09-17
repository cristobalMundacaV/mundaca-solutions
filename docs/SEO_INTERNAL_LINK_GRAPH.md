# Internal link graph

```mermaid
graph TD
  Home[Mundaca home] --> Products[/productos]
  Home --> Solutions[Soluciones]
  Products --> FoodiesHub[/productos/foodies]
  Products --> CarbonoHub[/productos/carbono-zero]
  FoodiesHub --> Foodies[foodies.mundacasolutions.com]
  CarbonoHub --> Carbono[carbonozero.mundacasolutions.com]
  Solutions --> Custom[Software a medida]
  Solutions --> Automation[Automatización]
  Solutions --> Intelligence[Inteligencia operacional]
  Foodies --> FoodiesCommercial[Páginas comerciales y recursos]
```

La home, navegación y footer usan anchors reales. Las páginas corporativas mantienen contexto de portfolio y enlazan al sitio oficial; no son canonicalizadas hacia los subdominios.
