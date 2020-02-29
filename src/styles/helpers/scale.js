const scale = (
  availableWidth,
  contentWidth,
  availableHeight,
  contentHeight
) =>
  `scale(${Math.min(
    availableWidth / contentWidth,
    availableHeight / contentHeight
  )})`;

export default scale;
