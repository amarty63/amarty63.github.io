
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "FondoccupationsolCLC_0": {
            "type": "geojson",
            "data": json_FondoccupationsolCLC_0
        }
                    ,
        "Surfaceseneau_1": {
            "type": "geojson",
            "data": json_Surfaceseneau_1
        }
                    ,
        "Routesprincipales_2": {
            "type": "geojson",
            "data": json_Routesprincipales_2
        }
                    ,
        "Bti_3": {
            "type": "geojson",
            "data": json_Bti_3
        }
                    ,
        "HaiesIGNBDHaies_4": {
            "type": "geojson",
            "data": json_HaiesIGNBDHaies_4
        }
                    ,
        "AlignementsdarbresPlantezleDcor_5": {
            "type": "geojson",
            "data": json_AlignementsdarbresPlantezleDcor_5
        }
                    ,
        "BosquetsPlantezleDcor_6": {
            "type": "geojson",
            "data": json_BosquetsPlantezleDcor_6
        }
                    ,
        "HaiesPlantezleDcor_7": {
            "type": "geojson",
            "data": json_HaiesPlantezleDcor_7
        }
                    ,
        "VergersPlantezleDcor_8": {
            "type": "geojson",
            "data": json_VergersPlantezleDcor_8
        }
                    ,
        "Communes_9": {
            "type": "geojson",
            "data": json_Communes_9
        }
                    ,
        "EPCI_10": {
            "type": "geojson",
            "data": json_EPCI_10
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
            "id": "lyr_FondoccupationsolCLC_0_0",
            "type": "fill",
            "source": "FondoccupationsolCLC_0",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'code_18'], 111], 0.18, ['==', ['get', 'code_18'], 112], 0.18, ['==', ['get', 'code_18'], 121], 0.18, ['==', ['get', 'code_18'], 122], 0.18, ['==', ['get', 'code_18'], 123], 0.18, ['==', ['get', 'code_18'], 124], 0.18, ['==', ['get', 'code_18'], 131], 0.18, ['==', ['get', 'code_18'], 132], 0.18, ['==', ['get', 'code_18'], 133], 0.18, ['==', ['get', 'code_18'], 141], 0.18, ['==', ['get', 'code_18'], 142], 0.18, ['==', ['get', 'code_18'], 211], 0.18, ['==', ['get', 'code_18'], 212], 0.18, ['==', ['get', 'code_18'], 213], 0.18, ['==', ['get', 'code_18'], 221], 0.18, ['==', ['get', 'code_18'], 222], 0.18, ['==', ['get', 'code_18'], 223], 0.18, ['==', ['get', 'code_18'], 231], 0.18, ['==', ['get', 'code_18'], 241], 0.18, ['==', ['get', 'code_18'], 242], 0.18, ['==', ['get', 'code_18'], 243], 0.18, ['==', ['get', 'code_18'], 244], 0.18, ['==', ['get', 'code_18'], 311], 0.18, ['==', ['get', 'code_18'], 312], 0.18, ['==', ['get', 'code_18'], 313], 0.18, ['==', ['get', 'code_18'], 321], 0.18, ['==', ['get', 'code_18'], 322], 0.18, ['==', ['get', 'code_18'], 323], 0.18, ['==', ['get', 'code_18'], 324], 0.18, ['==', ['get', 'code_18'], 331], 0.18, ['==', ['get', 'code_18'], 332], 0.18, ['==', ['get', 'code_18'], 333], 0.18, ['==', ['get', 'code_18'], 334], 0.18, ['==', ['get', 'code_18'], 335], 0.18, ['==', ['get', 'code_18'], 411], 0.18, ['==', ['get', 'code_18'], 412], 0.18, ['==', ['get', 'code_18'], 421], 0.18, ['==', ['get', 'code_18'], 422], 0.18, ['==', ['get', 'code_18'], 423], 0.18, ['==', ['get', 'code_18'], 511], 0.18, ['==', ['get', 'code_18'], 512], 0.18, ['==', ['get', 'code_18'], 521], 0.18, ['==', ['get', 'code_18'], 522], 0.18, ['==', ['get', 'code_18'], 523], 0.18, ['==', ['get', 'code_18'], 999], 0.18, 0], 'fill-color': ['case', ['==', ['get', 'code_18'], 111], '#e69034', ['==', ['get', 'code_18'], 112], '#e69034', ['==', ['get', 'code_18'], 121], '#e69034', ['==', ['get', 'code_18'], 122], '#e69034', ['==', ['get', 'code_18'], 123], '#e69034', ['==', ['get', 'code_18'], 124], '#e69034', ['==', ['get', 'code_18'], 131], '#e69034', ['==', ['get', 'code_18'], 132], '#e69034', ['==', ['get', 'code_18'], 133], '#e69034', ['==', ['get', 'code_18'], 141], '#e69034', ['==', ['get', 'code_18'], 142], '#e69034', ['==', ['get', 'code_18'], 211], '#ffff89', ['==', ['get', 'code_18'], 212], '#ffff89', ['==', ['get', 'code_18'], 213], '#ffff89', ['==', ['get', 'code_18'], 221], '#ffff89', ['==', ['get', 'code_18'], 222], '#ffff89', ['==', ['get', 'code_18'], 223], '#ffff89', ['==', ['get', 'code_18'], 231], '#ffff89', ['==', ['get', 'code_18'], 241], '#ffff89', ['==', ['get', 'code_18'], 242], '#ffff89', ['==', ['get', 'code_18'], 243], '#ffff89', ['==', ['get', 'code_18'], 244], '#ffff89', ['==', ['get', 'code_18'], 311], '#60ff1c', ['==', ['get', 'code_18'], 312], '#60ff1c', ['==', ['get', 'code_18'], 313], '#60ff1c', ['==', ['get', 'code_18'], 321], '#ccf24d', ['==', ['get', 'code_18'], 322], '#a6ff80', ['==', ['get', 'code_18'], 323], '#a6e64d', ['==', ['get', 'code_18'], 324], '#a6f200', ['==', ['get', 'code_18'], 331], '#e6e6e6', ['==', ['get', 'code_18'], 332], '#cccccc', ['==', ['get', 'code_18'], 333], '#ccffcc', ['==', ['get', 'code_18'], 334], '#000000', ['==', ['get', 'code_18'], 335], '#a6e6cc', ['==', ['get', 'code_18'], 411], '#a6a6ff', ['==', ['get', 'code_18'], 412], '#4d4dff', ['==', ['get', 'code_18'], 421], '#ccccff', ['==', ['get', 'code_18'], 422], '#e6e6ff', ['==', ['get', 'code_18'], 423], '#a6a6e6', ['==', ['get', 'code_18'], 511], '#00ccf2', ['==', ['get', 'code_18'], 512], '#80f2e6', ['==', ['get', 'code_18'], 521], '#00ffa6', ['==', ['get', 'code_18'], 522], '#a6ffe6', ['==', ['get', 'code_18'], 523], '#e6f2ff', ['==', ['get', 'code_18'], 999], '#ffffff', '#ffffff']}
        }
,
        {
            "id": "lyr_Surfaceseneau_1_0",
            "type": "fill",
            "source": "Surfaceseneau_1",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#12c5ed'}
        }
,
        {
            "id": "lyr_Routesprincipales_2_0",
            "type": "line",
            "source": "Routesprincipales_2",
            "layout": {},
            "paint": {'line-width': ['case', ['==', ['get', 'IMPORTANCE'], 1], 3.071428571428571, ['==', ['get', 'IMPORTANCE'], 1], 0.9285714285714285, ['==', ['get', 'IMPORTANCE'], 2], 1.6428571428571428, ['==', ['get', 'IMPORTANCE'], 2], 1.4285714285714286, ['==', ['get', 'IMPORTANCE'], 3], 0.9285714285714285, ['==', ['get', 'IMPORTANCE'], 3], 0.7142857142857143, ['==', ['get', 'IMPORTANCE'], 4], 0.9285714285714285, ['==', ['get', 'IMPORTANCE'], 5], 0.9285714285714285, ['==', ['get', 'IMPORTANCE'], 6], 0.9285714285714285, 0.9285714285714285], 'line-opacity': ['case', ['==', ['get', 'IMPORTANCE'], 1], 0.7, ['==', ['get', 'IMPORTANCE'], 1], 0.7, ['==', ['get', 'IMPORTANCE'], 2], 0.7, ['==', ['get', 'IMPORTANCE'], 2], 0.7, ['==', ['get', 'IMPORTANCE'], 3], 0.7, ['==', ['get', 'IMPORTANCE'], 3], 0.7, ['==', ['get', 'IMPORTANCE'], 4], 0.7, ['==', ['get', 'IMPORTANCE'], 5], 0.7, ['==', ['get', 'IMPORTANCE'], 6], 0.7, 0.7], 'line-color': ['case', ['==', ['get', 'IMPORTANCE'], 1], '#3e8ad8', ['==', ['get', 'IMPORTANCE'], 1], '#f4f4f4', ['==', ['get', 'IMPORTANCE'], 2], '#232323', ['==', ['get', 'IMPORTANCE'], 2], '#ed4f51', ['==', ['get', 'IMPORTANCE'], 3], '#232323', ['==', ['get', 'IMPORTANCE'], 3], '#f6f672', ['==', ['get', 'IMPORTANCE'], 4], '#d8c081', ['==', ['get', 'IMPORTANCE'], 5], '#2c0ed6', ['==', ['get', 'IMPORTANCE'], 6], '#ed3c54', '#d36bd2']}
        }
,
        {
            "id": "lyr_Bti_3_0",
            "type": "fill",
            "source": "Bti_3",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#999899'}
        }
,
        {
            "id": "lyr_HaiesIGNBDHaies_4_0",
            "type": "line",
            "source": "HaiesIGNBDHaies_4",
            "layout": {},
            "paint": {'line-width': 4.5, 'line-opacity': 1.0, 'line-color': '#156406'}
        }
,
        {
            "id": "lyr_AlignementsdarbresPlantezleDcor_5_0",
            "type": "fill",
            "source": "AlignementsdarbresPlantezleDcor_5",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#ffd209'}
        }
,
        {
            "id": "lyr_AlignementsdarbresPlantezleDcor_5_1",
            "type": "line",
            "source": "AlignementsdarbresPlantezleDcor_5",
            "layout": {},
            "paint": {'line-width': 10.085714285714284, 'line-opacity': 1.0, 'line-color': '#ffd209'}
        }
,
        {
            "id": "lyr_BosquetsPlantezleDcor_6_0",
            "type": "fill",
            "source": "BosquetsPlantezleDcor_6",
            "layout": {},
            "paint": {'fill-opacity': 1.0}
        }
,
        {
            "id": "lyr_BosquetsPlantezleDcor_6_1",
            "type": "line",
            "source": "BosquetsPlantezleDcor_6",
            "layout": {},
            "paint": {'line-width': 8.824999999999998, 'line-opacity': 1.0, 'line-color': '#724815'}
        }
,
        {
            "id": "lyr_HaiesPlantezleDcor_7_0",
            "type": "line",
            "source": "HaiesPlantezleDcor_7",
            "layout": {},
            "paint": {'line-width': 5.673214285714285, 'line-opacity': 1.0, 'line-color': '#16bf0d'}
        }
,
        {
            "id": "lyr_VergersPlantezleDcor_8_0",
            "type": "fill",
            "source": "VergersPlantezleDcor_8",
            "layout": {},
            "paint": {'fill-opacity': 1.0}
        }
,
        {
            "id": "lyr_VergersPlantezleDcor_8_1",
            "type": "line",
            "source": "VergersPlantezleDcor_8",
            "layout": {},
            "paint": {'line-width': 10.085714285714284, 'line-opacity': 1.0, 'line-color': '#ff460e'}
        }
,
        {
            "id": "lyr_Communes_9_0",
            "type": "fill",
            "source": "Communes_9",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#e8718d'}
        }
,
        {
            "id": "lyr_Communes_9_1",
            "type": "symbol",
            "source": "Communes_9",
            "layout": {'text-offset': [0.0, 0.0], 'text-field': ['get', 'NOM_COM'], 'text-size': '14.285714285714285', 'text-font': ['Open Sans Regular']},
            "paint": {'text-halo-width': '3.571428571428571', 'text-halo-color': '#ffffff', 'text-color': '#000000'}
        }
,
        {
            "id": "lyr_EPCI_10_0",
            "type": "line",
            "source": "EPCI_10",
            "layout": {},
            "paint": {'line-width': 1.7857142857142856, 'line-opacity': 1.0, 'line-color': '#232323'}
        }
,
        {
            "id": "lyr_EPCI_10_2",
            "type": "symbol",
            "source": "EPCI_10",
            "layout": {'text-offset': [0.0, 0.0], 'text-field': '', 'text-size': '17.857142857142854', 'text-font': ['Open Sans Regular']},
            "paint": {'text-halo-width': '3.571428571428571', 'text-halo-color': '#ffffff', 'text-color': '#000000'}
        }
],
}