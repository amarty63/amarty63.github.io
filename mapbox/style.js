
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "AlignementsdarbresPlantezleDcor_0": {
            "type": "geojson",
            "data": json_AlignementsdarbresPlantezleDcor_0
        }
                    ,
        "BosquetsPlantezleDcor_1": {
            "type": "geojson",
            "data": json_BosquetsPlantezleDcor_1
        }
                    ,
        "HaiesPlantezleDcor_2": {
            "type": "geojson",
            "data": json_HaiesPlantezleDcor_2
        }
                    ,
        "VergersPlantezleDcor_3": {
            "type": "geojson",
            "data": json_VergersPlantezleDcor_3
        }
                    ,
        "Communes_4": {
            "type": "geojson",
            "data": json_Communes_4
        }
                    ,
        "EPCI_5": {
            "type": "geojson",
            "data": json_EPCI_5
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_AlignementsdarbresPlantezleDcor_0_0",
            "type": "fill",
            "source": "AlignementsdarbresPlantezleDcor_0",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#ffd209'}
        }
,
        {
            "id": "lyr_AlignementsdarbresPlantezleDcor_0_1",
            "type": "line",
            "source": "AlignementsdarbresPlantezleDcor_0",
            "layout": {},
            "paint": {'line-width': 10.085714285714284, 'line-opacity': 1.0, 'line-color': '#ffd209'}
        }
,
        {
            "id": "lyr_BosquetsPlantezleDcor_1_0",
            "type": "fill",
            "source": "BosquetsPlantezleDcor_1",
            "layout": {},
            "paint": {'fill-opacity': 1.0}
        }
,
        {
            "id": "lyr_BosquetsPlantezleDcor_1_1",
            "type": "line",
            "source": "BosquetsPlantezleDcor_1",
            "layout": {},
            "paint": {'line-width': 8.824999999999998, 'line-opacity': 1.0, 'line-color': '#724815'}
        }
,
        {
            "id": "lyr_HaiesPlantezleDcor_2_0",
            "type": "line",
            "source": "HaiesPlantezleDcor_2",
            "layout": {},
            "paint": {'line-width': 5.673214285714285, 'line-opacity': 1.0, 'line-color': '#16bf0d'}
        }
,
        {
            "id": "lyr_VergersPlantezleDcor_3_0",
            "type": "fill",
            "source": "VergersPlantezleDcor_3",
            "layout": {},
            "paint": {'fill-opacity': 1.0}
        }
,
        {
            "id": "lyr_VergersPlantezleDcor_3_1",
            "type": "line",
            "source": "VergersPlantezleDcor_3",
            "layout": {},
            "paint": {'line-width': 10.085714285714284, 'line-opacity': 1.0, 'line-color': '#ff460e'}
        }
,
        {
            "id": "lyr_Communes_4_0",
            "type": "fill",
            "source": "Communes_4",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#e8718d'}
        }
,
        {
            "id": "lyr_Communes_4_1",
            "type": "symbol",
            "source": "Communes_4",
            "layout": {'text-offset': [0.0, 0.0], 'text-field': ['get', 'NOM_COM'], 'text-size': '14.285714285714285', 'text-font': ['Open Sans Regular']},
            "paint": {'text-halo-width': '3.571428571428571', 'text-halo-color': '#ffffff', 'text-color': '#000000'}
        }
,
        {
            "id": "lyr_EPCI_5_0",
            "type": "line",
            "source": "EPCI_5",
            "layout": {},
            "paint": {'line-width': 1.7857142857142856, 'line-opacity': 1.0, 'line-color': '#232323'}
        }
,
        {
            "id": "lyr_EPCI_5_2",
            "type": "symbol",
            "source": "EPCI_5",
            "layout": {'text-offset': [0.0, 0.0], 'text-field': '', 'text-size': '17.857142857142854', 'text-font': ['Open Sans Regular']},
            "paint": {'text-halo-width': '3.571428571428571', 'text-halo-color': '#ffffff', 'text-color': '#000000'}
        }
],
}