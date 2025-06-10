// components/BackgroundVideo.tsx
export default function BackgroundVideo() {
  return (
    <video
      className="absolute inset-0 w-full h-full object-cover dark:opacity-5 opacity-15"
      autoPlay
      muted
      loop
      playsInline
      aria-hidden="true"
    >
      <source src="./videos/ivoryhaus-video-bg.mp4" type="video/mp4" />
    </video>
  );
}
