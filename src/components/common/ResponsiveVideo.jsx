export default function ResponsiveVideo({ className, fileName }) {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className={className ? className : ""}
    >
      <source
        src={`https://res.cloudinary.com/dakgl7s9n/video/upload/q_auto,w_600/v1719964605/portfolio/${fileName}`}
        type="video/webm"
      />
      Your browser does not support the video tag.
    </video>
  );
}
