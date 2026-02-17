import React, { useState } from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Tags from '../shop/Tags';
import PopularPost from '../shop/PopularPost';

const SingleBlog = () => {
    const socialList = [
{
link: "#",
iconName: "icofont-facebook",
className: "facebook",
},
{
link: "#",
iconName: "icofont-twitter",
className: "twitter",
},
{
link: "#",
iconName: "icofont-linkedin",
className: "linkedin",
},
{
link: "#",
iconName: "icofont-instagram",
className: "instagram",
},
{
link: "#",
iconName: "icofont-pinterest",
className: "pinterest",
},
];

    const [blog, setBlog] = useState(blogList);
    const { id } = useParams();
    //console.log(id)
    const result = blog.filter((b) => b.id === Number(id))
    console.log(result)
    return (
        <div>
            <PageHeader title={"Single Blog Page"} curPage={"Blog / Blog Details"} />
            <div className='blog-section blog-single padding-tb section-bg'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className='col-lg-8 col-12'>
                            <article>
                                <div className='section-wrapper'>
                                    <div className="row row-cols-1 justify-content-center g-4">
                                        <div className='col'>
                                            <div className="post-item style-2">
                                                <div className="post-inner">
                                                    {
                                                        result.map((item) => (
                                                            <div key={item.di} >
                                                                <div className='post-thumb'>
                                                                    <img src={item.imgUrl} alt={item.imgAlt} className='w-100' />
                                                                </div>
                                                                <div className="post-content">
                                                                    <h2>{item.title}</h2>
                                                                    <div className="meta-post">
                                                                        <ul className='lab-ul'>
                                                                            
                                                                                {
                                                                                    item.metaList.map((val, i) => (
                                                                                        <li key={i}>
                                                                                            <i className={val.iconName}></i>{val.text}
                                                                                        </li>
                                                                                    ))
                                                                                }
                                                                        </ul>
                                                                    </div>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, odio? Praesentium, hic atque? Quasi maiores accusamus optio qui ad earum dolor, id nam placeat modi eum. Maxime quis, deleniti consequatur delectus explicabo rerum dolor est. Maxime aut ea necessitatibus corporis iste eveniet iure ad vitae culpa, iusto laborum deserunt suscipit non officiis at quibusdam cumque 
                                                                        minima autem ab animi placeat! Nisi quia blanditiis dignissimos possimus? Aut, ipsum. Error, magni aut!
                                                                    </p>
                                                                    <blockquote>
                                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, et?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, doloremque. Voluptates ex repellat eum laborum cum sapiente similique facilis consectetur.</p>
                                                                        <cite>
                                                                            <a href="#">...MELISA HUNTER</a>
                                                                        </cite>
                                                                    </blockquote>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium reprehenderit non explicabo odio voluptates molestias, a accusamus sit vel, necessitatibus minima, atque voluptas vitae iure sequi amet dolorum! Vero nemo iste quae necessitatibus quibusdam. Quam libero hic
                                                                         nulla sit. Suscipit dolor inventore eum voluptatem quae provident quod blanditiis harum nisi!
                                                                    </p>
                                                                    <img src="/src/assets/images/blog/single/01.jpg" alt="" />
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quas, molestiae dignissimos ad explicabo quos nihil tempora nam consequuntur, sapiente ex eius quisquam illo eaque vitae mollitia inventore impedit corporis.
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, adipisci impedit! Modi, magnam aliquam ut dicta fuga expedita mollitia distinctio! Nesciunt aliquam architecto rem quibusdam ea sequi ducimus natus inventore.

                                                                    </p>
                                                                    <div className='video-thumb'>
                                                                        <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                                                        <a href="htpps" className='video-button popup'
                                                                        target='_blank'>
                                                                            <i className='icofont-ui-play'></i>
                                                                        </a>
                                                                    </div>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eum, quae accusamus nulla laudantium sit quas. Quam repudiandae reprehenderit vero? Laboriosam perferendis quidem deserunt odio quis quod earum exercitationem rerum.
                                                                        Repellendus dolores aspernatur, a quod eligendi quam error dicta provident voluptatem fuga placeat amet cum impedit tempore laudantium deserunt nobis molestiae ipsa cupiditate. Magnam dolorem ea officiis! Laudantium, officiis mollitia.
                                                                        Possimus dolores nulla veniam temporibus suscipit ex ullam quidem aperiam iste ut. Odio saepe nam aperiam reprehenderit exercitationem iusto optio consequatur, libero consectetur! Repudiandae rerum quia architecto dicta vitae fuga.

                                                                    </p>
                                                                    <div className='tags-section'>
                                                                        <ul className='tags lab-ul'>
                                                                            <li>
                                                                                <a href="#">Agency</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Business</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Personal</a>
                                                                            </li>
                                                                        </ul>
                                                                        <ul className='lab-ul social-icons'>
                                                                             {
                                                                                socialList.map((val, i) => (
                                                                                    <li key={i}>
                                                                                        <a href="#" className={val.className}>
                                                                                            <i className={val.iconName}></i>
                                                                                        </a>
                                                                                    </li>
                                                                                ))
                                                                            } 
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <div className='navigations-part'>
                                                <div className='left'>
                                                    <a href="#" className='prev'>
                                                        <i className='icofont-double-left'></i> Previous Blog
                                                    </a>
                                                    <a href="#" className='title'>
                                                        Evisculate Parallel Processes Via Technica Sound Models Authourisations
                                                    </a>
                                                </div>
                                                <div className='right'>
                                                    <a href="#" className='next'>
                                                        <i className='icofont-double-right'></i> Previous Blog
                                                    </a>
                                                    <a href="#" className='title'>
                                                        Evisculate Parallel Processes Via Technica Sound Models Authourisations
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className='col-lg-4 col-12'>
                            <article>
                                <Tags/>
                                <PopularPost/>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog