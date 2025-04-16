# React + Leaflet



## Cargar markers
Los Markers se cargan desde un archvo JSON en formato:
``` 
[
  {
    "nombre": "Iglesia de San Francisco",
    "coordenadas": { "lat": -29.90453333, "lng": -71.24975556 },
    "direccion": "Avenida Balmaceda s/n, esquina Eduardo de la Barra"
  },
]
```

## GeoJson
Los sectores se cargan desde archivo en formato GeoJSON
```
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            [
              -71.25254953221055,
              -29.902172458233274
            ],
            [
              -71.25264866903777,
              -29.902882587519038
            ],
            [
              -71.25272693495386,
              -29.903325850366855
            ],
            [
              -71.2513494548311,
              -29.90329871188181
            ],
            [
              -71.25122422936535,
              -29.902113657492514
            ],
            [
              -71.25254953221055,
              -29.902172458233274
            ]
          ]
        ],
        "type": "Polygon"
      }
    }
  ]
}
```