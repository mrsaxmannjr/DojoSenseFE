import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{ text }</div>;

export default class Map extends Component {
  static defaultProps = {
    center: { lat: 40.195976, lng: -105.122658 },
    zoom: 11
  }
  render() {
    return (
      <div className='google-map'>
        <GoogleMapReact
        resetBoundsOnResize
          defaultCenter={{ lat: this.props.lat, lng: this.props.long }}
          defaultZoom={ this.props.zoom }>
          <AnyReactComponent
            lat={ this.props.lat }
            lng={ this.props.long }
            text={ this.props.dojo }
          />
        </GoogleMapReact>
      </div>
    )
  }
}