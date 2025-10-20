
import React from "react";
import Hero from '@/components/contact/Hero';
import Form from '@/components/contact/ContactForm';
export const metadata = {
    title: "Contact Us",
    description:
        "Ready to explore transformative IT solutions with Achintya? Got questions or looking for seamless collaboration? Contact us today! Our dedicated team is here to assist you on your journey toward innovative and tailored technology solutions. Let's connect and grow together.",
    metadataBase: new URL("https://achintyasolutions.com"),
    openGraph: {
        title: "Contact Us",
        description:
            "Ready to explore transformative IT solutions with Achintya? Got questions or looking for seamless collaboration? Contact us today! Our dedicated team is here to assist you on your journey toward innovative and tailored technology solutions. Let's connect and grow together.",
    },
};

const Contacts = () => {
    return (
        <>
            <main>
                <Hero />
                <Form />
            </main>
            
        </>
    );
};

export default Contacts;