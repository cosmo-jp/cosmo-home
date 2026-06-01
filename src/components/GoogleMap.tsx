import { useEffect, useRef, useState } from 'react'

type LatLngLiteral = {
  lat: number
  lng: number
}

type MapOptions = {
  center: LatLngLiteral
  zoom: number
  mapTypeControl?: boolean
  fullscreenControl?: boolean
  streetViewControl?: boolean
}

type DirectionsRequest = {
  origin: string
  destination: LatLngLiteral
  travelMode: string
}

type DirectionsRendererOptions = {
  map: unknown
  suppressMarkers?: boolean
  preserveViewport?: boolean
  polylineOptions?: {
    strokeColor: string
    strokeOpacity: number
    strokeWeight: number
  }
}

type GoogleMapsApi = {
  maps: {
    Map: new (element: HTMLElement, options: MapOptions) => unknown
    Marker: new (options: {
      position: LatLngLiteral
      map: unknown
      title?: string
    }) => {
      addListener: (eventName: string, handler: () => void) => void
    }
    InfoWindow: new (options: { content: string }) => {
      open: (options: { anchor: unknown; map: unknown }) => void
    }
    DirectionsService: new () => {
      route: (
        request: DirectionsRequest,
        callback: (result: unknown, status: string) => void,
      ) => void
    }
    DirectionsRenderer: new (options: DirectionsRendererOptions) => {
      setDirections: (result: unknown) => void
    }
    TravelMode: {
      WALKING: string
    }
    DirectionsStatus: {
      OK: string
    }
  }
}

declare global {
  interface Window {
    google?: GoogleMapsApi
  }
}

const COMPANY_POSITION: LatLngLiteral = {
  lat: 35.6666403,
  lng: 139.7780309,
}

const ROUTE_ORIGINS = [
  { name: '築地駅', origin: '築地駅, 東京都中央区', color: '#2563eb' },
  { name: '新富町駅', origin: '新富町駅, 東京都中央区', color: '#d71920' },
  { name: '月島駅', origin: '月島駅, 東京都中央区', color: '#059669' },
]

const GOOGLE_MAP_SCRIPT_ID = 'google-maps-js-api'

let googleMapsPromise: Promise<GoogleMapsApi> | null = null

function loadGoogleMaps(apiKey: string) {
  if (window.google?.maps) {
    return Promise.resolve(window.google)
  }

  if (googleMapsPromise) {
    return googleMapsPromise
  }

  googleMapsPromise = new Promise((resolve, reject) => {
    const existingScript = document.getElementById(GOOGLE_MAP_SCRIPT_ID)

    if (existingScript) {
      existingScript.addEventListener('load', () => {
        if (window.google?.maps) {
          resolve(window.google)
        }
      })
      existingScript.addEventListener('error', reject)
      return
    }

    const script = document.createElement('script')
    script.id = GOOGLE_MAP_SCRIPT_ID
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=weekly`
    script.async = true
    script.defer = true
    script.addEventListener('load', () => {
      if (window.google?.maps) {
        resolve(window.google)
      } else {
        reject(new Error('Google Maps API is not available.'))
      }
    })
    script.addEventListener('error', reject)
    document.head.appendChild(script)
  })

  return googleMapsPromise
}

function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const apiKey = 'AIzaSyBNGtjlUyCIaygGXfwtDH3xsoUjLHYOL-s';
    //import.meta.env.VITE_GOOGLE_MAPS_API_KEY

    if (!apiKey) {
      setMessage('Google Maps API key is required.')
      return
    }

    let isMounted = true

    loadGoogleMaps(apiKey)
      .then((google) => {
        if (!isMounted || !mapRef.current) {
          return
        }

        const map = new google.maps.Map(mapRef.current, {
          center: COMPANY_POSITION,
          zoom: 16,
          mapTypeControl: false,
          fullscreenControl: true,
          streetViewControl: false,
        })

        const marker = new google.maps.Marker({
          position: COMPANY_POSITION,
          map,
          title: 'コスモコンサルティング株式会社',
        })

        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div class="map-info-window">
              <strong>コスモコンサルティング株式会社</strong>
              <p>東京都中央区明石町8-1　聖路加タワー34F</p>
            </div>
          `,
        })

        marker.addListener('click', () => {
          infoWindow.open({
            anchor: marker,
            map,
          })
        })

        const directionsService = new google.maps.DirectionsService()

        ROUTE_ORIGINS.forEach((route) => {
          const directionsRenderer = new google.maps.DirectionsRenderer({
            map,
            suppressMarkers: false,
            preserveViewport: true,
            polylineOptions: {
              strokeColor: route.color,
              strokeOpacity: 0.85,
              strokeWeight: 5,
            },
          })

          directionsService.route(
            {
              origin: route.origin,
              destination: COMPANY_POSITION,
              travelMode: google.maps.TravelMode.WALKING,
            },
            (result, status) => {
              if (status === google.maps.DirectionsStatus.OK) {
                directionsRenderer.setDirections(result)
              }
            },
          )
        })
      })
      .catch(() => {
        if (isMounted) {
          setMessage('Google Map could not be loaded.')
        }
      })

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="google-map" ref={mapRef}>
      {message && <p className="google-map-empty">{message}</p>}
    </div>
  )
}

export default GoogleMap
