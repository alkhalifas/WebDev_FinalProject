import React from "react";
import {connect} from "react-redux";
import UserAdminComponent from "./UserAdminComponent";
import UserAdminRowComponent from "./UserAdminRowComponent";
import fire from "../../config/db";
import Loader from 'react-loader-spinner'
import {findAllUsers} from "../../Actions/UserActions";
import UserService, {updateUser} from "../../services/UserService";

class UserAdminListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.findAllUsers()
        this.render();
    }
    componentDidUpdate() {
        this.render();
    }


    updateUserRow = (uid, user) => {
        UserService.updateUser(uid,user).then(() => this.props.findAllUsers())

    };


    render() {
        return (
            <div>
                <h2 className="m-3">User Admin Page</h2>
                <div>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>User Type</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Manage:</th>
                        </tr>
                        </thead>
                        <tbody>
                        {

                            (this.props.users && this.props.users.length > 0) &&
                            this.props.users.map((user, index) =>
                                <UserAdminRowComponent
                                    user={user}
                                    updateUserRow={this.updateUserRow}
                                />
                            )

                        }

                        </tbody>
                    </table>
                    {
                        (!this.props.users || this.props.users.length <= 0) &&
                        <Loader type="audio" color="#00BFFF" height={80} width={80}/>
                    }
                </div>
            </div>
        );
    }
}


const stateToPropertyMapper = (state) => ({
    users: state.userReducer.users
})

const propertyToDispatchMapper = (dispatch) => ({
    findAllUsers: () => findAllUsers(dispatch)
})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)
(UserAdminListComponent)
