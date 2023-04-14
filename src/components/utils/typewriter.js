import React from "react";
import { Typewriter} from "react-simple-typewriter";

const TypewriterComponent = () => {
  return (
    <Typewriter
      loop
      cursor
      cursorStyle='_'
      typeSpeed={100}
      deleteSpeed={50}
      delaySpeed={1000}
      words={['Software Engineer', 'AI Researcher', 'ML Engineer',
          'Data Scientist', 'Full Stack Developer']}
    />
  );
}

export default TypewriterComponent;