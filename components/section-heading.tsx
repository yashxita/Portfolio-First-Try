import React from 'react'

type SectionHeadingProps ={
    children: React.ReactNode;
};

export default function SectionHeading({children}:SectionHeadingProps) {
  return (
    <section className='bg-gray-100 px-7 py-3 mx-auto flex w-fit gap-2 rounded-full outline-none mb-8 shadow-xl'>
    <h2 className='text-2xl capitalize font-bold font-gouri'>{children}</h2>
    </section>
    )
}
