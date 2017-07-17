import React from 'react';

class About extends React.Component{
    render(){
        return(
            /*<div>
                <h1> This is the about page </h1>    
            </div> */

             <div  className="container">

                <div className="profile">
        
                    <h2>Carlos Rodrigues</h2>

                    <div className="media">
                        <div className="media-left">
                        </div>
                        <div className="media-body">

                            <h4 className="media-heading">Future Junior Web Developer</h4>
                            <div>

                                <h5>Age</h5>
                                <p>30
                                </p>
                                <h5>Email</h5>
                                <p>
                                    NeedAJob@branstation.io
                                </p>
                                <h5>Bio</h5>
                                <p>
                                Carlos ia a team worker and creative. He is really happy with his decision to study at BrainStation. 
                                This brazilian is loving the cold and the mix of cultures in Canada.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>     
        )
    }
}

export default About;