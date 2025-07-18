import {navLinks} from "../../constants/index.js";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';

export const Navbar = () => {
    useGSAP(()=>{
        const navTween = gsap.timeline({
            scrollTrigger:{
                trigger:'nav',
                start:'bottom top'
            }
        });

        navTween.fromto('nav',{backgroundColor:'transparent'},{
            backgroundColor:'#00000050'
        });
    })
    return (
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="logo"/>
                    <p>Velvet Pour</p>
                </a>
                <ul>
                    {navLinks.map((link)=>(
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            Nava
        </nav>
    )
}
