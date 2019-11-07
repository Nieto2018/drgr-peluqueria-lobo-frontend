import React, { Component } from 'react'
import { withRouter } from 'react-router'

import pic01 from '../styles/images/pic01.jpg'
import pic02 from '../styles/images/pic02.jpg'

class Elements extends Component {

    render() {
        return (
            <div>

                {/* <!-- Heading --> */}
                <div id="heading" >
                    <h1>Elements</h1>
                </div>

                {/* <!-- Main --> */}
                <section id="main" className="wrapper">
                    <div className="inner">
                        <div className="content">

                            {/* <!-- Elements --> */}
                            <div className="row">
                                <div className="col-6 col-12-medium">

                                    {/* <!-- Text --> */}
                                    <h3>Text</h3>
                                    <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this
							is <em>emphasized</em>.
							This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
							This is <u>underlined</u>, this is <code>code</code>, and this is a <a href="/elements">link</a>.
						</p>
                                    <h2>Heading Level 2</h2>
                                    <h3>Heading Level 3</h3>
                                    <h4>Heading Level 4</h4>
                                    <h5>Heading Level 5</h5>
                                    <h6>Heading Level 6</h6>
                                    <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem
                                        non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed
							ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing.</p>

                                    {/* <!-- Lists --> */}
                                    <h3>Lists</h3>
                                    <div className="row">
                                        <div className="col-6 col-12-small">
                                            <h4>Unordered</h4>
                                            <ul>
                                                <li>Dolor pulvinar amet etiam.</li>
                                                <li>Sagittis adipiscing lorem eleifend.</li>
                                                <li>Felis enim feugiat viverra.</li>
                                            </ul>
                                            <h4>Alternate</h4>
                                            <ul className="alt">
                                                <li>Dolor pulvinar amet etiam.</li>
                                                <li>Sagittis adipiscing lorem eleifend.</li>
                                                <li>Felis enim feugiat viverra.</li>
                                            </ul>
                                        </div>
                                        <div className="col-6 col-12-small">
                                            <h4>Ordered</h4>
                                            <ol>
                                                <li>Dolor pulvinar sed etiam.</li>
                                                <li>Etiam vel lorem sed amet.</li>
                                                <li>Felis enim feugiat viverra.</li>
                                                <li>Dolor pulvinar magna etiam.</li>
                                                <li>Etiam vel felis at sed viverra.</li>
                                                <li>Felis enim feugiat amet dolore.</li>
                                                <li>Dolor pulvinar lorem etiam.</li>
                                                <li>Etiam vel felis at lorem amet.</li>
                                                <li>Felis enim feugiat viverra.</li>
                                                <li>Dolor pulvinar magna etiam.</li>
                                                <li>Etiam vel felis sed viverra.</li>
                                            </ol>
                                        </div>
                                    </div>
                                    <h4>Definition</h4>
                                    <dl>
                                        <dt>Alpha</dt>
                                        <dd>
                                            <p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum.
                                                Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus.
									Integer ac pellentesque praesent.</p>
                                        </dd>
                                        <dt>Beta</dt>
                                        <dd>
                                            <p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum.
                                                Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus.
									Integer ac pellentesque praesent.</p>
                                        </dd>
                                        <dt>Gamma</dt>
                                        <dd>
                                            <p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum.
                                                Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus.
									Integer ac pellentesque praesent.</p>
                                        </dd>
                                    </dl>

                                    {/* <!-- Icons --> */}
                                    <h3>Icons</h3>
                                    <ul className="icons">
                                        <li><a href="/elements" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                                        <li><a href="/elements" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                                        <li><a href="/elements" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                                        <li><a href="/elements" className="icon fa-github"><span className="label">Github</span></a></li>
                                        <li><a href="/elements" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
                                        <li><a href="/elements" className="icon fa-tumblr"><span className="label">Tumblr</span></a></li>
                                        <li><a href="/elements" className="icon fa-apple"><span className="label">Apple</span></a></li>
                                        <li><a href="/elements" className="icon fa-windows"><span className="label">Windows</span></a></li>
                                        <li><a href="/elements" className="icon fa-500px"><span className="label">500px</span></a></li>
                                    </ul>

                                    {/* <!-- Actions --> */}
                                    <h3>Actions</h3>
                                    <ul className="actions">
                                        <li><a href="/elements" className="button primary">Default</a></li>
                                        <li><a href="/elements" className="button">Default</a></li>
                                    </ul>
                                    <ul className="actions">
                                        <li><a href="/elements" className="button primary small">Small</a></li>
                                        <li><a href="/elements" className="button small">Small</a></li>
                                    </ul>
                                    <div className="row">
                                        <div className="col-3 col-12-small">
                                            <ul className="actions stacked">
                                                <li><a href="/elements" className="button primary">Default</a></li>
                                                <li><a href="/elements" className="button">Default</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-3 col-12-small">
                                            <ul className="actions stacked">
                                                <li><a href="/elements" className="button primary small">Small</a></li>
                                                <li><a href="/elements" className="button small">Small</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-3 col-12-small">
                                            <ul className="actions stacked">
                                                <li><a href="/elements" className="button primary fit">Default</a></li>
                                                <li><a href="/elements" className="button fit">Default</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-3 col-12-small">
                                            <ul className="actions stacked">
                                                <li><a href="/elements" className="button primary small fit">Small</a></li>
                                                <li><a href="/elements" className="button small fit">Small</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* <!-- Blockquote --> */}
                                    <h3>Blockquote</h3>
                                    <blockquote>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio
                                        porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet.
                                        Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra. Lorem ipsum
                                        dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis
                                        iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac sed amet praesent. Nunc
							lacinia ante nunc ac gravida.</blockquote>

                                    {/* <!-- Table --> */}
                                    <h3>Table</h3>
                                    <h4>Default</h4>
                                    <div className="table-wrapper">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Description</th>
                                                    <th>Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Alpha</td>
                                                    <td>Ante turpis integer aliquet porttitor.</td>
                                                    <td>10.00</td>
                                                </tr>
                                                <tr>
                                                    <td>Beta</td>
                                                    <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                                    <td>20.00</td>
                                                </tr>
                                                <tr>
                                                    <td>Gamma</td>
                                                    <td>Morbi faucibus arcu accumsan lorem.</td>
                                                    <td>30.00</td>
                                                </tr>
                                                <tr>
                                                    <td>Delta</td>
                                                    <td>Vitae integer tempus condimentum.</td>
                                                    <td>40.00</td>
                                                </tr>
                                                <tr>
                                                    <td>Epsilon</td>
                                                    <td>Ante turpis integer aliquet porttitor.</td>
                                                    <td>50.00</td>
                                                </tr>
                                                <tr>
                                                    <td>Zeta</td>
                                                    <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                                    <td>60.00</td>
                                                </tr>
                                                <tr>
                                                    <td>Eta</td>
                                                    <td>Morbi faucibus arcu accumsan lorem.</td>
                                                    <td>70.00</td>
                                                </tr>
                                                <tr>
                                                    <td>Theta</td>
                                                    <td>Vitae integer tempus condimentum.</td>
                                                    <td>80.00</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td colSpan="2"></td>
                                                    <td>360.00</td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    <h4>Alternate</h4>
                                    <div className="table-wrapper">
                                        <table className="alt">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Description</th>
                                                    <th>Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Alpha</td>
                                                    <td>Ante turpis integer aliquet porttitor.</td>
                                                    <td>10.00</td>
                                                </tr>
                                                <tr>
                                                    <td>Beta</td>
                                                    <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                                    <td>20.00</td>
                                                </tr>
                                                <tr>
                                                    <td>Gamma</td>
                                                    <td>Morbi faucibus arcu accumsan lorem.</td>
                                                    <td>30.00</td>
                                                </tr>
                                                <tr>
                                                    <td>Delta</td>
                                                    <td>Vitae integer tempus condimentum.</td>
                                                    <td>40.00</td>
                                                </tr>
                                                <tr>
                                                    <td>Epsilon</td>
                                                    <td>Ante turpis integer aliquet porttitor.</td>
                                                    <td>50.00</td>
                                                </tr>
                                                <tr>
                                                    <td>Zeta</td>
                                                    <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                                    <td>60.00</td>
                                                </tr>
                                                <tr>
                                                    <td>Eta</td>
                                                    <td>Morbi faucibus arcu accumsan lorem.</td>
                                                    <td>70.00</td>
                                                </tr>
                                                <tr>
                                                    <td>Theta</td>
                                                    <td>Vitae integer tempus condimentum.</td>
                                                    <td>80.00</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td colSpan="2"></td>
                                                    <td>360.00</td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>

                                </div>
                                <div className="col-6 col-12-medium">

                                    {/* <!-- Buttons --> */}
                                    <h3>Buttons</h3>
                                    <ul className="actions">
                                        <li><a href="/elements" className="button primary">Primary</a></li>
                                        <li><a href="/elements" className="button">Default</a></li>
                                    </ul>
                                    <ul className="actions">
                                        <li><a href="/elements" className="button primary large">Large</a></li>
                                        <li><a href="/elements" className="button">Default</a></li>
                                    </ul>
                                    <ul className="actions">
                                        <li><a href="/elements" className="button small">Small</a></li>
                                        <li><a href="/elements" className="button wide">Wide</a></li>
                                    </ul>
                                    <ul className="actions fit">
                                        <li><a href="/elements" className="button primary fit">Fit</a></li>
                                        <li><a href="/elements" className="button fit">Fit</a></li>
                                    </ul>
                                    <ul className="actions fit">
                                        <li><a href="/elements" className="button primary fit small">Fit + Small</a></li>
                                        <li><a href="/elements" className="button fit small">Fit + Small</a></li>
                                    </ul>
                                    <ul className="actions">
                                        <li><a href="/elements" className="button primary icon fa-search">Icon</a></li>
                                        <li><a href="/elements" className="button icon fa-download">Icon</a></li>
                                    </ul>
                                    <ul className="actions">
                                        <li><span className="button primary disabled">Primary</span></li>
                                        <li><span className="button disabled">Default</span></li>
                                    </ul>

                                    {/* <!-- Form --> */}
                                    <h3>Form</h3>
                                    <form method="post" action="#">
                                        <div className="row gtr-uniform">
                                            <div className="col-6 col-12-xsmall">
                                                <input type="text" name="name" id="name" value="" placeholder="Name" />
                                            </div>
                                            <div className="col-6 col-12-xsmall">
                                                <input type="email" name="email" id="email" value="" placeholder="Email" />
                                            </div>
                                            {/* <!-- Break --> */}
                                            <div className="col-12">
                                                <select name="category" id="category">
                                                    <option value="">- Select -</option>
                                                    <option value="alpha">Option alpha</option>
                                                    <option value="beta">Option beta</option>
                                                    <option value="gamma">Option gamma</option>
                                                    <option value="delta">Option delta</option>
                                                    <option value="epsilon">Option epsilon</option>
                                                    <option value="zeta">Option zeta</option>
                                                    <option value="eta">Option eta</option>
                                                    <option value="theta">Option theta</option>
                                                </select>
                                            </div>
                                            {/* <!-- Break --> */}
                                            <div className="col-4 col-12-small">
                                                <input type="radio" id="radio-alpha" name="radio" defaultChecked />
                                                <label htmlFor="radio-alpha">Radio alpha</label>
                                            </div>
                                            <div className="col-4 col-12-small">
                                                <input type="radio" id="radio-beta" name="radio" />
                                                <label htmlFor="radio-beta">Radio beta</label>
                                            </div>
                                            <div className="col-4 col-12-small">
                                                <input type="radio" id="radio-gamma" name="radio" />
                                                <label htmlFor="radio-gamma">Radio gamma</label>
                                            </div>
                                            {/* <!-- Break --> */}
                                            <div className="col-6 col-12-small">
                                                <input type="checkbox" id="checkbox-alpha" name="checkbox" />
                                                <label htmlFor="checkbox-alpha">Checkbox alpha</label>
                                            </div>
                                            <div className="col-6 col-12-small">
                                                <input type="checkbox" id="checkbox-beta" name="checkbox" defaultChecked />
                                                <label htmlFor="checkbox-beta">Checkbox beta</label>
                                            </div>
                                            {/* <!-- Break --> */}
                                            <div className="col-12">
                                                <textarea name="textarea" id="textarea" placeholder="Alpha beta gamma delta"
                                                    rows="6"></textarea>
                                            </div>
                                            {/* <!-- Break --> */}
                                            <div className="col-12">
                                                <ul className="actions">
                                                    <li><input type="submit" value="Submit Form" className="primary" /></li>
                                                    <li><input type="reset" value="Reset" /></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </form>

                                    {/* <!-- Image --> */}
                                    <h3>Image</h3>
                                    <h4>Fit</h4>
                                    <span className="image fit"><img src={pic01} alt="" /></span>
                                    <div className="box alt">
                                        <div className="row gtr-50 gtr-uniform">
                                            <div className="col-4"><span className="image fit"><img src={pic01} alt="" /></span>
                                            </div>
                                            <div className="col-4"><span className="image fit"><img src={pic01} alt="" /></span>
                                            </div>
                                            <div className="col-4"><span className="image fit"><img src={pic01} alt="" /></span>
                                            </div>
                                            {/* <!-- Break --> */}
                                            <div className="col-4"><span className="image fit"><img src={pic01} alt="" /></span>
                                            </div>
                                            <div className="col-4"><span className="image fit"><img src={pic01} alt="" /></span>
                                            </div>
                                            <div className="col-4"><span className="image fit"><img src={pic01} alt="" /></span>
                                            </div>
                                            {/* <!-- Break --> */}
                                            <div className="col-4"><span className="image fit"><img src={pic01} alt="" /></span>
                                            </div>
                                            <div className="col-4"><span className="image fit"><img src={pic01} alt="" /></span>
                                            </div>
                                            <div className="col-4"><span className="image fit"><img src={pic01} alt="" /></span>
                                            </div>
                                        </div>
                                    </div>
                                    <h4>Left &amp; Right</h4>
                                    <p>
                                        <span className="image left"><img src={pic02} alt="" /></span>
                                        Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget.
                                        tempus euismod. Magna et cursus lorem faucibus vestibulum. Blandit adipiscing eu
                                        felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque
                                        praesent tincidunt felis sagittis eget. tempus euismod tempus. Vestibulum ante ipsum
                                        primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
                                        adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis
                                        sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum.
                                        Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus.
                                        Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida lorem ipsum dolor
                                        sit amet dolor feugiat consequat.
						</p>
                                    <p>
                                        <span className="image right"><img src={pic02} alt="" /></span>
                                        Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget.
                                        tempus euismod. Magna et cursus lorem faucibus vestibulum. Blandit adipiscing eu
                                        felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque
                                        praesent tincidunt felis sagittis eget. tempus euismod tempus. Vestibulum ante ipsum
                                        primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
                                        adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis
                                        sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum.
                                        Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus.
                                        Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida lorem ipsum dolor
                                        sit amet dolor feugiat consequat.
						</p>

                                    {/* <!-- Box --> */}
                                    <h3>Box</h3>
                                    <div className="box">
                                        <p>Felis sagittis eget tempus primis in faucibus vestibulum. Blandit adipiscing eu
                                            felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque
                                            praesent tincidunt felis sagittis eget. tempus euismod. Magna sed etiam ante ipsum
                                            primis in faucibus vestibulum. Blandit adipiscing eu ipsum primis in faucibus
                                            vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu
								faucibus lorem ipsum dolor sit amet nullam.</p>
                                    </div>

                                    {/* <!-- Preformatted Code --> */}
                                    <h3>Preformatted</h3>
                                    <pre>
                                        <code>
                                            i = 0;
                                            {/* while (!deck.isInOrder()) {
                                                print('Iteration ' + i);
                                                    deck.shuffle();
                                                    i++;
                                                }
                                    
                                            print 'It took ' + i + ' iterations to sort the deck.'; */}
                                        </code>
                                    </pre>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }

}


export default withRouter(Elements)