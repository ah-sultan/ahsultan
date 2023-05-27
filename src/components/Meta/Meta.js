import Head from "next/head"

function Meta(props) {

    const description = `As a front-end developer, I'm passionate about creating beautiful, functional, and user-friendly web applications. With skills in HTML, CSS, JavaScript, Tailwind, Bootstrap, Jquery, React.js, and Next.js, I have a solid foundation in the latest web development technologies.  In addition to my technical skills, I also have experience with design tools like Figma and Photoshop, which helps me to bring my designs to life with pixel-perfect precision. I'm always interested to learn new skills and try to stay up-to-date with emerging technologies, and I consider research and development to be one of my favorite hobbies.  When it comes to my work, I'm a hard worker who never gives up until a problem is solved. I'm able to work well in a team, communicate effectively, and take feedback constructively. If you're looking for a dedicated and skilled front-end developer who is committed to delivering high-quality results, I'd love to hear from you.`
    const keyword = ''

  return (
    <>
    <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="descripton" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content="Front End developer | Ah Sultan">
        <meta property="og:image" content="https://ahsultan.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fah-sultan-ahmed.13e5627c.jpg&w=750&q=75">
        <meta property="og:url" content="https://ahsultan.vercel.app/">
        <title>Ah Sultan a front end developer</title>
    </Head>
    </>
  )
}

export default Meta

