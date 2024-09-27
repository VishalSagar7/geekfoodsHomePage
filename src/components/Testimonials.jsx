import React from 'react';

const testimonials = [
    {
        id: 1,
        name: 'Gladis Lennon',
        position: 'Head of SEO',
        quote:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.',
    },
    {
        id: 2,
        name: 'Gladis Lennon',
        position: 'Head of SEO',
        quote:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores.',
    },
    {
        id: 3,
        name: 'Gladis Lennon',
        position: 'Head of SEO',
        quote:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt.',
    },
    {
        id: 4,
        name: 'Gladis Lennon',
        position: 'Head of SEO',
        quote:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum.',
    },
    {
        id: 5,
        name: 'Gladis Lennon',
        position: 'Head of SEO',
        quote:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!',
    },
    {
        id: 6,
        name: 'Gladis Lennon',
        position: 'Head of SEO',
        quote:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima.',
    },
];

const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white rounded-lg shadow-md p-6  h-auto">
        <p className="text-gray-600 text-lg font-light mb-4 italic">
            "{testimonial.quote}"
        </p>
        <div className="flex items-center">
            <div><img className='h-[50px] w-[50px] rounded-full object-cover' src='https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg'/></div>
            <div className="ml-4">
                <h3 className="text-gray-900 font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600 text-sm">{testimonial.position}</p>
            </div>
        </div>
    </div>
);

const Testimonials = () => (
    <section className="py-12 px-[100px] bg-gray-100">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                What People Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
            </div>
        </div>
    </section>
);

export default Testimonials;