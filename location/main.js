let divout = null;
let mapa = null;

const LATITUD_MADRID = 40.4167;
const LONGITUD_MADRID = 3.70325;

function dibujarUbicacion (latitud, longitud) {
    let posActual = {
        lat: latitud,
        lng: longitud
    };
    let marcador = new google.maps.Marker(
        {
            position: posActual,
            title: "Estás aquí"
        }
    );


    marcador.setMap (mapa);

}

function initMap() {
    mapa = new google.maps.Map(
        document.getElementById('map'),
        {
            center: {lat: LATITUD_MADRID, lng: LONGITUD_MADRID},
            zoom: 8
        }
    )
}

function encuentrame() {
    divout = document.getElementById('out');
    if(!navigator.geolocation) {
        fallo();
    } else {
       
        navigator.geolocation.getCurrentPosition (exito, fallo);
        divout.innerHTML = "Buscando ...";
    }
};

function exito(posicion) {
    let latitud = posicion.coords.latitude;
    let longitud = posicion.coords.longitude;
    divout.innerHTML = "Latitud = " + latitud + "Longitud = " + longitud;
    dibujarUbicacion (latitud, longitud);

};

function fallo() {
    console.log('no esta disponible la ubicacion');
    divout.innerHTML = 'no esta disponible la ubicacion';
}