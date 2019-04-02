var el = document.querySelector('div.pinch-zoom');
new PinchZoom.default(el, {
  lockDragAxis: false,
  draggableUnzoomed: true,
  setOffsetsOnce: false,
  verticalPadding: 0.5,
  horizontalPadding: 0.5,
  tapZoomFactor: 4,
});
