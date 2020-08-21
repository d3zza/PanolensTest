import * as Panolens from 'panolens';

import img from './Triton_interior.jpg';

const panoramaSection = document.querySelector('#app');

function init(img) {
  const panorama = new Panolens.ImagePanorama(img);

  const viewer = new Panolens.Viewer({
    autoHideControlBar: false, // Auto hide control bar
    autoHideInfospot: false, // Auto hide infospots
    autoReticleSelect: false, // Auto select a clickable target after dwellTime
    cameraFov: 60, // Camera field of view in degree
    container: panoramaSection, // Container of panorama image
    controlBar: false, // Vsibility of bottom control bar
    controlButtons: [], // Buttons array in the control bar. Default to ['fullscreen', 'setting', 'video']
    dwellTime: 1500, // Dwell time for reticle selection in millisecond
    enableReticle: false, // Enable reticle for mouseless interaction
    horizontalView: false, // Allow only horizontal camera control
    reverseDragging: false, // Reverse orbit control direction,
  });

  viewer.add(panorama);
}

init(img);
