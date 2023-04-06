import Image from "next/image";

export default function Login() {
  return (
    <>
      <div className="bg-neutral-200">
        <div className="center">
          <div className="text-lg">
            Sign in
          </div>
        </div>
      </div>
      <Image
        src="/images/Vectors.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </>
  )
}
