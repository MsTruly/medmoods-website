export default function Logo({ size = 32 }: { size?: number }) {
    return (
          // eslint-disable-next-line @next/next/no-img-element
          <img
                  src="/logo.png"
                  alt="MedMoods"
                  width={size}
                  height={size}
                  style={{ width: size, height: size, borderRadius: "9999px" }}
                />
        );
}
