import React from 'react'
import "../footer_page/footer.css"

export default function Footer() {
  return (
    <div className='footer_section'>
        <div className="row mt-5 justify-content-center">
            <div className="col-10 d-flex">
                <div className="col-2">
                    <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="themoviesdb" />
                </div>
                <div className="col-2 footer__">
                    <h6 className='thefirs'>THE BASICS</h6>
                   <ul>
                    <li>
                        <a className='text-decoration-none footer_link' href='#'>About TMDB</a>
                    </li>
                    <li>
                        <a className='text-decoration-none footer_link' href='#'>Contact Us</a>
                    </li>
                    <li>
                        <a className='text-decoration-none footer_link' href='#'>Support Forums</a>
                    </li>
                    <li>
                        <a className='text-decoration-none footer_link' href='#'>API</a>
                    </li> 
                    <li>
                        <a className='text-decoration-none footer_link' href='#'>System Status</a>
                    </li>
                   </ul>
                </div>
                <div className="col-2 footer__">
                <h6 className='thefirs'>GET INVOLVED</h6>
                   <ul>
                    <li>
                        <a className='text-decoration-none footer_link' href='#'>Contribution Bible</a>
                    </li>
                    <li>
                        <a className='text-decoration-none footer_link' href='#'>Add New Movie</a>
                    </li>
                    <li>
                        <a className='text-decoration-none footer_link' href='#'>Add New TV Show</a>
                    </li>
                   </ul>
                </div>
                <div className="col-2 footer__">
                <h6 className='thefirs'>COMMUNITY</h6>
                   <ul>
                    <li>
                        <a className='text-decoration-none footer_link' href='#'>Guidelines</a>
                    </li>
                    <li>
                        <a className='text-decoration-none footer_link' href='#'>Discussions</a>
                    </li>
                    <li>
                        <a className='text-decoration-none footer_link' href='#'>Leaderboard</a>
                    </li>
                    <li>
                        <a className='text-decoration-none footer_link' href='#'>Twitter</a>
                    </li> 
                   </ul>
                </div>
                <div className="col-2 footer__">
                <h6 className='thefirs'>LEGAL</h6>
                   <ul>
                    <li>
                        <a className='text-decoration-none footer_link' href='#'>Terms of Use</a>
                    </li>
                    <li>
                        <a className='text-decoration-none footer_link' href='#'>API Terms of Use</a>
                    </li>
                    <li>
                        <a className='text-decoration-none footer_link' href='#'>Privacy Policy</a>
                    </li>
                   </ul>    
                </div>
            </div>
        </div>
    </div>
  )
}
