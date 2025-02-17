import { Card } from "@/components/card/Card";

export function Service(){
    return(
        <div id="services" className="bg-[#b1c7fb83] pt-9 pb-12 mt-9">
            <section className="container mx-auto px-2">
                    <h1 className="text-center text-6xl text-slate-800">Services</h1>
                    <div className="max-w-6xl mx-auto flex flex-col items-center justify-between md:flex-row gap-9 md:gap-8 mt-11">
                        <article>
                            <p className="max-w-xl">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio numquam dolore dolorem aliquid esse atque assumenda quis nesciunt, ea mollitia adipisci reprehenderit. Blanditiis vero illo quisquam dignissimos id tempore reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eius sapiente commodi mollitia minima atque, ratione molestiae aut facilis in eum sequi aliquam exercitationem debitis temporibus explicabo rerum autem quam!
                            </p>
                        </article>
                        <Card/>
                    </div>
            </section>
        </div>
    )
}