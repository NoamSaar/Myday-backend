import { HomeAppHeader } from '../cmps/HomeAppHeader'
import creativeDesignImg from '../assets/img/CreativeDesignImg.png'
import SoftwareDevelopmentImg from '../assets/img/SoftwareDevelopmentImg.png'
import MarketingImg from '../assets/img/MarketingImg.png'
import ProjectManagementImg from '../assets/img/ProjectManagementImg.png'
import SalesCRMImg from '../assets/img/SalesCRMImg.png'
import TaskManagementImg from '../assets/img/TaskManagementImg.png'
import HRImg from '../assets/img/HRImg.png'
import OperationsImg from '../assets/img/OperationsImg.png'
import MoreWorkflowsImg from '../assets/img/MoreWorkflowsImg.png'
import HomeAppPreviewImg from '../assets/img/HomeAppPreviewImg.avif'
import HoltCatImg from '../assets/img/HoltCatImg.avif'
import CanvaImg from '../assets/img/CanvaImg.png'
import CocaColaImg from '../assets/img/CocaColaImg.png'
import OxyImg from '../assets/img/OxyImg.png'
import LionsgateImg from '../assets/img/LionsgateImg.png'
import CarrefourImg from '../assets/img/CarrefourImg.png'
import BdImg from '../assets/img/BdImg.png'
import GlossierImg from '../assets/img/GlossierImg.png'
import UniversalImg from '../assets/img/UniversalImg.png'
import FiveStarsImg from '../assets/img/FiveStarsImg.png'
import AwardOneImg from '../assets/img/AwardOneImg.png'
import AwardTwoImg from '../assets/img/AwardTwoImg.png'
import AwardThreeImg from '../assets/img/AwardThreeImg.png'
import SupportImg from '../assets/img/SupportImg.png'
import SupportClockImg from '../assets/img/SupportClockImg.png'
import SupportHeartImg from '../assets/img/SupportHeartImg.png'
import SupportPhoneImg from '../assets/img/SupportPhoneImg.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export function HomePage() {
    const [scrolled, setScrolled] = useState(false)
    const navigate = useNavigate()

    window.onscroll = function handleScroll() {
		const isScrolled = window.scrollY > 0
		setScrolled(isScrolled)
	}

    return (
        <div className="home-page-container main-layout">
            <HomeAppHeader scrolled={scrolled}/>

            <main className="home-page-content main-layout">

                <div className='main-titles-container'>
                    <h1 className='home-main-title'>A platform built for a
                        new way of working</h1>
                    <p>What would you like to manage with funday.com Work OS?</p>
                </div>

                <div className='home-cards-options'>
                    <div className='card'>
                        <img src={creativeDesignImg} alt="" />
                        <span>Creative & design</span>
                    </div>
                    <div className='card'>
                        <img src={SoftwareDevelopmentImg} alt="" />
                        <span>Software development</span>
                    </div>
                    <div className='card'>
                        <img src={MarketingImg} alt="" />
                        <span>Marketing</span>
                    </div>
                    <div className='card'>
                        <img src={ProjectManagementImg} alt="" />
                        <span>Project management</span>
                    </div>
                    <div className='card'>
                        <img src={SalesCRMImg} alt="" />
                        <span>Sales & CRM</span>
                    </div>
                    <div className='card'>
                        <img src={TaskManagementImg} alt="" />
                        <span>Task management</span>
                    </div>
                    <div className='card'>
                        <img src={HRImg} alt="" />
                        <span>HR</span>
                    </div>
                    <div className='card'>
                        <img src={OperationsImg} alt="" />
                        <span>Operations</span>
                    </div>
                    <div className='card'>
                        <img src={MoreWorkflowsImg} alt="" />
                        <span>More workflows</span>
                    </div>
                </div>

                <div className='btn-container'>
                    <button onClick={() => navigate('/board')} className='btn-big-get-started'><span className='get-started-txt'>Get Started</span>
                        <svg className='arrow-icon' width="16" height="12" viewBox="0 0 9 7" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.628.616a.5.5 0 1 0-.64.768L6.203 3.23H.5a.5.5 0 0 0 0 1h5.612L3.988 6a.5.5 0 1 0 .64.769l3.23-2.693a.5.5 0 0 0 0-.768L4.628.616z" fill="#FFFFFF"></path>
                        </svg>
                    </button>
                    <p className='no-credit-card-txt'>No credit card needed<span>✦</span>Unlimited time on Free plan</p>
                </div>

            </main>

            <section className='home-first-img-container full'>
                <img src={HomeAppPreviewImg} alt="" />
            </section>

            <section className='sponsers-section'>
                <h2>Trusted by 180,000+ customers worldwide</h2>
                <div className='sponsers-imgs-container'>
                    <img src={HoltCatImg} alt="" />
                    <img src={CanvaImg} alt="" />
                    <img src={CocaColaImg} alt="" />
                    <img className='oxy-img' src={OxyImg} alt="" />
                    <img src={LionsgateImg} alt="" />
                    <img className='carrefour-img' src={CarrefourImg} alt="" />
                    <img src={BdImg} alt="" />
                    <img src={GlossierImg} alt="" />
                    <img src={UniversalImg} alt="" />
                </div>
            </section>

            <section className='support-section'>
                <img className='support-main-img' src={SupportImg} alt="" />
                <div className='support-left-container'>

                    <h2 className='main-title'>
                        <p>Supporting your growth</p>
                        <p>every step of the way</p>
                    </h2>

                    <div className='main-txt'>
                        <p>Our support superheroes are a click away to help you get the most</p>
                        <p>out of monday.com, so you can focus on working without limits.</p>
                    </div>

                    <div className='icons-container'>
                        <div className='phone-container'>
                            <img src={SupportPhoneImg} alt="" />
                            <div className='phone-txt-container'>
                                <p className='title'>24/7</p>
                                <span>support</span>
                                <span>anytime,</span>
                                <span>anywhere</span>
                            </div>
                        </div>
                        <div className='heart-container'>
                            <img src={SupportHeartImg} alt="" />
                            <div className='heart-txt-container'>
                                <p className='title'>Voted #1</p>
                                <span>Most Loved by</span>
                                <span>customers on</span>
                                <span>G2</span>
                            </div>

                        </div>
                        <div className='clock-container'>
                            <img src={SupportClockImg} alt="" />
                            <div className='clock-txt-container'>
                                <p className='title'>2 hour</p>
                                <span>average</span>
                                <span>response time</span>
                            </div>
                        </div>
                    </div>

                    <div className='section-buttons'>
                        <button className='get-in-touch-btn'><span className='get-started-txt'>Get in touch</span>
                            <svg className='arrow-icon' width="13" height="13" viewBox="0 0 9 7" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.628.616a.5.5 0 1 0-.64.768L6.203 3.23H.5a.5.5 0 0 0 0 1h5.612L3.988 6a.5.5 0 1 0 .64.769l3.23-2.693a.5.5 0 0 0 0-.768L4.628.616z" fill="#FFFFFF"></path>
                            </svg>
                        </button>

                        <span className='visit-text'>Visit our support center <svg className='arrow-icon' width="12" height="12" viewBox="0 0 9 7" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.628.616a.5.5 0 1 0-.64.768L6.203 3.23H.5a.5.5 0 0 0 0 1h5.612L3.988 6a.5.5 0 1 0 .64.769l3.23-2.693a.5.5 0 0 0 0-.768L4.628.616z" fill="#6161ff"></path>
                        </svg></span>
                    </div>

                </div>
            </section>

            <section className='awards-section'>
                <img className='five-stars-img' src={FiveStarsImg} alt="" />
                <h2>An award-winning platform. Loved by customers.</h2>
                <span>Based on 10,000+ customer reviews.</span>
                <div className='awards-cards-container'>
                    <div className='awards-card'>
                        <img src={AwardOneImg} alt="" />
                        <h3>Voted best feature set, relationship and value</h3>
                        <p>“This is the best no-code platform I've ever seen.”</p>
                    </div>
                    <div className='awards-card'>
                        <img src={AwardTwoImg} alt="" />
                        <h3>Shortlisted in over 8 software categories</h3>
                        <p>“The perfect organizer and team builder.”</p>
                    </div>
                    <div className='awards-card'>
                        <img src={AwardThreeImg} alt="" />
                        <h3>Market leader across 18 categories</h3>
                        <p>"Flexible product with near endless possibilities."</p>
                    </div>
                </div>
            </section>

            <section className='footer-section full'>
                <h2>Deliver your best work <span>with funday.com</span></h2>
                <p>No credit card needed   <span>✦</span>   Unlimited time on Free plan</p>
                <button onClick={() => navigate('/board')} className='btn-footer-get-started'><span className='get-started-txt'>Get Started</span>
                    <svg className='arrow-icon' width="16" height="12" viewBox="0 0 9 7" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.628.616a.5.5 0 1 0-.64.768L6.203 3.23H.5a.5.5 0 0 0 0 1h5.612L3.988 6a.5.5 0 1 0 .64.769l3.23-2.693a.5.5 0 0 0 0-.768L4.628.616z" fill="#FFFFFF"></path>
                    </svg>
                </button>

            </section>

        </div>
    )
}