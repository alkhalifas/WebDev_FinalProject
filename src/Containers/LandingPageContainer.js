import React from "react";
import {findAllUsers} from "../Actions/UserActions";
import {connect} from "react-redux";
import {findAllPublicSnippets} from "../Actions/SnippetActions";
// import {connect} from "react-redux";
// import fire from "./../config/db";

class LandingPageContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            user: "alkhalifas",
            // user: null,
            snippets: []
        };
    }




    componentDidMount() {
        this.props.findAllPublicSnippets()
        // this.render();
    }

    componentDidUpdate() {
        // this.props.findAllPublicSnippets()
        this.render();
    }

    render() {
        function currentTime() {
            let n =  new Date();
            let y = n.getFullYear();
            let m = n.getMonth() + 1;
            let d = n.getDate();
            let h = n.getHours();
            let min = n.getMinutes();
            let s = n.getSeconds();

            return  m + "/" + d + "/" + y + " " + h + ":" + min + ":" + s;
        }

        return (
            <div>
                {console.log(this.props.snippets)}
                {
                    this.state.user !== null &&

                    <div>
                        <div className="jumbotron text-center" style={{height: 200}}>
                            <h1 className="display-4">Welcome back to CodeSaver, {this.state.user}!</h1>
                        </div>
                        <div>
                            <h6 class="text-secondary">Updated On: {currentTime()}</h6>
                        </div>
                    </div>
                }
                {
                    this.state.user == null &&
                    <div className="jumbotron text-center" style={{height: 275}}>
                        <h1 className="display-4">Welcome to CodeSaver!</h1>
                        <p className="lead">"We are on a mission to make your coding life simpler, more productive, and more efficient."</p>
                        <p className="lead">
                            <a className="btn btn-primary btn-lg m-2" href="#" role="button">About Us</a>
                            <a className="btn btn-primary btn-lg m-2" href="#" role="button">Learn More</a>
                            <a className="btn btn-primary btn-lg m-2" href="#" role="button">Join Now</a>
                        </p>
                    </div>
                }
                <div>
                    <div className=" text-center">
                        <h1 className="display-4">Coming Soon!</h1>
                    </div>
                </div>

            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    snippets: state.snippetReducer.snippets
})

const propertyToDispatchMapper = (dispatch) => ({
    findAllPublicSnippets: () => findAllPublicSnippets(dispatch)
})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)
(LandingPageContainer)
