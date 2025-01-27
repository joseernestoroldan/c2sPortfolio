import { client } from "@/client";
import Container from "@/components/container/Container";
import ContactButton from "./ContactButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "About Jose Ernesto Roldan, About c2s",
};

const ContactPage = () => {
  async function addContact(formData: any) {
    "use server";
    const { name, email, number, message } = Object.fromEntries(formData);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      number: number,
      message: message,
    };
    try {
      await client.create(contact);
    } catch (error) {
      console.log(error);
      throw new Error("Failed to create user");
    }
    // redirect("/contactsent")
  }
  return (
    <div className="w-full h-auto pt-24 pb-24 px-4">
      <Container>
        <div className="w-full max-w-4xl mx-auto bg-transparent flex flex-col justify-start items-center mt-12">
          <h3 className="text-2xl font-bold text-gray-600 dark:text-white mb-12">
            Take A Coffee With Me
          </h3>

          <form
            action={addContact}
            className="w-full flex flex-col justify-start items-center space-y-4"
          >
            <div className="w-full max-w-xl inset-4 bg-white dark:bg-gray-600 rounded-[5px] overflow-hidden">
              <input
                className="w-full p-4 text-gray-200 bg-transparent "
                name="name"
                type="text"
                placeholder="Full Name"
              />
            </div>

            <div className="w-full max-w-xl inset-4 bg-white dark:bg-gray-600 rounded-[5px] overflow-hidden">
              <input
                className="w-full p-4 text-gray-200 bg-transparent "
                name="email"
                type="email"
                placeholder="Email Address"
              />
            </div>

            <div className="w-full max-w-xl inset-4 bg-white dark:bg-gray-600 rounded-[5px] overflow-hidden">
              <input
                className="w-full p-4 text-gray-200 bg-transparent "
                name="number"
                type="tel"
                placeholder="Telephone Number"
              />
            </div>

            <div className="w-full max-w-xl inset-4 bg-white dark:bg-gray-600 rounded-[5px] overflow-hidden">
              <textarea
                className="w-full p-4 text-gray-200 border-0 active:border-0 bg-transparent"
                name="message"
                placeholder="Leave Your Message"
                id=""
                cols={20}
                rows={10}
              ></textarea>
            </div>
            <ContactButton />
          </form>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
