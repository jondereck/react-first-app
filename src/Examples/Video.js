import ReactPlayer from 'react-player';

function Video() {
  const vidUrl = "https://www.youtube.com/watch?v=ysz5S6PUM-U";

  return (
    <div>
      <div className='col'>
        <h1>Example Video</h1>
        <div>
          <ReactPlayer
            url={vidUrl}
            playing={false}
            volume={0.5}
            width="100%"
            height="auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Video;
