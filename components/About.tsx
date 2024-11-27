import React from 'react';
import '@/public/styles/globals.css';

const About = () => {
    const aboutText = `Tinnitus is the perception of noise or ringing in the ears.
    It is a common problem, affecting about 15 to 20 percent of people.
    Tinnitus isn't a condition itself — it's a symptom of an underlying condition, such as age-related hearing loss, ear injury, or a circulatory system disorder.
    Tinnitus can be perceived in one or both ears or in the head.`;

    const formattedText = aboutText.split('. ').map((sentence, index) => (
        <div key={index} className="my-2">
            {sentence.trim()}{index < aboutText.split('. ').length - 1 && '.'}
        </div>
    ));

    return (
        <div className="mainbodyy bg-[rgb(22,52,79)] p-8 lg:overflow-x-hidden">
            <h1 className="text-4xl mb-4 text-white text-italic">About Tinnitus</h1>
            <div className="about h-auto mb-8 flex flex-col md:flex-wrap">
                <div className="text-lg leading-relaxed flex-basis-full lg:flex-basis-70 lg:max-w-70">
                    {formattedText}
                </div>
                <div className="photo-and-reference lg:ml-auto  hidden md:block">
                    <img src="/images/tin.jpg" alt="Tinnitus" className="tinnitus-image mb-2" />
                    <p className="reference text-sm">
                        Source: <a href="https://www.ncoa.org/adviser/hearing-aids/tinnitus-hearing-aids/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Sound Therapy</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
