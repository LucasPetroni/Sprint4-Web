import Image from "next/image";
import Link from "next/link";

export default function Camisa() {
  return (
    <div>
        <h1>CAMISA</h1>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis deleniti suscipit laudantium perspiciatis, minus provident, laboriosam eius repudiandae incidunt itaque eum temporibus, illum tempore reprehenderit voluptate voluptates quas. Architecto, ea.</p>
            <p> <Link href="/">Voltar...</Link> </p>
            <figure>
              <Image src="/img/t-shirt-580×640.png" alt="Camisa" width={290} height={320}/>
            </figure>
        </div>
    </div>
  )
}
