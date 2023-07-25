import Link from "next/link";

import { Container } from "../(components)/Container";
import { Header } from "../(components)/(page-components)/Header";

const faqs = [
  [
    {
      question: "How does Gourier work for travelers?",
      answer: `Gourier allows travelers to earn money by carrying packages for shoppers who need
        their purchases delivered to the travelers' destinations. Travelers can browse 
        shipping requests, find packages that match their travel plans, and confirm the 
        delivery to earn rewards`,
    },
    {
      question: "How do I sign up as a traveler on Gourier?",
      answer:
        "To sign up as a traveler on Gourier, visit our website and create an account. Fill in your details and preferences, and you'll be ready to start your journey.",
    },
    {
      question: "What types of packages can I carry as a traveler?",
      answer:
        "As a traveler, you can carry a wide range of packages, from small items to larger ones, as long as they comply with local and international regulations. Check the …. to see the categories of packages and limitations.",
    },
    {
      question:
        "What if my travel plans change after confirming a shipping request?",
      answer:
        "If your travel plans change, promptly inform Gourier's customer support team, and they will work with you to find a suitable solution.",
    },
  ],
  [
    {
      question:
        "Is there a limit to the number or size of packages I can carry?",
      answer:
        "There is no set limit on the number of packages you can carry, but it's essential to ensure that you have enough space and weight capacity in your baggage.",
    },
    {
      question: "How do I find shipping requests that match my travel plans?",
      answer:
        "You can find shipping requests that match your travel plans by browsing the available requests on the Gourier platform. Our smart algorithms will help you find suitable matches.",
    },
    {
      question: "How do I get paid for delivering packages as a traveler?",
      answer:
        "After successfully delivering the package, you will receive your payment through the payment method you have set up in your Gourier account. ",
    },
    {
      question:
        "Are there any restrictions on the items I can carry as a traveler?",
      answer:
        "Yes, there are restrictions on certain items based on local and international regulations. You should always comply with these guidelines and ensure the items you carry are legal and safe. However, don’t worry. We are working hard to filter that type of items.",
    },
  ],
  [
    {
      question: "Is it safe to travel with packages from Gourier?",
      answer:
        "Gourier prioritizes safety and reliability. We implement a robust tracking system to ensure that packages are secure and can be monitored in real-time. You can see up-to-date images of your product on our application.",
    },
    {
      question: "What happens if a package gets lost or damaged during travel?",
      answer:
        "In the unlikely event of a package getting lost or damaged, Gourier's customer support team will work with both the traveler and the shopper to resolve the issue.",
    },
    {
      question: "How does Gourier ensure eco-friendly shipping?",
      answer:
        "Gourier is committed to eco-friendly shipping by utilizing existing passenger planes already headed to their destinations, reducing the carbon footprint of shipping packages. While we send packages at traveler’s baggage, there is no need for cargo planes or extra fuel for them.",
    },
  ],
];

export default function Faq() {
  return (
    <>
      <Header></Header>
      <section
        id="faqs"
        aria-labelledby="faqs-title"
        className="border-t border-gray-200 py-6 sm:py-10"
      >
        <Container className="">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2
              id="faqs-title"
              className="text-3xl font-medium tracking-tight text-gray-900"
            >
              Frequently asked questions
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              If you have anything else you want to ask,{" "}
              <Link
                href="mailto:info@example.com"
                className="text-gray-900 underline"
              >
                reach out to us
              </Link>
              .
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
          >
            {faqs.map((column, columnIndex) => (
              <li key={columnIndex}>
                <ul role="list" className="space-y-10">
                  {column.map((faq, faqIndex) => (
                    <li key={faqIndex}>
                      <h3 className="text-lg font-semibold leading-6 text-gray-900">
                        {faq.question}
                      </h3>
                      <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
