import * as React from 'react';
let Gallery = require('react-photo-gallery');
let Lightbox = require('react-images');

import './App.css';

interface OwnState {
  lightboxIsOpen: boolean;
  currentImage: number;
}

class App extends React.Component<{}, OwnState> {
  state = {
    lightboxIsOpen: false,
    currentImage: 0,
  }

  openLightbox = () => this.setState({lightboxIsOpen: true});
  closeLightbox = () => this.setState({lightboxIsOpen: false});
  gotoPrevious = () => this.setState({currentImage: this.state.currentImage-1})
  gotoNext = () => this.setState({currentImage: this.state.currentImage+1})

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Shanthi & Siddharth Wedding</h2>
        </div>
        <Gallery
          photos={PHOTO_SET}
          onClickPhoto={this.openLightbox}
          cols={3}/>
        <Lightbox
          images={PHOTO_SET}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          onClose={this.closeLightbox}
          showThumbnails={true}
          />
      </div>
    );
  }
}

const PHOTO_SET = [
  {src: require('./photos/12361005_10208257149095470_2114797895_n.jpg'), width: 800, height: 600},
  {src: require('./photos/IMG_0025.JPG'), width: 800, height: 600},
  {src: require('./photos/IMG_0257.jpg'), width: 800, height: 600},
  {src: require('./photos/IMG_0722.jpg'), width: 800, height: 600},
  {src: require('./photos/IMG_0752.JPG'), width: 800, height: 600},
  {src: require('./photos/IMG_0909.JPG'), width: 800, height: 600},
  {src: require('./photos/IMG_1036.jpg'), width: 800, height: 600},
  {src: require('./photos/IMG_1051.jpg'), width: 800, height: 600},
  {src: require('./photos/IMG_1084.jpg'), width: 800, height: 600},
  {src: require('./photos/IMG_1108.jpg'), width: 800, height: 600},
  {src: require('./photos/IMG_1152.jpg'), width: 800, height: 600},
  {src: require('./photos/IMG_1155.jpg'), width: 800, height: 600},
  {src: require('./photos/IMG_1170.jpg'), width: 800, height: 600},
  {src: require('./photos/IMG_1176.jpg'), width: 800, height: 600},
  {src: require('./photos/IMG_1848.jpg'), width: 800, height: 600},
  {src: require('./photos/IMG_1910.jpg'), width: 800, height: 600},
  {src: require('./photos/IMG_2181.jpg'), width: 800, height: 600},
  {src: require('./photos/IMG_2272.jpg'), width: 800, height: 600},
  {src: require('./photos/IMG_2339.jpg'), width: 800, height: 600},
  {src: require('./photos/IMG_2384.jpg'), width: 800, height: 600},
  {src: require('./photos/IMG_2546.jpg'), width: 800, height: 600},
]

export default App;
