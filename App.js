import React, { Component } from 'react';
import Player from './audioPlayer/Player';
import PDFViewer from './pdfViewer/pdfViewer';

export const TRACKS = [
  {
    title: 'Stressed Out',
    artist: 'Twenty One Pilots',
    albumArtUrl: "https://cdn.pixabay.com/photo/2017/03/02/05/14/bible-2110439_640.jpg",
    audioUrl: "https://worshipdeeper.com/wp-content/uploads/2017/10/Broken-Cup-simple-version-mp3.mp3",
  },
  {
    title: 'Love Yourself',
    artist: 'Justin Bieber',
    albumArtUrl: "https://cdn.pixabay.com/photo/2017/03/02/05/14/bible-2110439_640.jpg",
    audioUrl: 'https://worshipdeeper.com/wp-content/uploads/2017/10/Broken-Cup-simple-version-mp3.mp3',
  },
  {
    title: 'Hotline Bling',
    artist: 'Drake',
    albumArtUrl: 'https://cdn.pixabay.com/photo/2017/03/02/05/14/bible-2110439_640.jpg',
    audioUrl: 'https://worshipdeeper.com/wp-content/uploads/2017/10/Broken-Cup-simple-version-mp3.mp3',
  },
];

export default class App extends Component {
  render() {
    return <Player tracks={TRACKS} />
    // return <PDFViewer />
  }
}