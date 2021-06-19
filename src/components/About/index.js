import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        At my core I am a technologist. Whether it be website development, photography, 
        engineering or rockets; my fondness for all that is technology runs deep. My exploration
        and dive into the world of coding and web development has been exciting, but it's not over yet!
        </p>
        <p>
        Seattle -\ Boise -\ Virginia -\ Tucson
        </p>
      </div>
    </section>
  );
}

export default About;
