import { PHONE_NUMBER } from '@/const/links'
import ContactForm from '../ui/contact-form'
import { Tagline } from '../ui/tag-line'

export default function Contact() {
  return (
    <section id="contact" className="section-padding-y border-b">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <Tagline>Contact Us</Tagline>
          <h2 className="heading-lg text-foreground">Get in touch for a personalized quote</h2>
          <p className="text-muted-foreground text-base">
            Reach out to us via phone <strong className="text-primary">{PHONE_NUMBER}</strong> or email to discuss your
            cleaning needs and receive a customized quote.
          </p>
        </div>

        <div className="flex items-center justify-center w-full max-w-[500px] mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
