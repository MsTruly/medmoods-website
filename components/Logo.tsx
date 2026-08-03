export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#2D7A77" />
      <path d="M24 12c-6 4-10 9-10 15a10 10 0 0020 0c0-6-4-11-10-15z" fill="#EAF4F2" />
      <circle cx="24" cy="27" r="4" fill="#2D7A77" />
    </svg>
  );
}
