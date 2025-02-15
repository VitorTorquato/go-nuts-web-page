import { IoLogoWhatsapp } from "react-icons/io";
import { FaCalendar} from "react-icons/fa";
import { FaPeopleGroup,FaPencil,FaCakeCandles } from "react-icons/fa6";
import { Footer } from "@/app/_components/Footer";
import Image from "next/image";
import { Form } from "@/components/form";


export default function Order(){

    return(
        <>
        <section className="container mx-auto">
            <main className="w-full mb-8">
                <div className="w-full max-w-3xl mx-auto flex flex-col items-center gap-9 justify-between mt-9 mb-28">
                    <section className="w-full max-w-6xl flex flex-col gap-3 space-y-6">
                        <h1 className="text-4xl md:text-5xl text-center">GO NUTS CUSTOM AND CREATIVE CAKES</h1>

                        <p className="text-2xl text-center text-slate-400 italic">Celebrate life's sweetest moments with our handcrafted, personalized buttercream cakes—where creativity meets flavor! Your vision, our masterpiece. Order now and make every occasion unforgettable!</p>

                        <h2 className="text-center font-bold text-2xl">How to order your perfect cake:</h2>

                        <div className="flex flex-col gap-3">
                            <section className="flex flex-col items-center gap-3">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-2xl"><strong>Step 1:</strong> Gather the Essentials</h3>
                                    <FaCalendar size={16}/>
                                    <FaPeopleGroup size={20} />

                                </div>
                                <p className="text-lg">Before starting your order, think about the key details:</p>
                                
                                <p className="text-center text-lg">Think about the number of guests, the date, the type of event, and your cake theme!</p>
                               

                                <p className="text-lg">With these in mind, you’re ready to fill out our order form!</p>

                            </section>

                            <section className="flex flex-col items-center gap-3">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-2xl"><strong>Step 2:</strong> Share Your Cake Vision</h3>
                                    <FaPencil size={16}/>
                                </div>

                                <p className="text-center text-lg">In the form, describe your theme in detail. Whether it’s superheroes, fairytales, or anything unique, let us know! Add any extra details or special requests to make your cake truly one of a kind.</p>

                            </section>

                            <section className="flex flex-col items-center gap-3">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-2xl"><strong>Step 3:</strong> Submit and Connect</h3>
                                    <IoLogoWhatsapp size={16}/>
                                </div>

                                <p className="text-center text-lg">Once you’ve filled out all the information, submit the form. You’ll then be directed to WhatsApp to finalize your order. We’ll review availability and get back to you ASAP. If needed, we might request a reference photo to ensure your cake is exactly what you envision.</p>

                            </section>

                            <section className="flex flex-col items-center gap-3">

                                 <div className="flex items-center gap-3">
                                    <h3 className="text-2xl"><strong>Step 4:</strong> Sit Back and Get Ready to Celebrate!</h3>
                                    <FaCakeCandles size={16}/>
                                </div>   

                                <p className="text-center text-lg">Once we confirm your order, we’ll pour our hearts into creating the most beautiful and delicious cake for your special moment. Now all you need to do is wait for your event and Go Nuts over the flavor!</p>

                            </section>

                        </div>

                    </section>

                  <Form/>

                </div>
            </main>
        </section>
            <Footer/>
      </>       
    )
}