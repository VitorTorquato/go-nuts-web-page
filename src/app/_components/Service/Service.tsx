import { Card } from "@/components/card/Card";

export function Service() {
    return (
        <div id="services" className="bg-[#b1c7fb83] pt-9 pb-12 mt-9">
            <section className="container mx-auto px-2">
                <h1 className="text-center text-6xl text-slate-800">Services</h1>
                <div className="max-w-6xl mx-auto flex flex-col items-center justify-between md:flex-row gap-9 md:gap-8 mt-11">
                    <article>
                        <div className="max-w-xl text-base flex flex-col text-justify space-y-4 md:text-xl">
                        
                            <p>At Go Nuts BR, every cake is crafted with love and creativity, making each one a unique masterpiece. Whether you're celebrating a birthday, anniversary, or any special moment, our custom-made butter cakes are designed just for you!</p>

                            <p><strong>Endless Customization</strong> – Choose your favorite flavors, colors, and decorations to match your style and occasion.</p>

                            <p><strong>Premium Ingredients</strong> – We use only the finest, high-quality ingredients to ensure every bite is as delicious as it is beautiful.</p>

                            <p><strong>Made for Every Occasion</strong> – From elegant and classic to fun and quirky, we’ll design a cake that perfectly fits your celebration.</p>

                            <p>Let us bring your cake vision to life! Contact us today to order your personalized butter cake.</p>
                        </div>
                    </article>
                    <Card />
                </div>
            </section>
        </div>
    )
}