export function VideoBox({url}) {
  return (
    <div className="video-container">
      <video
        src={url}
        controls
        autoPlay
        muted
        className="video-box"
      />
    </div>
  );
}