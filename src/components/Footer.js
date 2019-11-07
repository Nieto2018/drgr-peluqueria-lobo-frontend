import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

class Footer extends Component {

    render() {
        return (
            <footer id="footer">
                <div className="inner">
                    <div className="content">
                        <section>
                            <h3>Accumsan montes viverra</h3>
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing. Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing sed feugiat eu faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida.</p>
                        </section>
                        <section>
                            <h4>Sem turpis amet semper</h4>
                            <ul className="alt">
                                <li><Link to="#">Dolor pulvinar sed etiam.</Link></li>
                                <li><Link to="#">Etiam vel lorem sed amet.</Link></li>
                                <li><Link to="#">Felis enim feugiat viverra.</Link></li>
                                <li><Link to="#">Dolor pulvinar magna etiam.</Link></li>
                            </ul>
                        </section>
                        <section>
                            <h4>Magna sed ipsum</h4>
                            <ul className="plain">
                                <li><Link to="#"><i className="icon fa-twitter">&nbsp;</i>Twitter</Link></li>
                                <li><Link to="#"><i className="icon fa-facebook">&nbsp;</i>Facebook</Link></li>
                                <li><Link to="#"><i className="icon fa-instagram">&nbsp;</i>Instagram</Link></li>
                                <li><Link to="#"><i className="icon fa-github">&nbsp;</i>Github</Link></li>
                            </ul>
                        </section>
                    </div>
                    <div className="copyright">
                        &copy; Untitled. Photos <Link to="https://unsplash.co">Unsplash</Link>, Video <Link to="https://coverr.co">Coverr</Link>.
					</div>
                </div>
            </footer>
        )
    }

}


export default withRouter(Footer)