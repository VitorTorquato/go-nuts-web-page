import Image from "next/image";
import rafaelImg from '../../../../public/images/rafael.webp';

export function AboutUs() {
    return (
        <section id="aboutus" className="container mx-auto px-3 pb-9">
            <h1 className="text-center text-6xl mt-16 text-slate-800">About us</h1>

            <section className="max-w-6xl mx-auto mt-9 flex flex-col justify-between gap-9 md:flex-row">

                <div className="w-full flex flex-col justify-between items-center md:flex-row mt-9 space-y-6">

                    <div className="w-full max-w-lg h-96">
                        <Image
                            src={rafaelImg}
                            alt="Photo of Rafael baking"
                            width={100}
                            height={100}
                            priority={true}
                            quality={100}
                            sizes='100vw'
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="max-w-xl text-base flex flex-col text-justify space-y-4 md:text-xl">
                        <p>Welcome to Go Nuts BR, where every butter cake tells a story—your story!</p>

                        <p>Founded in Malta in 2021, Go Nuts BR is the passion project of Rafale and Felipe, two cake lovers with a mission: to turn simple moments into unforgettable memories. We specialize in personalized butter cakes, made with love, creativity, and the finest ingredients.</p>

                        <p>What started as a small dream has now become a go-to destination for those looking for a unique and delicious way to celebrate. Whether it’s a birthday, anniversary, or just a sweet craving, our cakes are designed to bring joy—one bite at a time.</p>

                        <p>So go ahead, get creative, and let us make a cake as unique as you!</p>

                        <p>Based in Malta | Baking with Love Since 2021</p>
                    </div>
                </div>

            </section>
        </section>
    )
}