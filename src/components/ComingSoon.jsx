import React from 'react';
import '../css/ComingSoon.css';

const ComingSoon = () => {
  return (
    <div className="tc white mt0 pt3">
        <div className="home">
            <h1 className="f2 csTitle">SOMETHING AWESOME IS<br /> COMING SOON</h1>
            <p className="f6">Your all-in-one affiliate marketing tracking software <b>track, automate</b> and <b>optimize</b> your campaigns.</p>
            
            <div className="flexbox">
                <div id="countdown" className="dib w-10 ma2 br3 bg-white black">
                    <h2>7</h2>
                    <p>Days</p>
                </div>
                <div id="countdown" className="dib w-10 ma2 br3 bg-white black">
                    <h2>24</h2>
                    <p>Hours</p>
                </div>
                <div id="countdown" className="dib w-10 ma2 br3 bg-white black">
                    <h2>54</h2>
                    <p>Minutes</p>
                </div>
                <div id="countdown" className="dib w-10 ma2 br3 bg-white black">
                    <h2>11</h2>
                    <p>Days</p>
                </div>
            </div>

            <form>
                <div className="flexbox mt2 justify-center">
                    <div id="namefield" className="dib w-40 w-20-ns w-20-m w-20-l ma1">
                        <input id="customfield" className="f7 f7-l input-reset bn fl black-80 bg-white mh2 pa2 lh-solid w-100 w-100-m w-100-l" type="text" placeholder="First Name.." />
                    </div>
                    <div id="namefield" className="dib w-40 w-20-ns w-20-m w-20-l ma1">
                        <input id="customfield" className="f7 f7-l input-reset bn fl black-80 bg-white mh2 pa2 lh-solid w-100 w-100-m w-100-l" type="text" placeholder="Last Name.." />
                    </div>
                </div>

                <div class="pa4-l">
                    <div class="mw7 center pa4 br2-ns ba b--black-10">
                        <div class="cf bn ma0 pa0">
                            <div class="cf">
                                <label class="clip" for="email-address">Email Address</label>
                                <input class="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-70-m w-70-l br2-ns br--left-ns" placeholder="Your Email Address" type="text" name="email-address" value="" id="email-address" />
                                <input id="button-reset" class="f6 f5-l button-reset fl pv3 tc bn bg-animate white pointer w-100 w-30-m w-30-l br2-ns br--right-ns bg-dark-blue hover-bg-purple" type="submit" value="JOIN OUR WAITING LIST" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>
        
    </div>
  );
}

export default ComingSoon;