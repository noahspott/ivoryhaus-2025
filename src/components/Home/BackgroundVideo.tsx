import clsx from "clsx";

export default function BackgroundVideo({ className }: { className?: string }) {
  return (
    <video
      className={clsx(
        `absolute inset-0 w-full h-full object-cover dark:opacity-5 opacity-15`,
        className
      )}
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
