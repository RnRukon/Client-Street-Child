import React from 'react'


function GoogleMaps({ location }) {

    return (
        <iframe className=' w-full h-full'
            title='map'
            id="gmap_canvas"
            src={`https://maps.google.com/maps?q=${location}&t=&z=10&ie=UTF8&iwloc=&output=embed`}
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0">
        </iframe>
    )
}

export default GoogleMaps;